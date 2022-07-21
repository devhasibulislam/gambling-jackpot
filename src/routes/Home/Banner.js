import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/slider-thumbs/1.jpg";
import slide2 from "../../assets/slider-thumbs/2.jpg";
import slide3 from "../../assets/slider-thumbs/3.jpg";
import slide4 from "../../assets/slider-thumbs/4.jpg";

const Banner = () => {
    const slides = [slide1, slide2, slide3, slide4];
    return (
        <section className='container'>
            <Carousel>
                {
                    slides.map((slide, index) => <Carousel.Item
                        key={index}
                        interval={1000}
                        touch={true}
                    >
                        <img
                            className="d-block w-100"
                            src={slide}
                            alt={`slide${index + 1}`}
                            style={{
                                height: '250px',
                                width: '500px',
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