import React from "react";

class ReviewForm extends React.Component {
    render() {
        return (
            <div className="ReviewForm">
                <form>
                    <div class="mb-3 text-start">
                        <label for="name" class="form-label text-muted ">Your Name</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="John Doe" />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="email" class="form-label text-muted ">Email address</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="review" class="form-label text-muted ">Your Review</label>
                        <textarea class="form-control" name="user-review" id="review" rows="4"></textarea>
                    </div>
                </form>
            </div>
        );
    }
}

function ReviewPage(props) {
    // get embedded youtube link
    // const cast = props.cast.map((x)=><li key={x.id}> {x.actor}</li>);
    // const review =props.review.map((x)=><li key={x.id}>{x.review}</li>);
    return (
        <div className="ReviewPage">
            <div className="container text-center">
                <h1 className="text-start text-primary MovieTitle">{props.title}</h1>
                <p className="text-start text-muted" style={{ fontSize: "20px" }}>Genre: {props.genre} | Language: {props.language} | Rating : {props.rating} | Duration : {props.duration} </p>
                <div className="row">
                    <div className="col text-start">
                        <img src={props.image} className="MovieImage" ></img>
                    </div>
                    <div className="col text-start">
                        <iframe className="MovieTrailer" src="https://www.youtube.com/embed/NcE83Txe-3g"
                            title="Harry Potter - Hermione's Most Sassy Moments" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="text-start">Summary</h1>
                        <p className="text-start">{props.summary}</p>
                        <h1 className="text-start">Description</h1>
                        <p className="text-start">{props.children}</p>
                    </div>
                    <div className="col">

                        {/* <ul>
                            {cast}
                        </ul>
                        <ul>
                            {review}
                        </ul> */}
                        <h1 className="text-start">Cast</h1>
                        <ul className="text-start MovieCast">
                            <li>abc</li>
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
                    <form>
                        {/* trigger an event for each value */}
                        <ReviewForm />
                    </form>
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