import React from "react";
import SimpleSlider from "./SimpleSlider";
import languages from "../languages";
import EmblaCarousel from "embla-carousel";
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

  return (
    <>
      <div id="services">
        <div className="w-full gap-y-5 flex flex-col items-center justify-center h-screen">
          <SectionTitle title={texts.services} icon={printingIcon} className="mt-9" />
          <div className="h-0.5 rounded-full bg-white w-1/4"></div>
          <EmblaSlider slides={images} options={{ loop: true }} />
          <div className="w-full ">
            <div className=" flex justify-center items-center text-center">
              {texts.services_text.map((service_text, index) => (
                <div
                  key={index}
                  className={`justify-center items-center flex flex-col w-1/3 h-fit rounded-full bg-opacity-30 text-white font-montserrat cursor-pointer`}
                >
                  <h1 className="font-bold text-lg">{service_text.header}</h1>
                  <p className="w-3/4 text-wrap px-6 text-sm">
                    {service_text.text}
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
