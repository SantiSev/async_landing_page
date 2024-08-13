import React from 'react';
import { useEffect, useRef } from "react";

import print_1 from '../assets/prints/print_1.jpg';
import print_2 from '../assets/prints/print_2.jpg';
import print_3 from '../assets/prints/print_3.jpg';
import print_4 from '../assets/prints/print_4.jpg';
import print_5 from '../assets/prints/print_5.jpg';
import print_6 from '../assets/prints/print_6.jpg';
import print_7 from '../assets/prints/print_7.jpg';
import print_8 from '../assets/prints/print_8.jpg';

import languages from '../languages';

interface ImagesSectionProps {
    language: string;
}

const ImagesSection: React.FC<ImagesSectionProps> = ({ language }) => {

    const texts = languages[language] || languages.es;

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const images = [print_1, print_2, print_3];

    useEffect(() => {
        const handleSlide = () => {

        };

        slideIntervalRef.current = setInterval(handleSlide, 3000);

        return () => {
            if (slideIntervalRef.current) {
                clearInterval(slideIntervalRef.current);
            }
        };
    }, []);


    return (
        <>
            <div className='absolute top-0 -z-10 bg-gradient-to-t from-transparent to-background_purple h-1/6 w-full'></div>
            
            <div className='flex flex-col gap-4 items-center justify-center h-screen'>

                <div className="w-full flex justify-center items-center">
                    <div className="text-center">
                        <hr className="border-b-2 border-white mx-auto w-3/4" />
                        <h1 className="text-3xl font-bold font-montserrat text-white my-2 px-20">
                            {texts.services}
                        </h1>
                        <hr className="border-b-2 border-white mx-auto w-3/4" />
                    </div>
                </div>

                <div className="w-full h-1/2">
                    <div
                        ref={sliderRef}
                        className="flex w-full h-full overflow-visible my-3 px-4"
                    >
                        {images.map((image, index) => (
                            <div key={index} className="w-1/3 h-full my-auto flex-shrink-0 transition transform py-5 hover:scale-105">
                                <div className="w-full h-full">
                                    <img
                                        src={image}
                                        alt={`slide-${index}`}
                                        className="w-11/12 h-full object-cover rounded-2xl mx-auto shadow-lg shadow-black bg-black"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full  mt-5">
                    <div className=' px-24 flex justify-center items-center text-center'>
                        {texts.services_text.map((service_text, index) => (
                            <div
                                key={index}
                                className={`justify-center scale-90 items-center flex flex-col w-1/3 h-fit py-3  rounded-full bg-opacity-30 text-white font-montserrat hover:scale-90 transform transition-all ease-in duration-150`}
                            >
                                <h1 className="font-bold text-2xl">{service_text.header}</h1>
                                <p className=" w-3/4 text-wrap  px-6 my-2 text-lg ">{service_text.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>
    );
};

export default ImagesSection;
