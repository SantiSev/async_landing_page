import React from 'react';
import languages from '../languages';
import timelapse from '../assets/timelapse.gif';

interface QuestionsSectionProps {
    language: string;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({ language }) => {

    const texts = languages[language] || languages.es;

    const color = ['-', '-', '-'];

    return (
        <>
            <div className="my-24  flex justify-center items-center h-full gap-32">

                <div className="w-1/5 justrounded-xl h-full overflow-hidden shadow-2xl shadow-black rounded-3xl rotate-3 hover:rotate-0 transition transform ">
                    <img
                        src={timelapse}
                        alt="Timelapse"
                        className="w-full h-full object-cover "
                    />
                </div>

                <div className="w-1/3 flex flex-col gap-3 justify-center items-center">
                    {texts.printing_explained.map((question, index) => (
                        <div
                            key={index}
                            className={`w-fit h-fit py-3 rounded-xl ${color[index]} text-white font-montserrat hover:scale-110 transform transition-all ease-in duration-150`}
                        >
                            <h1 className="text-xl text-center font-bold">{question.header}</h1>
                            <p className="my-2 text-sm text-justify">{question.text}</p>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default QuestionsSection;