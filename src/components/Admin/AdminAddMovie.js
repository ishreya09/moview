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
            cast: "",
            reviewArray: "",
            genre: "",
            language:"",
            rating:0,
            duration:"",
            censorBoardRating:"",
            inTheatres:"",
            BookMyShow:"",
            releaseDate:"",
            platforms:"",
            category:"",

        };
        // bind all the events here
        this.changeTitle = this.changeTitle.bind(this);
        this.changeMetadescription = this.changeMetadescription.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeTrailer = this.changeTrailer.bind(this);
        this.changeSummary = this.changeSummary.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.changeInTheatres = this.changeInTheatres.bind(this);
        this.changeBookMyShow = this.changeBookMyShow.bind(this);
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
    changeLanguage = (event) => {
        this.setState({ language: event.target.value });
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
                <h1>Sign Up</h1>
                <form method="post" onSubmit={this.onAddMovie}>
                    <div className="mb-3 text-start">
                        <label for="title" className="form-label text-muted ">Title</label>
                        <input required type="text" name="title" onChange={this.changeTitle} value={this.state.username} className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="name" className="form-label text-muted ">Name</label>
                        <input required type="text" name="name" value={this.state.name} onChange={this.changeName} className="form-control" id="name" placeholder="Full Name" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="username" className="form-label text-muted ">Email</label>
                        <input required type="email" name="email" value={this.state.email} onChange={this.changeEmail} className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="password" className="form-label text-muted ">Password</label>
                        <input required type="password" name="password" value={this.state.password} onChange={this.changePassword} className="form-control" id="password" placeholder="Password" />
                    </div>

                    <input type="submit" value="Sign Up" className="btn btn-outline-primary" />
                </form>
                <span className="text-start">Already a user? <a href="/login">Login here</a></span>
            </div>
        );
    }
}

export default SignupForm;