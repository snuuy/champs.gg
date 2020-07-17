const mongoose = require("mongoose");
const { Vote, Champion } = require("../services/dbService");

module.exports = { scoreChampion };

/* This file handles scoring the public voting for champions */

function scoreChampion(name, score, ip, cb) {
  if (score > 5 || score < 1)
    cb(false, "Invalid score")
  Champion.findOne({ shortname: name })
    .then(champion => {
      if (!champion) cb(false, "Invalid champion")
      Vote.findOne({ ip: ip, champion: champion._id })
        .then(vote => {
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
            champion.totalScore += score - vote.score;
            vote.score = score;
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