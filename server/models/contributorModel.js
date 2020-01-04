const mongoose = require("mongoose");

let contributorSchema = new mongoose.Schema({
    name: String,
    twitter: String,
    twitch: String,
    bio: String,
    portrait: String,
    message: String
});

championSchema.set("toJSON", { virtuals: true });

const Champion = mongoose.model("Champion", championSchema, "Champions");

module.exports = { Champion };
