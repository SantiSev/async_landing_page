import React from 'react';
import Slider from 'react-slick';
import print_1 from '../assets/prints/print_1.jpg';
import print_2 from '../assets/prints/print_2.jpg';
import print_3 from '../assets/prints/print_3.jpg';
import print_4 from '../assets/prints/print_4.jpg';
import print_5 from '../assets/prints/print_5.jpg';
import print_6 from '../assets/prints/print_6.jpg';
import print_7 from '../assets/prints/print_7.jpg';
import print_8 from '../assets/prints/print_8.jpg';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImagesSection_bkcup: React.FC = () => {
    const images = [print_1, print_2, print_3, print_4, print_5, print_6, print_7, print_8];

    // Slider settings
    const settings = {
        infinite: true,
        slidesToShow: 3, // Number of slides to show at a time
        centerMode: true, // Center the current slide
        focusOnSelect: true, // Allow selecting the slide
        centerPadding: '0', // Remove additional padding
        autoplay: true, // Enable auto-play
        speed: 10000, // Duration of the slide transition
        autoplaySpeed: 0, // Time in milliseconds between auto-scrolls
        cssEase: 'linear', // Set the easing function to linear for a constant speed
        arrows: true, // Show navigation arrows
    };

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <div className="text-center mt-32">
                <h1 className="text-4xl font-bold font-montserrat text-background_blue">Our Prints</h1>
            </div>
            <div className="relative my-24 h-full ">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="p-2"
                        >
                            <div className="w-[60vh] h-[70vh] object-cover m-auto scale-75 hover:scale-90 transform transition-all ease-in duration-150">
                                <img
                                    src={image}
                                    alt={`print-${index + 1}`}
                                    className='w-full h-full object-cover rounded-[5rem] shadow-black shadow-2xl' 
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImagesSection_bkcup;
