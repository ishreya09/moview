import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import "./ReviewPage.css";
import axios from "axios"

class Platform extends React.Component {
    constructor(){
        super();
        this.state={
            platforms:[]
        };
    }

    componentDidMount() {
        const currentURL = window.location.href // returns the absolute URL of a page
        const id = currentURL.split('/')[4];
        axios.get("http://localhost:4000/movies/" + id)
            .then((res) => {
                this.setState({ platforms: res.data[0].platforms }, () => {
                    // alert(res.data[0].platforms);
                });
            })

    }
    render() {
        return (
            <div className="container">
                <h1 className="text-start text-primary">Platforms</h1>
                <ul className="text-start MovieCast">
                    {
                        this.state.platforms.map(p => {
                            return (
                                <li key={p._id}>{p.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default Platform;