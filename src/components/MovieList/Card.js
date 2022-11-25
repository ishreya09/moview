import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import "./MovieList.css"


function Card(props) {
    return (
        <div className="MyCard">
            <div className="card" style={{ width: "18rem" }}>
                <a href={props.link} className="">
                    <img src={props.imageUrl} className="CardImg card-img-top" alt="img" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.metades}</p>
                    <a href={props.link} className="Button btn btn-primary">Review Movie</a>
                </div>
            </div>
        </div>
    );

}

export default Card;