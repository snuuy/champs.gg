const mongoose = require("mongoose");

let counterSchema = new mongoose.Schema({
  champion: mongoose.Schema.Types.ObjectId,
  difficulty: Number,
  comments: String
})

let championSchema = new mongoose.Schema({
  name: String,
  shortname: String,
  votes: [mongoose.Schema.Types.ObjectId],
  totalScore: Number,
  contributor: mongoose.Schema.Types.ObjectId,
  top: [counterSchema],
  mid: [counterSchema],
  jungle: [counterSchema]
});

championSchema.set("toJSON", { virtuals: true });

const Champion = mongoose.model("Champion", championSchema, "Champions");

module.exports = { Champion };
