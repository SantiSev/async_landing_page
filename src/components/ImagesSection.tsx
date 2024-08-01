import React, { useState, useEffect } from 'react';
import print_1 from '../assets/prints/print_1.jpg';
import print_2 from '../assets/prints/print_2.jpg';
import print_3 from '../assets/prints/print_3.jpg';
import print_4 from '../assets/prints/print_4.jpg';
import print_5 from '../assets/prints/print_5.jpg';
import print_6 from '../assets/prints/print_6.jpg';
import print_7 from '../assets/prints/print_7.jpg';
import print_8 from '../assets/prints/print_8.jpg';


const ImagesSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [print_1, print_2, print_3, print_4, print_5, print_6, print_7, print_8];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const autoSlide = setInterval(nextImage, 3000); // Change image every 3 seconds
        return () => clearInterval(autoSlide); // Clear interval on component unmount
    }, [currentImageIndex]);

    return (
        <>
            <div className=" bg-white relative w-full flex items-center justify-center">
                <button
                    className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full"
                    onClick={prevImage}
                >
                    ❮
                </button>

                <div className="image-slider flex overflow-hidden w-full h-full">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={`w-1/6 h-1/3 transition-transform duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{position: index === currentImageIndex ? 'relative' : 'absolute',
                            }}
                        />
                    ))}
                </div>

                <button
                    className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full"
                    onClick={nextImage}
                >
                    ❯
                </button>
            </div>
        </>
    );
};

export default ImagesSection;