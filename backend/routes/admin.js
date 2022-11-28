const express = require('express');
const router = express.Router();
const userTemplate = require('../models/SignUpModels')
const movieTemplate= require('../models/MovieModels')
const contactusTemplate = require('../models/ContactModels')
const reviewTemplate =require('../models/ReviewModels').schema
const bcrypt = require('bcryptjs');
const MovieModels = require('../models/MovieModels');


router.post('/addmovie',(request,response)=>{
    

    const movie = new movieTemplate({
        title: request.body.title,
        image:request.body.image,
        trailer:request.body.trailer,
        metadescription:request.body.metadescription,
        summary: request.body.summary,
        cast: request.body.cast,
        genre: request.body.genre,
        language:request.body.language,
        duration:request.body.duration,
        censorBoardRating: request.body.censorBoardRating,
        inTheatres: request.body.inTheatres,
        BookMyShowLink: request.body.BookMyShowLink,
        platforms:request.body.platforms,
        category:request.body.category,
        releaseDate:request.body.releaseDate,
        rating:request.body.rating,
        // username: request.body.username,
        // rating_user: request.body.rating_user,
        // review:request.body.review,
    
    })

    movie.save()
    .then(data=>{
        console.log(data);
        response.json(data)
    })
    .catch(err=>{
        response.json(err)
    })

})

router.get("/contact",(request,response)=>{
    contactusTemplate.find()
    .then((contacts)=>{
        console.log(contacts)
        response.json(contacts)
    })
    .catch((err)=>{
        console.log(err)
        response.json(err)
    })
})
router.get("/movies",(request,response)=>{
    moviesTemplate.find()
    .then((movies)=>{
        console.log(movies)
        response.json(movies)
    })
    .catch((err)=>{
        console.log(err)
        response.json(err)
    })
})
router.get("/user",(request,response)=>{
    userTemplate.find()
    .then((user)=>{
        console.log(user)
        response.json(user)
    })
    .catch((err)=>{
        console.log(err)
        response.json(err)
    })
})


module.exports=router