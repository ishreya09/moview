import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";
import axios from "axios"


class Category extends React.Component {
    constructor(){
        super();
        this.state={
            category:[]
        };
    }

    componentDidMount() {
        const currentURL = window.location.href // returns the absolute URL of a page
        const id = currentURL.split('/')[4];
        axios.get("http://localhost:4000/movies/" + id)
            .then((res) => {
                this.setState({ category: res.data[0].category }, () => {
                    // alert(res.data[0].category);

                });
            })

    }

    render() {
        return (
            <div className="container">
                <h1 className="text-start text-primary">Category</h1>
                <ul className="text-start MovieCast">
                    {
                        this.state.category.map(c => {
                            return (
                                <li key={c._id}>{c.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Category;