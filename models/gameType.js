const mongoose = require("mongoose");

const GameType = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }]
});

module.exports = mongoose.model("GameType", GameType);
