const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  name: String,
  price: Number,
  date_released: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
  idTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GameType", //khoá ngoại ts bảng nào
    }
  ],
  miniDiscription:String,
  discription: String,
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  images: [
    {
      type: String,
      required: true
    },
  ],
  video: String,
  publisher: {
    type: String,
    required: true,
  },
  system_required: {
    Minimum: {
      OS: String,
      Process: String,
      Memory: Number, 
      Storage: Number,
      Graphics: String,
    },
    Recommended: {
      OS: String,
      Process: String,
      Memory: Number,
      Storage: Number,
      Graphics: String,
    }
  },
  download_link: [{
    type: String,
  }]
});

module.exports = mongoose.model("Game", Game);
