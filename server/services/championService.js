const mongoose = require("mongoose");
const { Champion } = require("../services/dbService");
const { Vote } = require("../services/dbService");

module.exports = { getChampion, getAllChampions };

async function getChampion(shortname) {
  let champion = await Champion.findOne({ shortname: shortname })
    .populate("counters.champions.champion", "-counters -votes -contributors")
  if (champion == null) {
    throw new Error("Champion not found")
  }
  return champion;
}

async function getAllChampions(ip, cb) {
  const votes = await Vote.find({ ip: ip })
  Champion.find()
    .exec((err, champs) => {
      if (err) {
        cb(null)
        return console.log(err);
      }
      champions = []
      champs.forEach(champ => {
        let vote = votes.find((vote) => vote.champion == champ.id)
        //console.log(vote)
        champions.push({
          name: champ.name,
          shortname: champ.shortname,
          score: champ.numVotes == 0 ? 0 : champ.totalScore / champ.numVotes,
          roles: champ.roles,
          userVote: vote ? vote.score : null
        })
      });
      cb(champions)
    });
}