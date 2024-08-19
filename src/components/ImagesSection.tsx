import React, { useEffect, useRef } from 'react';
import SimpleSlider from './SimpleSlider';
import languages from '../languages';

interface ImagesSectionProps {
    language: string;
}

const ImagesSection: React.FC<ImagesSectionProps> = ({ language }) => {

    const texts = languages[language] || languages.es;

    return (
        <>
            <div className='absolute top-0 -z-10 h-20 bg-gradient-to-t from-transparent to-background_purple w-full'></div>

            <div id="services" className='flex flex-col  items-center justify-center h-screen'>

                <div className="w-full flex justify-center items-center scale-125 mb-5 xl:mt-0 mt-24">
                    <div className="text-center">
                        <hr className="border-b-2 border-white mx-auto w-3/4" />
                        <h1 className="text-3xl font-bold font-montserrat text-white my-2 px-20">
                            {texts.services}
                        </h1>
                        <hr className="border-b-2 border-white mx-auto w-3/4" />
                    </div>
                </div>

                <div className='w-full h-fit'>
                    <SimpleSlider />
                </div>

                <div className="w-full ">
                    <div className='px-24 flex justify-center items-center text-center'>
                        {texts.services_text.map((service_text, index) => (
                            <div
                                key={index}
                                className={`justify-center items-center flex flex-col w-1/3 h-fit rounded-full bg-opacity-30 text-white font-montserrat hover:scale-90 transform transition-all ease-in duration-150`}
                            >
                                <h1 className="font-bold text-2xl">{service_text.header}</h1>
                                <p className="w-3/4 text-wrap px-6 text-lg">{service_text.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default ImagesSection;
