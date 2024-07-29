import React from 'react';
import languages from '../languages';
import timelapse from '../assets/timelapse.gif';

interface QuestionsSectionProps {
    language: string;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({ language }) => {

    const texts = languages[language] || languages.es;

    return (
        <>
            <div className="mt-24 flex justify-center items-center">

                <div className="w-1/2 h-full p-5 rounded-xl   font-montserrat overflow-hidden">
                    <img
                        src={timelapse}
                        alt="Timelapse"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>



                <div className='w-full flex flex-col gap-3 justify-center items-center'>

                    <div className='w-1/2 h-fit p-5 rounded-xl bg-blue-600 text-white font-montserrat hover:scale-110 transform transition-all ease-in duration-150'>
                        <h1 className="text-3xl text-center font-bold">{texts.printing_explained.what_is_a_3d_printer_header}</h1>
                        <p className='mt-2 text-center text-lg'> {texts.printing_explained.what_is_a_3d_printer_text}</p>
                    </div>

                    <div className='w-1/2 h-fit p-5 rounded-xl bg-blue-600 text-white font-montserrat hover:scale-110 transform transition-all ease-in duration-150'>
                        <h1 className="text-3xl text-center font-bold">{texts.printing_explained.what_is_a_3d_printer_header}</h1>
                        <p className='mt-2 text-center text-lg'> {texts.printing_explained.what_is_a_3d_printer_text}</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default QuestionsSection;