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

router.get("/:id",(request,response)=>{
    MovieModels.find({_id:request.params.id})
    .then((movies)=>{
        response.json(movies)
    })
    .catch((err)=>{
        response.json(err)
    })
})

// Search Function
router.get("/q/:q",(request,response)=>{
    MovieModels.find()
    .then((movies)=>{
        var name= request.params.q;
        var movie=[];
        console.log("Query")
        for(var i=0;i<movies.length;i++){
            var t= movies[i].title;
            // console.log(t)
            // console.log(request.params.q)
            // console.log(t.indexOf(name));
            if(t.indexOf(name) !== -1) {
                movie.push(movies[i]);
            }
        }
        response.json(movie)
    })
    .catch((err)=>{
        console.log(err)
        response.json(err)
    })
})

module.exports = router;
