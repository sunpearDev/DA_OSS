const express = require("express");
const router = express.Router();
const Library = require("../models/library");

router.get("/:iduser", (req, res) => {
  Library.find({'idUser':req.params.iduser}).populate('games')
    .then((library) => res.json(library))
    .catch((err) => res.status(404).json(err));
});
router.post("/", (req, res) => {
  let library = new Library({
    idUser: req.body.idUser,
    games: [],
  });
  library
    .save()
    .then((library) => {
      res.json(library.id);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});
router.put('/:iduser',(req,res)=>{
  Library.findOneAndUpdate({'idUser':req.params.iduser},{$push:{games:res.body.game}}).then((library) => {res.json(library.id);})
  .catch((err) => res.status(404).json(err))
})
module.exports = router;