const mongoose = require('mongoose');
const ReviewModels = require('./ReviewModels').schema;

const movieTemplate = new mongoose.Schema({
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
    metadescription:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    cast:[{
        name:String,    
    }],
    genre:{
        type:Array,
    },
    language:{
        type:String,
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
        type:String,
        required:true,
    },
    BookMyShowLink:{
        type:String,
    },
    releaseDate:{
        type:String,
        required:true,
    },
    platforms:[{
        name:String,    
    }],
    category:[{
        name:String,    
    }],
    releaseDate:{
        type:"String",
        required:true
    },
    
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    // reviewArray:{
    //     type:[ReviewModels]
    // },
    username:{
        type:[String],
    },
    review:{
        type:[String],
    },
    rating_user:{
        type:[Number],
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})

module.exports = mongoose.model("MovieTable",movieTemplate);