import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";



function Navbar() {
    return (
        <div className="NavBar sticky-top sticky-offset" >
            <div className="container-fluid bg-primary">
                <nav className="navbar navbar-expand-lg  text-light">

                    <a className="navbar-brand text-light" href="/"><h3>MoVIEW</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn btn-outline-primary">
                                    <a className="nav-link text-light" aria-current="page" to="/" href="/">Home</a>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary">
                                    <a className="nav-link text-light" href="#">Account</a>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary">
                                    <a className="nav-link text-light" href="#">Movies</a>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary">
                                    <a className="nav-link text-light" href="#">Contact Us</a>
                                </button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark text-light" type="submit">Search</button>
                        </form>
                        {/* <Routes> */}
                            {/* <Route exact path="/" element={<Home/>}/> */}
                            {/* <Route path="/about" element={<About/>}/> */}
                            {/* <Route path="/contact" element={<Contact/>}/> */}
                        {/* </Routes> */}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;