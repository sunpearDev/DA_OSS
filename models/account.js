const mongoose = require("mongoose");

const Account= mongoose.Schema({
    username:{
        type:String,
        minLength:6,
        maxLength:50,
        require:true,
        unique:true
    },
    password:{
        type:String,
        minLength:8,
        maxLength:50,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    typeAccount:{
        type:String,
        enum:['customer','admin'],
        default:'customer',
        require:true
    }
})


module.exports=mongoose.model("Account",Account)