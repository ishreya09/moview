import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import "./Home.css"
import MovieList from "../MovieList/MovieList";
import Cookie from "js-cookie";

const images = [
    {
        id: "1",
        url:"https://www.themoviedb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        alt: "movie1",
        height: "650px",
        width: "auto",
        link:"http://localhost:3000/movies/638118dd210e69a9fb299be5"
        
    },
    {
        id: "2",
        url: "https://www.themoviedb.org/t/p/original/xAG7S6X73B74CeLjo8gcVoWtunr.jpg",
        alt: "movie2",
        height: "650px",
        width: "auto",
        link:"http://localhost:3000/movies/6381f22703e7b3fb9f78c1ed"
    },
    {
        id: "3",
        url: "https://www.themoviedb.org/t/p/original/z4aaTHL75q66F7VejVpkefQNJ9k.jpg",
        alt: "movie3",
        height: "650px",
        width: "auto",
        link:"http://localhost:3000/movies/63842e5f9c81901e1540e72d"
    }
];

function CarouselSlideShow() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = index < images.length - 1 ? index + 1 : 0;
        setIndex(nextIndex);
    };

    const handlePrev = () => {
        const nextIndex = index > 0 ? index - 1 : images.length - 1;
        setIndex(nextIndex);
    };
    
    

    return (
        <div className="Carousel col" >
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                
            >
                <div className="carousel-indicators">
                    {Array.from(Array(images.length).keys()).map((buttonIndex) => (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={`${buttonIndex}`}
                            className={classNames({
                                active: buttonIndex === index
                            })}
                            aria-current="true"
                            aria-label={`Slide ${buttonIndex + 1}`}
                            onClick={() => setIndex(buttonIndex)}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {images.map(({ url, alt, height, width }, imageIndex) => (
                        <div
                            className={classNames("carousel-item", {
                                active: imageIndex === index
                            })}
                        >
                             <img className="CarouselImage" src={url} alt={alt} height={height} onClick={()=>{window.location="/movies"}}/>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                    onClick={handlePrev}
                >
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                    onClick={handleNext}
                >
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
//className="text-start" 

function About() {
       
    return (
        <div className="text-start">
            <h3 className="text-start" style={{backgroundColor:"Highlight"}} ><b>About Us </b></h3>
            <p style={{backgroundColor:"lavender"}}>
   
                We are a team of passionate young students from PES UNIVERSITY,who are enthusiastic about Coding.<br/>
                IMDb (an abbreviation of Internet Movie Database) is an online database of information related to films, television series, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. IMDb began as a fan-operated movie database on the Usenet group "rec.arts.movies" in 1990, and moved to the Web in 1993. It is now owned and operated by IMDb.com, Inc., a subsidiary of Amazon.<br/>
                We have created our website : <b><u>"MoView"</u></b>,which is very similar to IMDb,with additional features like review,ratings and links to book the movie and to watch the movies on OTT platforms.<br/>
                <b>Team: Shreya Mishra,Shreeja Rajesh,Shreya Tippireddy,Siri Gowri H</b>
            </p>
         
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://png.pngtree.com/png-clipart/20190905/original/pngtree-barrel-popcorn-pattern-png-image_4538379.jpg" alt="image1" style={{ height: "300px", width: "auto" }} />
                    </div>
                    <div className="col">
                        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png-image_3669641.jpg" alt="image1" style={{ height: "300px", width: "auto" }} />
                    </div>
                    <div className="col">
                        <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-film-roll-png-image_4359386.jpg" alt="image1" style={{ height: "300px", width: "auto" }} />
                    </div> 
                </div>
            </div>
        </div>
    );
}

// function Popular() {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <h1>Popular</h1>

//             </div>
//             <div className="row">
//                 <MovieList />

//             </div>
//             <div className="row">

//                 <Link to="/movies/popular" className="Button btn btn-primary text-decoration-none text-light">Click here to see more</Link> <br />
//             </div>
//             {/* Movielist will return only 4 elements */}
//             <hr />
//         </div>

//     );
// }

// function TopRated() {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <h1>Top Rated</h1>

//             </div>
//             <div className="row">

//                 <MovieList />
//             </div>
//             <div className="row">

//                 <Link to="/movies/top-rated" className="Button btn btn-primary text-decoration-none text-light" >Click here to see more</Link><br />
//             </div>
//             <hr />
//         </div>
//     )
// }
/*function Upcoming() {
    return (
        <div className="container-fluid">
            <div className="row">

                <h1>Upcoming</h1>
            </div>
            <div className="row">

                <MovieList />
            </div>
            <div className="row">

                <Link to="/movies/upcoming" className="Button btn btn-primary  text-decoration-none text-light">Click here to see more</Link><br />
            </div>
            <hr />
        </div>
    )
}*/
function Home() {
    const myStyle={
     backgroundImage: 
// // "url('https://png.pngtree.com/png-clipart/20190611/original/pngtree-watch-kit-popcorn-png-image_2864461.jpg')",
// //    "url('https://png.pngtree.com/png-clipart/20190630/original/pngtree-white-dreamy-smoke-element-png-image_4155965.jpg')",
   "url('https://png.pngtree.com/png-clipart/20190705/original/pngtree-film-roll-png-image_4359386.jpg')",
 backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
     };   
    return (
        <div className="Home"  >
            <div className="MyCON container text-center">
                <div className="row" >
                    <div className="col-md-4 ">
                        <h1 className="text-primary" style={{ fontSize: "100px", opacity: "90px" }}>MoVIEW</h1>
                        <p style={{marginRight:"700px"}}>
                        <img src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-movie-clip-art-cartoon-movie-clapper-board-png-image_5862055.jpg" height="300" width="300"></img> 
                        </p>
                        <p style={{color:"royalblue",backgroundColor:"lightgoldenrodyellow",border:"1px solid black"}}>
                         <center>LETS TALK ABOUT MOVIES!!!!</center>
                        </p>
                      
                        {
                            Cookie.get('username') == "AnonymousUser" ?
                                (
                                    <>
                                        <a href="/signup" className="Button btn btn-outline-primary">Sign Up</a>
                                        <a href="/login" className="Button btn btn-outline-primary">Login</a>
                                    </>
                                )
                                : (
                                    <>
                                        <h6 className="text-center text-primary"><center>Hello {Cookie.get('name')}</center></h6>
                                        {Cookie.get('role') == "admin" ?
                                            (
                                                <>
                                                    <a href="/admin" className="Button btn btn-outline-primary">Admin Settings</a>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )}
                                        <a href="/logout" className="Button btn btn-outline-primary">Logout</a>
                                    </>
                                )
                        }
                        <br />
                        <h3>Categories</h3>
                        <>
                                        <a href="/category/Popular" className="Button btn btn-outline-primary">Popular</a>
                                        <a href="/category/Top Rated" className="Button btn btn-outline-primary">Top Rated</a>
                                        <a href="/category/Upcoming" className="Button btn btn-outline-primary">Upcoming</a>
                                    </>

                    </div>
                    <div className="col-8">
                        <CarouselSlideShow />
                    </div>
                </div><br />
            </div>
            
            <div className="MyCON container">
                <About />
            </div>
        </div>
    )
}

export default Home;



