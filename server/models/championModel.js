const mongoose = require("mongoose");

let counterSchema = new mongoose.Schema({
  champion: mongoose.Schema.Types.ObjectId,
  difficulty: Number,
  comments: String
})

let contributorSchema = new mongoose.Schema({
  name: String,
  twitter: String,
  twitch: String,
  opgg: String,
  discord: String,
  bio: String,
  portrait: String,
  message: String
});

let championSchema = new mongoose.Schema({
  name: { type: String },
  shortname: { type: String },
  votes: [mongoose.Schema.Types.ObjectId],
  totalScore: Number,
  contributors: [contributorSchema],
  roles: [{
    role: String,
    counters: [counterSchema]
  }]
});

championSchema.set("toJSON", { virtuals: true });

const Champion = mongoose.model("Champion", championSchema, "Champions");

module.exports = { Champion };
