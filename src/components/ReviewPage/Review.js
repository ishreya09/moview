import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";
import axios from "axios"

class Review extends React.Component {
    constructor() {
        super();
        this.state = {
            review: [],
            username: [],
            rating: [],
            reviewArr: [],
            r:0,
        };

    }

    componentDidMount() {
        const currentURL = window.location.href // returns the absolute URL of a page
        const id = currentURL.split('/')[4];
        axios.get("http://localhost:4000/movies/" + id)
            .then((res) => {
                this.setState({ review: res.data[0].review, username: res.data[0].username, 
                    rating: res.data[0].rating_user,
                    r:res.data[0].rating 
                }, () => {
                    // alert(this.state.review)
                    // alert(this.state.username)
                    // alert(this.state.rating)
                    // alert(this.state.r)
                    var reviewArr = [];
                    for (var i = 0; i < this.state.review.length; i++) {
                        // alert({ review: this.state.review[i], username: this.state.username[i], rating: this.state.rating[i] });
                        reviewArr.push([ this.state.review[i], this.state.username[i], this.state.rating[i] ]);
                    }
                    this.setState({ reviewArr: reviewArr },()=>{
                        // alert(this.state.reviewArr);
                    });
                });
            })

    }
    render() {
        return (
            <div className="container" >
                <h1 className="text-start text-primary">Review</h1>
                <h1 className="text-muted" style={{fontSize:"15px"  }}>Rating : {this.state.r} </h1>
                <ul className="text-start MovieReview">
                    {
                        this.state.reviewArr.map((obj) => {
                            return (
                                <li>
                                    <p>{obj[1]} says | Rating : {obj[2]}</p>
                                    <p>{obj[0]}</p>
                                </li>
                            )
                        })
                    }
                </ul>

                <br />
                <br />
                {/* <div className="col">
                    <h1 className="text-start">Platforms</h1>
                    <ul className="text-start MovieCast">
                        {
                            this.state.platforms.map(p => {
                                return (
                                    <li key={p._id}>{p.name}</li>
                                )
                            })
                        }
                    </ul>
                </div> */}
            </div>
        )
    }
}


export default Review;