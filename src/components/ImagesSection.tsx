import React, { useState, useEffect } from "react";
import languages from "../languages";
import printingIcon from "../assets/icons/3d_printing_icon.svg";
import EmblaSlider from "./EmblaSlider";
import print_1 from "../assets/prints/print_1.jpg";
import print_2 from "../assets/prints/print_2.jpg";
import print_3 from "../assets/prints/print_3.jpg";
import print_4 from "../assets/prints/print_4.jpg";
import print_5 from "../assets/prints/print_5.jpg";
import print_6 from "../assets/prints/print_6.jpg";
import print_7 from "../assets/prints/print_7.jpg";
import print_8 from "../assets/prints/print_8.jpg";
import SectionTitle from "./SectionTitle";

interface ImagesSectionProps {
  language: string;
}

const ImagesSectionRefactor: React.FC<ImagesSectionProps> = ({ language }) => {
  const texts = languages[language] || languages.es;
  const images = [
    print_1,
    print_2,
    print_3,
    print_4,
    print_5,
    print_6,
    print_7,
    print_8,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.services_text.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.services_text.length]);

  return (
    <>
      <div id="services">
        <div className="w-full xl:gap-y-2 flex flex-col items-center justify-center h-screen">
          <SectionTitle title={texts.services} icon={printingIcon} className="md:mt-12 mt-16 " />
          <div className="h-0.5 rounded-full bg-white xl:w-1/4 w-3/4"></div>
          <EmblaSlider slides={images} options={{ loop: true }} />
          <div className="w-full">
            <div className="flex justify-center items-center text-center -mt-2 mb-5">
              {texts.services_text.map((service, index) => (
                <div
                  key={index}
                  className={`justify-center items-center flex flex-col xl:w-1/3 w-full h-fit rounded-full bg-opacity-30 text-white font-montserrat cursor-pointer transition-opacity duration-1000 ${
                    currentIndex === index ? "block" : "hidden"
                  } xl:block`}
                  style={{ opacity: 1 }}
                >
                  <h1 className="font-bold text-lg xl:mt-0 ">{service.header}</h1>
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
