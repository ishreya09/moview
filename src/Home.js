import React from "react";
import { useState } from "react";
import classNames from "classnames";

const images = [
    {
        url:
            "https://images.pexels.com/photos/10550714/pexels-photo-10550714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "movie1",
        height: "400px",
        width: "auto"
    },
    {
        url: "https://images.pexels.com/photos/13756268/pexels-photo-13756268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "movie2",
        height: "400px",
        width: "auto"
    },
    {
        url: "https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "movie3",
        height: "400px",
        width: "auto"
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
                            <img className="CarouselImage" src={url}  alt={alt} height={height} />
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
            <h1 className="text-primary" style={{fontSize:"100px",opacity:"90px"}}>MoVIEW</h1>
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
        </div>
    );
}



function Home() {
    return (
        <div className="Home">
            <CarouselSlideShow></CarouselSlideShow>
            <About></About>
        </div>
    )
}

export default Home;