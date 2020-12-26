const express = require('express');
const router = express.Router();
const Game = require('../models/game');
const GameType = require("../models/gameType");

router.get('/', (req, res) => {
  Game.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(404).json(err));
})
router.get('/main', (req, res) => {
  Game.find().limit(4)
    .then((games) => res.json(games))
    .catch((err) => res.status(404).json(err));
})
router.get('/:id', (req, res) => {
  Game.findById(req.params.id).populate('idTypes', 'name')
    .then((game) => {
      res.json(game)
    })
    .catch((err) => res.status(404).json(err));
})
router.post('/sort/:type/:sortValue/', (req, res) => {
  if (req.params.type !== '0') {
    if (req.params.sortValue === '0') {
      Game.find({ 'idTypes': { $in: [req.params.type] } })
        .then((games) => {
          res.json(games)
        })
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '1') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ name: 1 }).limit(6)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '2') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ date_released: 1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '3') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ price: 1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '4') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ price: -1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else res.status(404).json("Cant get games")
  }
  else {
    if (req.params.sortValue === '0') {
      Game.find().skip((req.params.page-1)*6).limit(6)
        .then((games) => {
          res.json(games)
        })
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '1') {
      Game.find().sort({ name: 1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '2') {
      Game.find().sort({ date_released: 1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '3') {
      Game.find().sort({ price: 1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '4') {
      Game.find().sort({ price: -1 })
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else res.status(404).json("Cant get games")
  }


})
router.post('/sort/:type/:sortValue/:page', (req, res) => {
  const gameinPage=4
  if (req.params.type !== '0') {
    if (req.params.sortValue === '0') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => {
          res.json(games)
        })
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '1') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ name: 1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '2') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ date_released: 1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '3') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ price: 1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '4') {
      Game.find({ 'idTypes': { $in: [req.params.type] } }).sort({ price: -1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else res.status(404).json("Cant get games")
  }
  else {
    if (req.params.sortValue === '0') {
      Game.find().skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => {
          res.json(games)
        })
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '1') {
      Game.find().sort({ name: 1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '2') {
      Game.find().sort({ date_released: 1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '3') {
      Game.find().sort({ price: 1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else if (req.params.sortValue === '4') {
      Game.find().sort({ price: -1 }).skip((req.params.page-1)*gameinPage).limit(gameinPage)
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json(err));
    }
    else res.status(404).json("Cant get games")
  }


})
router.post('/', (req, res) => {
  let game = new Game({
    name: req.body.name,
    price: req.body.price,
    date_released: req.body.date_released,
    idTypes: req.body.idTypes,
    miniDiscription: req.body.miniDiscription,
    discription: req.body.discription,
    discount: req.body.discount,
    images: req.body.images,
    video: req.body.video,
    publisher: req.body.publisher,
    system_required: req.body.system_required,
    download_link: req.body.download_link
  })
  game.save().then(async (game) => {
    let types = await game.idTypes
    types.forEach(idType => {
      GameType.findOneAndUpdate({ _id: idType }, { $push: { games: game._id } }).then()
        .catch((err) => res.status(404).json(err))
      res.json(game.id)

    }).catch((err) => res.status(404).json(err))
  })

})
router.put('/:id', async (req, res) => {
  let game = await Game.findById(req.params.id)
  await game.idTypes.forEach(async (idtype) => {
    if (req.body.idTypes.includes(idtype) === false)
      await GameType.findByIdAndUpdate(idTypes, { $pull: { games: game._id } }).then()
  })

  await req.body.idTypes.forEach(async (idtype) => {
    if (game.idTypes.includes(idtype) === false)
      await GameType.findByIdAndUpdate(idTypes, { $push: { games: game._id } }).then()
  })
  res.json(game)
})
router.delete('/:id', async (req, res) => {
  await Game.findByIdAndDelete(req.params.id).then(() => { res.json(true) })
    .catch((err) => res.status(404).json(err))
})


module.exports = router