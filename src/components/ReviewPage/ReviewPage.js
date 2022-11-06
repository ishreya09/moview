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

{/* <ReviewPage image="https://images.pexels.com/photos/9420597/pexels-photo-9420597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    video="https://www.youtube.com/embed/NcE83Txe-3g"
    title="Harry Potter" summary="sdfhb dewuyfgewugdwsu Lorem lorem rem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium recusandae mollitia sint exercitationem magni nostrum ex tempora repellendus, provident illum doloremque quod, laboriosam itaque molestiae, at possimus voluptate commodi perspiciatis. Fugiat quo magnam at unde possimus? Fuga perferendis fesfwegueqhuw grebge"
    rating={5} genre="children, fantasy" duration="2hrs 30mins"
    review={review} language="English" castinfo={cast} >description as child of the component
    Lorem lorem rem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium recusandae mollitia sint exercitationem magni nostrum ex tempora repellendus, provident illum doloremque quod, laboriosam itaque molestiae, at possimus voluptate commodi perspiciatis. Fugiat quo magnam at unde possimus? Fuga perferendis rerum facere rem, qui sapiente. Fugit, labore est veniam corrupti rem sit ullam nam? Voluptas, autem! Similique ex mollitia sed, eius praesentium neque tempora dolore hic minus ullam, laborum est reiciendis doloremque quos odit saepe cum distinctio totam quae delectus. Deleniti sit, praesentium voluptas nobis in nesciunt cumque sunt excepturi at, obcaecati eligendi alias facere perspiciatis fugit voluptate nam quaerat quia aliquid aut placeat illum cupiditate mollitia provident. Doloribus ut deserunt a, culpa impedit praesentium minima facilis reiciendis ratione! Soluta sequi dignissimos repellendus, quae ipsa nobis officiis! Quasi atque odio, amet tempora aut assumenda sit ea sapiente est? Repudiandae mollitia assumenda ad dignissimos. Explicabo, libero adipisci? Voluptates error nostrum iusto cum ea accusantium autem possimus quisquam aspernatur voluptatem enim, dolores obcaecati numquam praesentium placeat libero omnis exercitationem sed, voluptatibus
</ReviewPage> */}

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
                        <iframe className="MovieTrailer" src={props.video}
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