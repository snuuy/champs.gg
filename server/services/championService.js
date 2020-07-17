const mongoose = require("mongoose");
const { Champion } = require("../services/dbService");
const { Vote } = require("../services/dbService");

module.exports = { getChampion, getAllChampions };

// For champion pages
async function getChampion(shortname, ip) {
  let champion = await Champion.findOne({ shortname: shortname })
    .populate("counters.champions.champion", "-counters -votes -contributors")
    .lean();
  if (champion == null) {
    throw new Error("Champion not found")
  }
  const vote = await Vote.findOne({ ip: ip, champion: champion._id })
  if (vote) champion.userVote = vote.score
  return champion;
}

// For landing page
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