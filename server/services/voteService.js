const mongoose = require("mongoose");
const { Vote, Champion } = require("../services/dbService");

module.exports = { scoreChampion };

//incomplete
function scoreChampion(name, score, ip) {
  Champion.findOne({ shortname: name })
    .then(champion => {
      if (!champion) throw new Error("Invalid champion");
      Vote.findOne({ ip: ip, championId: champion._id })
        .then(vote => {
          if (!vote) {
            Vote.create({ championId: champion._id, score: score, ip: ip });
          }
          else if (vote.score != score) {
            let diff = score - vote.score;
            vote.score = score;
            champion.score += diff;
            vote.save();
            champion.save();
          }
          else if (vote.score == score) {
            throw new Error("Duplicate vote");
          }
        })
        .catch(err => { throw err })
    })
    .catch(err => { throw err })
}
