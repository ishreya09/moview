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
            <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
            </div>
            <div className="col col-8"> 
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
                </div>

            </div>
            
            </div>
                

        );

    }

}

export default MovieList;