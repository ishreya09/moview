import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";
import axios from "axios"
import Cookie from 'js-cookie';

class ReviewForm extends React.Component {
    // review form to be visible only when user is logged in
    
    constructor() {
        super();
        // event listeners to come here
        this.state={
            username:Cookie.get("username"),
            review:"",
            rating_user:1
        }
        // binding the events
        this.changeRating= this.changeRating.bind(this);
        this.changeReview= this.changeReview.bind(this);
        this.onSubmitReview=this.onSubmitReview.bind(this);
    }
    
    changeRating=(event)=>{
        this.setState({ rating_user: Number(event.target.value) });
    }
    changeReview=(event)=>{
        this.setState({review:event.target.value});
        // alert(this.state.review)
        
    }
    
    onSubmitReview=(event)=>{
        event.preventDefault()
        var review=this.props.review
        review.push(this.state.review);
        // alert (review)
        var rating_user=this.props.rating_user
        rating_user.push(this.state.rating_user);
        // alert (typeof(this.state.rating_user)) // number
        // alert ((this.state.rating_user)) // number
        var username=this.props.username
        username.push(this.state.username);
        // alert (username)
        var rating= 0;
        for (let i=0;i<rating_user.length;i++){
            rating+= Number(rating_user[i]);
        }
        rating= rating/Number(rating_user.length);
        alert (rating);
        var updateMovie={
            rating:rating,
            rating_user:rating_user,
            username:username,
            review:review,
        }
        axios.post("http://localhost:4000/review/"+this.props.id, updateMovie)
            .then(response => {

                alert("Review Added");
                window.location = "/movies";

            })
            .catch(error=>{
                // alert (error);
                alert ("Some Error! Please Try Again");
            })

        this.setState({review:"", rating:1});

    }


    render() {
        return (
            <>
            {
                Cookie.get("username") !== "AnonymousUser" ?
                    (
            <div className="ReviewForm container">
                <form onSubmit={this.onSubmitReview} className="container-fluid" method="post" action="#">

                    {/* Try to make it into stars */}
                    
                    <label>Your Rating :-  </label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start " type="radio" name="rating_user" onChange={this.changeRating} value={1} required />
                        <label className="form-check-label text-start" >
                            1
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={2} required />
                        <label className="form-check-label text-start">
                            2
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={3} required/>
                        <label className="form-check-label text-start">
                            3
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={4} required />
                        <label className="form-check-label text-start">
                            4
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={5} required />
                        <label className="form-check-label text-start">
                            5
                        </label> 
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={6} required/>
                        <label className="form-check-label text-start">
                            6
                        </label> 
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={7} required />
                        <label className="form-check-label text-start">
                            7
                        </label> 
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={8} required />
                        <label className="form-check-label text-start">
                            8
                        </label> 
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={9} required />
                        <label className="form-check-label text-start">
                            9
                        </label> 
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input text-start" type="radio" name="rating_user" onChange={this.changeRating} value={10} required />
                        <label className="form-check-label text-start">
                            10
                        </label> 
                    </div>
                    <div className="mb-3 text-start">
                        <label for="review" className="form-label text-muted ">Your Review</label>
                        <textarea className="form-control" name="user-review" id="review" rows="5"  onChange={this.changeReview} ></textarea>
                    </div>
                    <input type="submit" className="btn btn-outline-primary" />
                </form>
            </div>
                    )
                    :
                    (
                        <>
                            <p class="text-danger text-center bold" style={{fontSize:"20px"}}>Login/Sign up to write a review</p>
                            <a href="/signup" className="Button btn btn-outline-primary">Sign Up</a>
                            <a href="/login" className="Button btn btn-outline-primary">Login</a>
                        </>
                    )
            }
            </>
        );
    }
}


class ReviewPage extends React.Component {
    constructor() {
        super();
        this.state = {
            cast: [],
            category: [],
            platforms: [],

        }

    }
    componentDidMount() {

        this.setState({ cast: this.props.cast, platforms: this.props.platforms, category: this.props.category }, () => {
            // alert (this.state.cast[0].name)
        });
    }
    render() {

        return (
            <div className="ReviewPage">
                <div className="container text-center">
                    <h1 className="text-start text-primary MovieTitle">{this.props.title}</h1>
                    <p className="text-start text-muted" style={{ fontSize: "20px" }}> {this.props.censorBoardRating} | Genre: {this.props.genre.join()} | Language: {this.props.language} | Rating : {this.props.rating} | Duration : {this.props.duration} | Release Date : {this.props.releaseDate} </p>
                    <div className="row">
                        <div className="col text-start">
                            <img src={this.props.image} className="MovieImage" alt="image"></img>
                        </div>
                        <div className="col text-start">
                            <iframe className="MovieTrailer" src={this.props.video}
                                title="MovieTrailer" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className="text-start">Summary</h1>
                            <p className="text-start">{this.props.summary}</p>

                        </div>
                        <div className="col">


                            <h1 className="text-start">Cast</h1>
                            <ul className="text-start MovieCast">
                                {
                                    this.props.cast.map(cast => {
                                        return (
                                            <li key={cast._id}>{cast.name}</li>
                                        )
                                    })
                                }
                            </ul>
                            <br />
                            <a href={window.location.href + "/platform"}><button className="btn btn-primary Button" >Platforms Available</button></a> <br /><br />
                            <a href={window.location.href + "/category"}><button className="btn btn-primary Button" >Category</button></a> <br /><br />
                            <a href={window.location.href + "/review"}><button className="btn btn-primary Button" >See All Reviews</button></a> <br /><br />
                            {
                                (this.props.inTheatres=="true")?(
                                    <>
                                    <a href={this.props.BookMyShowLink}>
                                        <button className="btn btn-primary Button" >Book My Show Link</button>
                                    </a> <br /><br />
                                    </>
                                    
                                ):(
                                    <></>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="text-start">Write a Review</h1>
                        <ReviewForm id={this.props.id}  review={this.props.review} username={this.props.username}
                        rating_user={this.props.rating_user} />
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default ReviewPage;