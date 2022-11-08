const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"basic",
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})

module.exports = mongoose.model("UserTable",signUpTemplate);