const mongoose = require("mongoose");
const { Champion } = require("../services/dbService");

module.exports = { getChampion };

async function getChampion(shortname) {
  let champion = await Champion.findOne({ shortname: shortname })
    .populate("counters.top.champion")
    .populate("counters.mid.champion")
    .populate("counters.jungle.champion", "-counters -contributor -votes")
    .populate("counters.support.champion")
    .populate("counters.bot.champion")
  if (champion == null) {
    throw new Error("Champion not found")
  }
  return champion;
}