const express = require("express");
const router = express.Router();
const TypeGame = require("../models/typeGame");

router.get("/", (req, res) => {
  TypeGame.find()
    .then((res) => res.json())
    .catch((err) => res.json(err));
});
router.get("/:id", (req, res) => {
  TypeGame.findById(req.params.id)
    .then((res) => res.json())
    .catch((err) => res.json(err));
});
router.post("/", (req, res) => {
  let typeGame = new TypeGame({
    name: req.body.name,
  });
  typeGame
    .save()
    .then((typeGame) => res.json(typeGame.name + " was added."))
    .catch((err) => res.json(err));
});
router.put('/:id',async (req, res) =>{
  await TypeGame.findByIdAndDelete(req.params.id, req.body)
  .then(() => res.json(req.params.id+"was update."))
  .catch((err) => res.status(404).json(err));
})
router.delete('/:id',async (req, res)=>{
  await TypeGame.findByIdAndDelete(req.params.id)
        .then(() => res.json(req.params.id+"was delete."))
        .catch((err) =>res.status(404).json(err));
})
module.exports = router
