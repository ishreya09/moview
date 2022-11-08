const express = require('express');
const router = express.Router();
const signupTemplate= require('../models/SignUpModels')

router.post('/signup', (request,response)=>{
    const signedUpUser= new signupTemplate({
        username:request.body.username,
        name:request.body.name,
        email:request.body.email,
        password:request.body.password,
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data);
    })
    .catch(err=>{
        response.json(err);
    })

});

module.exports= router;