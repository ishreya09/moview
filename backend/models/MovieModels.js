const mongoose = require('mongoose');

const movieTemplate = new mongoose.Schema({
    metadescription:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    trailer:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    cast:[{
        role:String,
        name:String,    }],
    reviewsArray:[{
        username:String,
        rating:Number,
        reviews:String,    }],
    genre:{
        type:Array,
        default:undefined,
    },
    language:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    censorBoardRating:{
        type:String,
        default:"U/A",
    },
    inTheatres:{
        type:Boolean,
        required:false,
    },
    BookMyShowLink:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:String,
        required:true,
    },
    platforms:[{
        name:String,    }],
    category:[{
        categoryType:String,    }],
    date:{
        type:Date,
        default:Date.now(),
    },
})

module.exports = mongoose.model("MovieTable",movieTemplate);