const express = require('express');
const router = express.Router();
const reviewTemplate =require('../models/ReviewModels').schema
const bcrypt = require('bcryptjs');
const MovieModels = require('../models/MovieModels');


router.get("/:category",(request,response)=>{
    MovieModels.find({category:{name:request.params.category}})
    .then((movies)=>{
        response.json(movies)
    })
    .catch((err)=>{
        response.json(err)
    })
})

module.exports = router;