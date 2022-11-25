// routes for all the movies

const express = require('express');
const router = express.Router();
const reviewTemplate =require('../models/ReviewModels').schema
const bcrypt = require('bcryptjs');
const MovieModels = require('../models/MovieModels');

router.get("/movies",(request,response)=>{
    MovieModels.find()
    .then((movies)=>{
        response.json(movies)
    })
    .catch((err)=>{
        response.json(err)
    })
})

module.exports = router;
