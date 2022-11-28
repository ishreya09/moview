const express = require('express');
const router = express.Router();
const reviewTemplate =require('../models/ReviewModels').schema
const bcrypt = require('bcryptjs');
const MovieModels = require('../models/MovieModels');


router.get("/:category",(request,response)=>{
    MovieModels.find()
    .then((movies)=>{
        var category=[];
        for(var i=0; i<movies.length;i++){
            // console.log(movies[i].category)
            for (var j=0;j<movies[i].category.length;j++){
                if(movies[i].category[j].name == request.params.category){
                    console.log(movies[i].title)
                    // console.log(movies[i].category[j].name)
                    category.push({
                        _id: movies[i]._id,
                        title: movies[i].title,
                        image: movies[i].image,
                        metadescription: movies[i].metadescription,
                        rating:movies[i].rating,
                    })

                }
            }
        }
        console.log (category)
        response.json(category)
    })
    .catch((err)=>{
        response.json(err)
    })
})

module.exports = router;