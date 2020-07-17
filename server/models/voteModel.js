const mongoose = require("mongoose");

/* Database schema for public voting */

let voteSchema = new mongoose.Schema({
  ip: String,
  champion: mongoose.Schema.Types.ObjectId,
  score: Number
});

voteSchema.set("toJSON", { virtuals: true });

const Vote = mongoose.model("Vote", voteSchema, "Votes");

module.exports = { Vote };