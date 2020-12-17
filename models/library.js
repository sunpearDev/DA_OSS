const mongoose = require("mongoose");

const Library = mongoose.Schema({
    idUser: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Account',
        require:true,
        unique: true,
        index:true
    },
    games:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Game'}
    ]
})

module.exports = mongoose.model('Library',Library,)
