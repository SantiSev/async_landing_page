import React, { useState, useEffect } from "react";
import languages from "../languages";
import printingIcon from "../assets/icons/3d_printing_icon.svg";
import EmblaSlider from "./EmblaSlider";
import SectionTitle from "./SectionTitle";
import { images } from "../images";

interface ImagesSectionProps {
  language: string;
}

const ImagesSectionRefactor: React.FC<ImagesSectionProps> = ({ language }) => {
  const texts = languages[language] || languages.es;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % texts.services_text.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.services_text.length]);

  return (
    <>
      <div id="services">
        <div className="w-full xl:gap-y-2 flex flex-col items-center justify-center h-screen">
          <SectionTitle
            title={texts.services}
            icon={printingIcon}
            className="md:mt-12 mt-16 "
          />
            <div className="h-0.5 rounded-full bg-white w-3/4 xl:w-1/4 block text-opacity-5">
              <span className="invisible">filler text to show the line for mobile devices</span>
            </div>
          <EmblaSlider slides={images} options={{ loop: true }} />
          <div className="w-full ">
            <div className="flex justify-center items-center text-center -mt-2 mb-5">
              {texts.services_text.map((service, index) => (
                <div
                  key={index}
                  className={`-mt-40 md:-mt-56 justify-center items-center flex flex-col xl:w-1/3 w-full h-fit rounded-full bg-opacity-30 text-white font-montserrat cursor-pointer transition-opacity duration-1000 ${
                    currentIndex === index ? "block" : "hidden"
                  } xl:block`}
                  style={{ opacity: 1 }}
                >
                  <h1 className="font-bold text-lg xl:mt-0 ">
                    {service.header}
                  </h1>
                  <p className="xl:w-3/4 w-full  px-8 text-wrap xl:px-6 xl:ml-16 text-sm">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesSectionRefactor;
