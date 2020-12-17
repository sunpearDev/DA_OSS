const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const Library = require("../models/library");
const sha1 = require('sha1');

router.get("/", (req, res) => {
  Account.find()
    .then((accounts) => res.json(accounts))
    .catch((err) => res.json(err));
});

router.post("/login", (req, res) => {
  Account.find({ 'username': req.body.username, 'password': sha1(req.body.password) }, 'id username typeAccount')
    .then((data) => res.json(data))
    .catch((err) => res.json("Cant found user, " + err));
});


router.post("/", (req, res) => {

  let account = new Account({
    username: req.body.username,
    password: sha1(req.body.password),
    email: req.body.email,
    typeAccount: req.body.typeAccount,
  });
  account.save().then((account) => {
    let library = new Library({
      idUser: account._id,
      games: [],
    });
    library
      .save()
    let result = {
      id: account._id,
      username: account.username,
      games: library.games
    }
    res.json(result);
  })
    .catch((err) => res.json(err));
});
router.put("/:id", async (req, res) => {
  await Account.findByIdAndDelete(req.params.id, req.body)
    .then(() => res.json({ Account }.id))
    .catch((err) => res.status(404).json(err));
});
router.delete("/:id", (req, res) => {
  Account.findById(req.params.id,async (err,acc)=>{
    let library=await Library.find({'idUser': acc._id}).deleteOne().then().catch((err) => res.status(404).json(err));
    let account=await Account.find({'_id':acc._id}).deleteOne().then().catch((err) => res.status(404).json(err));
    if(library!=={}&&account!=={})
    res.json(true)
  }).catch((err) => res.status(404).json(err));


})

module.exports = router;
