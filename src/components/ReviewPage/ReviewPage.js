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


function ReviewPage(props) {
    // const cast = props.cast.map((x,i)=>
    //         <li key={i}>{x.name}</li>
    //         );
    return (
        <div className="ReviewPage">
            <div className="container text-center">
                <h1 className="text-start text-primary MovieTitle">{props.title}</h1>
                <p className="text-start text-muted" style={{ fontSize: "20px" }}>Genre: {props.genre} | Language: {props.language} | Rating : {props.rating} | Duration : {props.duration} </p>
                <div className="row">
                    <div className="col text-start">
                        <img src={props.image} className="MovieImage" alt="image"></img>
                    </div>
                    <div className="col text-start">
                        <iframe className="MovieTrailer" src={props.video}
                            title="MovieTrailer" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="text-start">Summary</h1>
                        <p className="text-start">{props.summary}</p>

                    </div>
                    <div className="col">

                        
                        <h1 className="text-start">Cast</h1>
                        <ul className="text-start MovieCast">
                             
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                        </ul>
                    </div>
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

export default ReviewPage;