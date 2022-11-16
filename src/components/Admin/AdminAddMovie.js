import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import axios from "axios";
class AddMovieForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            metadescription: "",
            image: "",
            trailer: "",
            summary: "",
            cast: [{}],
            reviewsArray: [{}],
            genre: "",
            language:"",
            rating:0,
            duration:"",
            censorBoardRating:"",
            inTheatres:"",
            BookMyShow:"",
            releaseDate:"",
            platforms:[{}],
            category:[{}],

        };
        // bind all the events here
        this.changeTitle = this.changeTitle.bind(this);
        this.changeMetadescription = this.changeMetadescription.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeTrailer = this.changeTrailer.bind(this);
        this.changeSummary = this.changeSummary.bind(this);
        this.changeCast = this.changeCast.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.changeGenre = this.changeGenre.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.changeDuration = this.changeDuration.bind(this);
        this.changeCensorBoardRating = this.changeCensorBoardRating.bind(this);
        this.changePlatforms = this.changePlatforms.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeInTheatres = this.changeInTheatres.bind(this);
        this.changeBookMyShow = this.changeBookMyShow.bind(this);
        this.changeReviewsArray = this.changeReviewsArray.bind(this);
        this.changeReleaseDate = this.changeReleaseDate.bind(this);
        this.onAddMovie = this.onAddMovie.bind(this);
    }

    changeTitle = (event) => {
        this.setState({ title: event.target.value });
    }
    changeMetadescription = (event) => {
        this.setState({ metadescription: event.target.value });
    }
    changeImage = (event) => {
        this.setState({ image: event.target.value });
    }
    changeTrailer = (event) => {
        this.setState({ trailer: event.target.value });
    }
    changeSummary = (event) => {
        this.setState({ summary: event.target.value });
    }
    changeCast = (event) => {
        this.setState({ cast: event.target.value });
    }
    changeLanguage = (event) => {
        this.setState({ language: event.target.value });
    }
    changeGenre = (event) => {
        this.setState({ genre: event.target.value });
    }
    changeDuration = (event) => {
        this.setState({ duration: event.target.value });
    }
    changeCensorBoardRating = (event) => {
        this.setState({ censorBoardRating: event.target.value });
    }
    changePlatforms = (event) => {
        this.setState({ platforms: event.target.value });
    }
    changeCategory = (event) => {
        this.setState({ category: event.target.value });
    }
    changeRating = (event) => {
        this.setState({ rating: event.target.value });
    }
    changeInTheatres = (event) => {
        this.setState({ inTheatres: event.target.value });
    }
    changeBookMyShow = (event) => {
        this.setState({ BookMyShow: event.target.value });
    }
    changeReleaseDate = (event) => {
        this.setState({ releaseDate: event.target.value });
    }


    onAddMovie = (event) => {
        
        event.preventDefault();
        const addMovieAdmin = {
            title: this.state.title,
            metadescription: this.state.metadescription,
            image: this.state.image,
            trailer: this.state.trailer,
            summary: this.state.summary,
            language: this.state.language,
            genre: this.state.genre,
            duration: this.state.duration,
            censorBoardRating: this.state.censorBoardRating,
            rating: this.state.rating,
            inTheatres: this.state.inTheatres,
            BookMyShow: this.state.BookMyShow,
            releaseDate: this.state.releaseDate,
            

        }
        axios.post("http://localhost:4000/admin", addMovieAdmin)
            .then(response => {

                // alert("page exists");
                window.location = "/addMovie";

            })
            .catch(error=>{
                // alert (error);
                alert ("No page exists !! Please try again!");
            })

    }

    render() {
        return (
            <div className="AddMovieForm container-fluid">
                <h1>Add Movie</h1>
                <form method="post" onSubmit={this.onAddMovie}>
                    <div className="mb-3 text-start">
                        <label for="title" className="form-label text-muted ">Title</label>
                        <input required type="text" name="title" onChange={this.changeTitle} value={this.state.title} className="form-control" id="title" placeholder="Movie Title" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="metadescription" className="form-label text-muted ">Metadescription</label>
                        <input required type="text" name="metadescription" onChange={this.changeMetadescription} value={this.state.metadescription} className="form-control" id="metadescription" placeholder="Movie Metadescription" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="image" className="form-label text-muted ">Image</label>
                        <input required type="text" name="title" onChange={this.changeImage} value={this.state.image} className="form-control" id="image" placeholder="Movie Image" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="trailer" className="form-label text-muted ">Trailer</label>
                        <input required type="text" name="trailer" onChange={this.changeTrailer} value={this.state.trailer} className="form-control" id="trailer" placeholder="Movie Trailer" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="summary" className="form-label text-muted ">Summary</label>
                        <input required type="text" name="summary" onChange={this.changeSummary} value={this.state.summary} className="form-control" id="summary" placeholder="Movie Summary" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="cast" className="form-label text-muted ">Cast</label>
                        <input required type="cast" name="summary" onChange={this.changeCast} value={this.state.cast} className="form-control" id="cast" placeholder="Movie Cast" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="language" className="form-label text-muted ">Language</label>
                        <input required type="text" name="language" onChange={this.changeLanguage} value={this.state.language} className="form-control" id="language" placeholder="Movie Language" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="genre" className="form-label text-muted ">Genre</label>
                        <input required type="text" name="genre" onChange={this.changeGenre} value={this.state.genre} className="form-control" id="genre" placeholder="Movie Genre" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="duration" className="form-label text-muted ">Duration</label>
                        <input required type="text" name="duration" onChange={this.changeDuration} value={this.state.duration} className="form-control" id="duration" placeholder="Movie Duration" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="censor board rating" className="form-label text-muted ">Censor Board Rating</label>
                        <input required type="text" name="censor board rating" onChange={this.changeCensorBoardRating} value={this.state.censorBoardRating} className="form-control" id="censor board rating" placeholder="Movie Censor Board Rating" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="in Theatres" className="form-label text-muted ">In Theatres</label>
                        <input required type="text" name="in Theatres" onChange={this.changeInTheatres} value={this.state.inTheatres} className="form-control" id="in theatres" placeholder="Movie In Theatres" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="BookMyShow link" className="form-label text-muted ">BookMyShow Link</label>
                        <input required type="text" name="BookMyShowLink" onChange={this.changeBookMyShow} value={this.state.BookMyShow} className="form-control" id="BookMyShow Link" placeholder="Movie BookMyShow Link" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="release date" className="form-label text-muted ">Release Date</label>
                        <input required type="text" name="release date" onChange={this.changeReleaseDate} value={this.state.releaseDate} className="form-control" id="release date" placeholder="Movie Release Date" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="platforms" className="form-label text-muted ">Platforms</label>
                        <input required type="text" name="platforms" onChange={this.changePlatforms} value={this.state.platforms} className="form-control" id="platforms" placeholder="Movie Platforms" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="category" className="form-label text-muted ">Category</label>
                        <input required type="text" name="category" onChange={this.changeCategory} value={this.state.category} className="form-control" id="category" placeholder="Movie Category" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="rating" className="form-label text-muted ">Rating</label>
                        <input required type="text" name="rating" onChange={this.changeRating} value={this.state.rating} className="form-control" id="rating" placeholder="Movie Rating" />
                    </div>
                    
                    <input type="submit" value="Add Movie" className="btn btn-outline-primary" />
                </form>
            </div>
        );
    }
}

export default AddMovieForm;