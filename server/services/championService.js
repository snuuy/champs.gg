const mongoose = require("mongoose");
const { Champion } = require("../services/dbService");

module.exports = { getChampion, getAllChampions };

async function getChampion(shortname) {
  let champion = await Champion.findOne({ shortname: shortname })
    .populate("counters.champions.champion", "-counters -votes -contributors")
  if (champion == null) {
    throw new Error("Champion not found")
  }
  return champion;
}

async function getAllChampions(cb) {
  Champion.find()
    .exec((err, champs) => {
      if (err) return console.log(err);
      champions = []
      champs.forEach(champ => {
        champions.push({
          name: champ.name,
          shortname: champ.shortname,
          score: champs.totalScore / champ.votes.length,
          roles: champ.roles
        })
      });
      cb(champions)
    });
}