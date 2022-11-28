import ReviewPage from "./ReviewPage";
import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";
import axios from "axios";


class ReviewMovie extends React.Component {
    constructor() {
        super();
        this.state = {
            movie: []
        }
    }
    componentDidMount() {
        const currentURL = window.location.href // returns the absolute URL of a page
        const id = currentURL.split('/')[4];
        axios.get("http://localhost:4000/movies/" + id)
            .then((res) => {
                // alert(res.data[0].title)
                this.setState({ movie: res.data }, () => {
                    //  alert(this.state.movie[0].title);
                    // alert(typeof(this.state.movie[0].username));
                });
            })

    }
    render() {
        return (
            <>
                {
                    this.state.movie.map((movie) => {
                        return (
                            <>
                                <ReviewPage
                                    id={movie._id}
                                    image={movie.image}
                                    video={movie.trailer}
                                    title={movie.title} summary={movie.summary}
                                    rating={movie.rating} genre={movie.genre} cast={movie.cast} 
                                    duration={movie.duration}
                                    language={movie.language} review={movie.review} username={movie.username}
                                    censorBoardRating={movie.censorBoardRating} rating_user={movie.rating_user} 
                                    inTheatres={movie.inTheatres} releaseDate={movie.releaseDate} 
                                    BookMyShowLink={movie.BookMyShowLink} />
                            </>
                        )
                    }
                    )}


            </>
        )
    }
}


export default ReviewMovie;