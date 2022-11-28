import React from "react"
import Card from "./Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import "./MovieList.css"
import axios from "axios";

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:4000/movies/movies")
            .then((res) => {
                // alert(res.data[0].title)
                this.setState({ movie: (res.data) }, () => {
                    // alert(this.state.movie);
                });
            })

    }
    render() {
        return (
            // movie list should be able to return the dynamic list of elements we want from a particular category
            // use map to parse the whole Cards from database
            <div className="container-fluid">
                <>
                    {
                        this.state.movie.map((movie) => {
                            return (
                                <>
                                        <Card id={movie._id} imageUrl={movie.image}
                                            title={movie.title} metades={movie.metadescription}
                                            link={"http://localhost:3000/movies/"+movie._id}
                                            rating={movie.rating} 
                                            />
                                </>
                            );
                        })
                    }
                </>
                {/* <Card imageUrl="https://images.pexels.com/photos/14270535/pexels-photo-14270535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    title="Inception" metades="Some quick example text to build on the card title and make up the bulk of the card's content."
                    link="#" /> */}

            </div>

        );

    }

}

export default MovieList;