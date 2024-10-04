import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface PropType {
  slides: string[];
  options: EmblaOptionsType;
}
export default function EmblaSlider(props: PropType): JSX.Element {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <div className="w-full mx-auto xl:mt-0 -mt-7">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => (
            <div
              className="transform translate-x-0 flex-shrink-0 sm:basis-1/5 basis-full -mx-3 xl:-mx-5"
              key={index}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full  h-full object-cover transition-all transform ease-in-out duration-500  rounded-3xl shadow-black shadow-lg hover:shadow-md  scale-75 xl:hover:scale-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
