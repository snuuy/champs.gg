const mongoose = require("mongoose");

let championSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  counters: [
    {
      score: Number,
      champion: {
        type: mongoose.Schema.ObjectId,
        ref: "champion"
      }
    }
  ]
});

championSchema.set("toJSON", { virtuals: true });

const Champion = mongoose.model("Champion", championSchema, "Champions");

module.exports = { Champion };
