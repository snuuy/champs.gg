const mongoose = require("mongoose");

let contributorSchema = new mongoose.Schema({
    name: String,
    twitter: String,
    twitch: String,
    bio: String,
    portrait: String,
    message: String
});

contributorSchema.set("toJSON", { virtuals: true });

const Contributor = mongoose.model("Champion", contributorSchema, "Champions");

module.exports = { Contributor };
