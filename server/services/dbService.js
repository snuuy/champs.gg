const { MONGODB_URI } = require("../config.json");
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || MONGODB_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Make sure MongoDB is running
mongoose.Promise = global.Promise;

const { Vote } = require("../models/voteModel");
const { Champion } = require("../models/championModel");

module.exports = { Vote, Champion };
