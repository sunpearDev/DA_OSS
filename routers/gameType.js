const express = require("express");
const game = require("../models/game");
const router = express.Router();
const GameType = require("../models/gameType");

router.get("/", (req, res) => {
  GameType.find()
    .then((gameTypes) => res.json(gameTypes))
    .catch((err) => res.status(404).json(err));
});
router.get("/:id", (req, res) => {
  GameType.findById(req.params.id).populate('games')
    .then((gameType) => res.json(gameType.games))
    .catch((err) => res.status(404).json(err));
});
router.get("/get/names", (req, res) => {
  
  GameType.find({}, 'name')
    .then((gameTypes) => {
      res.json(gameTypes);
    })
    .catch((err) => res.status(404).json(err));
});
router.post("/", (req, res) => {
  let gameType = new GameType({
    name: req.body.name,
    games: [],
  });
  gameType
    .save()
    .then((gameType) => res.json(gameType.id))
    .catch((err) => res.status(404).json(err));
});
router.put("/:id", async (req, res) => {
  await GameType.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ GameType }.id))
    .catch((err) => res.status(404).json(err));
});

router.delete("/:id", async (req, res) => {
  await GameType.findByIdAndDelete(req.params.id)
    .then(() => res.json({ GameType }.id))
    .catch((err) => res.status(404).json(err));
});
module.exports = router;
