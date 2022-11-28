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
        height: "400px",
        width: "auto",
        link:"http://localhost:3000/movies/638118dd210e69a9fb299be5"
    },
    {
        id: "2",
        url: "https://www.themoviedb.org/t/p/original/xAG7S6X73B74CeLjo8gcVoWtunr.jpg",
        alt: "movie2",
        height: "400px",
        width: "auto",
        link:""
    },
    {
        id: "3",
        url: "https://www.themoviedb.org/t/p/original/z4aaTHL75q66F7VejVpkefQNJ9k.jpg",
        alt: "movie3",
        height: "400px",
        width: "auto",
        link:""
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
        <div className="Carousel">
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
                             <img className="CarouselImage" src={url} alt={alt} height={height} />
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

function About() {
    return (
        <div>
            <h3 className="text-start">About Us</h3>
            <p className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorum enim hic atque quos!
                Fugiat eligendi fuga ipsam aliquid dolorem consequuntur assumenda modi quae quam debitis commodi
                nesciunt eius soluta velit aliquam, quibusdam sit sunt minus reprehenderit cum omnis, quis ipsum
                ducimus ratione? Porro libero blanditiis sit aliquam modi autem odio, perspiciatis consequuntur
                optio sapiente aperiam fugiat, velit vel assumenda cupiditate? Repellat commodi consequatur eaque
                minus rerum vel ipsam, corrupti blanditiis, ad suscipit similique vero! Labore sit repellat ea
                repudiandae doloribus maiores nemo quaerat, quos, unde enim ab praesentium et sapiente, dolor possimus?
                Nisi repudiandae ab at ipsum facilis ipsam totam, quam consequuntur aliquam necessitatibus est possimus
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorum enim hic atque quos!
                Fugiat eligendi fuga ipsam aliquid dolorem consequuntur assumenda modi quae quam debitis commodi
                nesciunt eius soluta velit aliquam, quibusdam sit sunt minus reprehenderit cum omnis, quis ipsum
                ducimus ratione? Porro libero blanditiis sit aliquam modi autem odio, perspiciatis consequuntur
                optio sapiente aperiam fugiat, velit vel assumenda cupiditate? Repellat commodi consequatur eaque
                minus rerum vel ipsam, corrupti blanditiis, ad suscipit similique vero! Labore sit repellat ea
                repudiandae doloribus maiores nemo quaerat, quos, unde enim ab praesentium et sapiente, dolor possimus?
                Nisi repudiandae ab at ipsum facilis ipsam totam, quam consequuntur aliquam necessitatibus est possimus

            </p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://images.pexels.com/photos/13350289/pexels-photo-13350289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image1" style={{ height: "300px", width: "auto" }} />
                    </div>
                    <div className="col">
                        <a href="/movies"><button className="Button btn btn-outline-primary">Review A Movie</button></a>
                        <br />
                        <hr />
                        <h3 className="text-center">Features</h3>
                        <hr />
                        <ul className="text-start">
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                            <li>dsjcjdsbv</li>
                        </ul>
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

    return (
        <div className="Home">
            <div className="MyCON container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-primary" style={{ fontSize: "100px", opacity: "90px" }}>MoVIEW</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem cupiditate placeat assumenda quaerat, ut eveniet expedita saepe voluptatem illum cum optio ipsum enim illo, consequatur porro omnis est repudiandae sed sint minima ratione alias? Accusamus quisquam tempora repellat excepturi! Natus dolorum porro eveniet fugiat, odit quis in eaque, rem libero voluptatem quas blanditiis ipsam voluptatum, officiis sit praesentium rerum! Quasi magnam corrupti laborum pariatur dignissimos illum excepturi. A, suscipit. Ab cupiditate ducimus quo ex, perspiciatis corporis quidem repellendus laudantium itaque cum quisquam nihil magnam necessitatibus illum.
                            Eius, ad est quam sed, non nesciunt error delectus vitae porro quisquam doloremque.
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
                                        <h6 className="text-center text-primary">Hello {Cookie.get('name')}</h6>
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
                    </div>
                    <div className="col">
                        <CarouselSlideShow />
                    </div>
                </div>
            </div>
            
            <div className="MyCON container">
                <About />
            </div>
        </div>
    )
}

export default Home;