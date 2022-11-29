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
                <div className="row">
                    <div className="col col-2 bg-primary">
                        <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                            <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
                                <a class="navbar-brand" href="#">Category</a>
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/category/Popular">Popular</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/category/Upcoming">Upcoming</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/category/Top%20Rated">Top Rated</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
                                <a class="navbar-brand" href="#">Language</a>
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/language/English">English</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/language/Hindi">Hindi</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/language/Kannada">Kannada</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/language/Telugu">Telugu</a>
                                    </li>
                                </ul>
                            </nav>
                        </nav>
                    </div>
                    <div className="col ">
                        {
                            this.state.movie.map((movie) => {
                                return (
                                    <>
                                        <Card id={movie._id} imageUrl={movie.image}
                                            title={movie.title} metades={movie.metadescription}
                                            link={"http://localhost:3000/movies/" + movie._id}
                                            rating={movie.rating}
                                        />
                                    </>
                                );
                            })
                        }
                    </div>

                </div>

            </div>


        );

    }

}

export default MovieList;