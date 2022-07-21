import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/slider-thumbs/slide-1.jpg";
import slide2 from "../../assets/slider-thumbs/slide-2.jpg";
import slide3 from "../../assets/slider-thumbs/slide-3.jpg";
import slide4 from "../../assets/slider-thumbs/slide-4.jpg";
import slide5 from "../../assets/slider-thumbs/slide-5.jpg";

const Banner = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5];
    return (
        <section className='container'>
            <Carousel>
                {
                    slides.map((slide, index) => <Carousel.Item
                        key={index}
                        interval={1000}
                    >   
                        <img
                            className="d-block w-100"
                            src={slide}
                            alt={`slide${index + 1}`}
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </Carousel.Item>)
                }
            </Carousel>
        </section>
    );
}

export default Banner;