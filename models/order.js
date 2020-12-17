const mongoose = require("mongoose");

const Order = mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        require: true,
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        require: true
    },
    date_contact: {
        type: Date,
        default: new Date().toLocaleDateString(),
    },
    status:{
        type: Boolean,
        required: true
    }

})

module.exports=mongoose.model("Order",Order)