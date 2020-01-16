const mongoose = require("mongoose");
const { Vote, Champion } = require("../services/dbService");

module.exports = { scoreChampion };

function scoreChampion(name, score, ip, cb) {
  if (score > 5 || score < 1)
    cb(false, "Invalid score")
  Champion.findOne({ shortname: name })
    .then(champion => {
      if (!champion) throw new Error("Invalid champion");
      Vote.findOne({ ip: ip, champion: champion._id })
        .then(vote => {
          console.log(vote)
          if (!vote) {
            let vote = new Vote({ champion: champion._id, score: score, ip: ip });
            vote.save((err, vote) => {
              if (!err) {
                Champion.updateOne({ shortname: name }, { $inc: { totalScore: score, numVotes: 1 } }, err => {
                  if (!err) cb(true)
                  else cb(false, err)
                })
              }
              else cb(false, err)
            })
          }
          else if (vote.score != score) {
            vote.score = score;
            champion.totalScore += score - vote.score;
            vote.save();
            champion.save();
            cb(true)
          }
          else if (vote.score == score) {
            cb(false, "Duplicate vote");
          }
        })
        .catch(err => { cb(false, err); })
    })
    .catch(err => { cb(false, err); })
}
