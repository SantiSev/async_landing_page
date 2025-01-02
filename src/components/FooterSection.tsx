import React, { useState, useEffect } from "react";
import { socialMedias, forumURL } from "../socialMedia";
import languages from "../languages";
import form from "../assets/icons/form_icon.svg";
import SectionTitle from "./SectionTitle";
import contact_icon from "../assets/icons/contact_icon.svg";

interface FooterSectionProps {
  language: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ language }) => {
  const texts = languages[language] || languages.es;

  const preguntas_posibles = texts.form_questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="contact"
      className="font-satoshi text-white h-screen w-full bg-gradient-to-b from-transparent to-black flex flex-col justify-center xl:gap-y-3 gap-y-5 items-center"
    >
      <SectionTitle
        title={texts.contact_us}
        icon={contact_icon}
        iconClassName="w-10 h-10 -mt-1 "
      />
      <div className="h-0.5 rounded-full bg-white xl:w-1/4 w-3/4"></div>

      <div className="my-5 py-3 flex items-center justify-center">
        <div className="flex flex-col">
            <a
            className="flex items-center justify-center gap-4 bg-background_purple xl:hover:scale-110 hover:-mt-2 xl:hover:cursor-pointer xl:px-40 hover:px-60 py-3 rounded-full font-bold xl:text-2xl text-lg px-5 transform transition-all"
            href={forumURL}
            target="_blank"
            rel="noopener noreferrer"
            >
            {texts.form_header}
            {!isMobile && (
              <img className="w-9 h-9 rotate-12" src={form} alt="" />
            )}
            </a>

          <div className="mt-3 text-xl text-center duration-1000 transform transition-all">
            {preguntas_posibles[currentQuestionIndex]}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-14 ">
        <div className="flex justify-between items-center my-5 xl:scale-125 space-x-12 ">
          {socialMedias.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-125 rounded-full py-2 transition-all transform"
            >
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="w-8 h-8"
              />
              <span className="text-white font-medium">{item.title}</span>
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 font-light text-sm text-center w-full">
          {texts.created_by}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
