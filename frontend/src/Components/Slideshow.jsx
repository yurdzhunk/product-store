import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { arrayOfImages } from '../images/images';
import image1 from '../images/slide1.png';
import image2 from '../images/slide2.png';
import image3 from '../images/slide3.png';

const Slideshow = () => {

    return (
        <Carousel interval={3000} autoPlay infiniteLoop showArrows showStatus={false} showThumbs={false}>
            <div>
                <img src={image1} className='img-fluid'/>
            </div>
            <div>
                <img src={image2} className='img-fluid'/>
            </div>
            <div>
                <img src={image3} className='img-fluid'/>
            </div>
        </Carousel>
    );
};

export default Slideshow;