const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Library = require('../models/library');

router.get('/', (req, res) => {
    Order.find().populate('idUser game')
        .then((orders) => res.json(orders))
        .catch((err) => res.status(404).json(err));
})
router.post('/', async (req, res) => {
    let order = new Order({
        idUser: req.body.idUser,
        game: req.body.game,
        status: req.body.status,
    })
    if (order.status === true) {
        var library = await Library.findOneAndUpdate({ 'idUser': order.idUser }, { $push: { games: order.game } }).then()
            .catch((err) => res.status(404).json(err))
    }

    order.save()
        .then((order) => res.json(order))
        .catch((err) => res.status(404).json(err));

})
router.put('/:id', (req, res) => {
    Order.findByIdAndUpdate(req.params.id, {status:true})
    .then((order) => res.json(order.status))
        .catch((err) => res.status(404).json(err));
})
router.delete("/:id", async (req, res) => {
    await Order.findByIdAndDelete(req.params.id)
        .then(() => res.json({ GameType }.id))
        .catch((err) => res.status(404).json(err));
});

module.exports = router;