const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const MovieModels = require('../models/MovieModels');

router.post('/:id',(request,response)=>{
    console.log(request.body);
    MovieModels.findByIdAndUpdate(request.params.id, request.body , function(err,movie){
        if (err){
            console.log(err)
            response.json(err);
        }
        else{
            console.log("Updated Movie: ", movie);
            response.json(movie);
        }
    })
})

module.exports=router