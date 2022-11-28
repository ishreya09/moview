import React from "react"
import Card from "./Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import "./MovieList.css"
import axios from "axios";

class CategoryMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: []
        }
    }
    componentDidMount() {
        const currentURL = window.location.href // returns the absolute URL of a page
        const id = currentURL.split('/')[4];
        axios.get("http://localhost:4000/category/"+id)
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
                

            </div>

        );

    }

}

export default CategoryMovie;