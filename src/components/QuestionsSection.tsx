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
            <div id="questions" className="relative snap-y scroll-smooth bg-gradient-to-b from-background_purple to-transparent xl:from-50% from-60% focus:scroll-auto xl:py-28 py-16 flex flex-col xl:flex-row justify-center items-center gap-28 w-full h-screen">
                <div className="w-1/5 h-full overflow-hidden shadow-2xl shadow-black rounded-3xl rotate-3 hover:rotate-0 transition transform hidden xl:block">
                    <img
                        src={timelapse}
                        alt="Timelapse"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full xl:w-1/3 flex flex-col  gap-y-2 gap-4 justify-center items-center text-center xl:px-0 px-10">
                    {texts.printing_explained.map((question, index) => (
                        <div
                            key={index}
                            className={`w-fit h-fit py-3 rounded-xl cursor-pointer text-white font-montserrat transform transition-all ease-in duration-150`}
                        >
                            <h1 className="xl:text-xl text-lg font-bold">{question.header}</h1>
                            <p className="my-2 xl:text-sm text-xs">{question.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuestionsSection;