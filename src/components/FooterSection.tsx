import React, { useState, useEffect } from 'react';
import socialMedias from '../socialMedia';
import languages from '../languages';
import form from '../assets/form.svg';

interface FooterSectionProps {
    language: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ language }) => {

    const texts = languages[language] || languages.es;

    const preguntas_posibles = ['consulte nuestros envios!', 'consulte nuestros precios!', 'consulte nuestros productos!'];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        const changeQuestionInterval = setInterval(() => {
            setCurrentQuestionIndex((prevIndex) =>
                prevIndex === preguntas_posibles.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); 

        return () => {
            clearInterval(changeQuestionInterval);
        };
    }, [preguntas_posibles.length]);

    return (
        <div className='font-montserrat text-white h-screen w-full bg-gradient-to-b from-transparent to-black flex flex-col justify-center gap-9 items-center'>

            <div className="w-full flex justify-center">
                <div className="text-center">
                    <hr className="border-b-2 border-white mx-auto w-3/4" />
                    <h1 className="text-3xl font-bold my-2 px-20">
                        {texts.contact_us}
                    </h1>
                    <hr className="border-b-2 border-white mx-auto w-3/4" />
                </div>
            </div>

            <div className='my-5 py-3 flex items-center justify-center'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-4 bg-background_purple hover:scale-110 hover:-mt-2 hover:cursor-pointer px-40 hover:px-60 py-3 rounded-full font-extrabold text-2xl transform transition-all'>
                        ¡Ingrese aquí para contactarnos!
                        <img className='w-9 h-9 rotate-12' src={form} alt="" />
                    </div>

                    <div className='mt-3 text-xl text-center duration-500 transform transition-all'>
                        {preguntas_posibles[currentQuestionIndex]}
                    </div>

                </div>

            </div>

            <div className="flex flex-col items-center justify-center mx-14 ">
                <div className="flex justify-between items-center my-5 scale-125 space-x-12">
                    {socialMedias.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-125 rounded-full py-2 transition-all transform">
                            <img src={item.logo} alt={`${item.title} logo`} className="w-8 h-8" />
                            <span className="text-white font-medium">{item.title}</span>
                        </a>
                    ))}
                </div>

                <div className='absolute bottom-10 font-light text-sm text-center w-full'>
                    {texts.created_by}
                </div>
            </div>

        </div>
    );
};

export default FooterSection;
