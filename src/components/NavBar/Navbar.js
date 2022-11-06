import React from "react";
import "./Navbar.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';


import {Link} from "react-router-dom"


function Navbar() {
    return (
        <div className="NavBar sticky-top sticky-offset" >
            <div className="container-fluid bg-primary">
                <nav className="navbar navbar-expand-lg  text-light">

                    <a className="navbar-brand text-light" href="/"><h1 style={{fontSize:"25px"}}>MoVIEW</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item Button">
                                    <a className="nav-link text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item Button">
                                    <a className="nav-link text-light" href="/movies">Movies</a>
                            </li>
                            <li className="nav-item Button">
                                    <a className="nav-link text-light" href="/contactus">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="Button btn btn-outline-dark text-light" type="submit">Search</button>
                        </form>
                        
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;