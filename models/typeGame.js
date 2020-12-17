const mongoose = require("mongoose");

const TypeGame = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("TypeGame", TypeGame);
