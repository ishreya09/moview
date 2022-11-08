const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls= require('./routes/routes');
const cors =require('cors');

const app =express();

dotenv.config();    
mongoose.connect(process.env.USER_ACCESS,()=>console.log("User Database Connected"))

app.use(express.json());
app.use(cors());
app.use('/',routesUrls); // routes all the urls in our app

app.listen(4000,()=>console.log("backend server is up and running"))