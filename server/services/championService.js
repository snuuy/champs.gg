const mongoose = require("mongoose");
const { Champion } = require("../services/dbService");

module.exports = { getChampion };

async function getChampion(shortname) {
  let champion = await Champion.findOne({ shortname: shortname });
  if (champion == null) {
    throw new Error("Champion not found")
  }
  return champion;
}
