const express = require('express');
const router = express.Router();
const reviewTemplate =require('../models/ReviewModels').schema
const bcrypt = require('bcryptjs');
const MovieModels = require('../models/MovieModels');




router.get("/:language",(request,response)=>{
    MovieModels.find({language:request.params.language})
    .then((movies)=>{
        response.json(movies)
    })
    .catch((err)=>{
        response.json(err)
    })
})
module.exports=router;
