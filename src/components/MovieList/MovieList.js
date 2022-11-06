import React from "react"
import Card from "./Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import "./MovieList.css"


function MovieList(){
    return (
        // movie list should be able to return the dynamic list of elements we want from a particular category
        // use map to parse the whole Cards from database
        <div className="container-fluid">
        <Card imageUrl="https://images.pexels.com/photos/14270535/pexels-photo-14270535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        title="Inception" metades="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link="#" />
        <Card imageUrl="https://images.pexels.com/photos/14270535/pexels-photo-14270535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        title="Inception" metades="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link="#" />
        <Card imageUrl="https://images.pexels.com/photos/14270535/pexels-photo-14270535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        title="Inception" metades="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link="#" />
        <Card imageUrl="https://images.pexels.com/photos/14270535/pexels-photo-14270535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        title="Inception" metades="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link="#" />
        </div>

    );
}

export default MovieList;