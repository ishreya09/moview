import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";

class ReviewForm extends React.Component {
    // review form to be visible only when user is logged in
    render() {
        return (
            <div className="ReviewForm container">
                <form className="container-fluid" method="post" action="#">
                    <div className="mb-3 text-start">
                        <label for="name" className="form-label text-muted ">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="John Doe" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="email" className="form-label text-muted ">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="review" className="form-label text-muted ">Your Review</label>
                        <textarea className="form-control" name="user-review" id="review" rows="4"></textarea>
                    </div>
                    <input type="submit" className="btn btn-outline-primary" />
                </form>
            </div>
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
                    <p className="text-start text-muted" style={{ fontSize: "20px" }}> {this.props.censorBoardRating} | Genre: {this.props.genre.join()} | Language: {this.props.language} | Rating : {this.props.rating} | Duration : {this.props.duration} | Category : { }</p>
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
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col">


                            <h1 className="text-start">Platforms</h1>
                            <ul className="text-start MovieCast">
                                {
                                    this.props.platforms.map(p => {
                                        return (
                                            <li key={p._id}>{p.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div> */}
                        {/* <div className="col">


                            <h1 className="text-start">Category</h1>
                            <ul className="text-start MovieCast">
                                {
                                    this.props.category.map(c => {
                                        return (
                                            <li key={c._id}>{c.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div> */}
                    </div>
                    <div>
                        <h1 className="text-start">Write a Review</h1>
                        <ReviewForm />
                    </div>
                    <div>
                        <h1 className="text-start">Review</h1>
                        <ul className="text-start MovieReview">
                            <li>
                                <p>Username says</p>
                                <p>dnvjh  es fwfwjnsdjfsdscu  egdhnaj  d dhw jadjcs dwg
                                    efjhjdhus j afeh j hgsb mfjcs c s mwdjnjewsufhnnjdf hd jfgsj
                                </p>
                            </li>
                            <li>
                                <p>Username says</p>
                                <p>dnvjh  es fwfwjnsdjfsdscu  egdhnaj  d dhw jadjcs dwg
                                    efjhjdhus j afeh j hgsb mfjcs c s mwdjnjewsufhnnjdf hd jfgsj
                                </p>
                            </li>
                            <li>
                                <p>Username says</p>
                                <p>dnvjh  es fwfwjnsdjfsdscu  egdhnaj  d dhw jadjcs dwg
                                    efjhjdhus j afeh j hgsb mfjcs c s mwdjnjewsufhnnjdf hd jfgsj
                                </p>
                            </li>
                            <li>
                                <p>Username says</p>
                                <p>dnvjh  es fwfwjnsdjfsdscu  egdhnaj  d dhw jadjcs dwg
                                    efjhjdhus j afeh j hgsb mfjcs c s mwdjnjewsufhnnjdf hd jfgsj
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default ReviewPage;