const mongoose = require("mongoose");
const { Champion } = require("../services/dbService");

module.exports = { getChampion };

function getChampion(shortname) {
  let champion = Champion.findOne({ shortname: shortname }).populate("contributor");
  if (champion == null) {
    throw new Error("Champion not found")
  }
  return champion;
}
