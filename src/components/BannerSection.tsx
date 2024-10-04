import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import banner_video from "../assets/bg_vid_1.mp4";
import async_logo_animated from "../assets/async_animated.webm";
import { useSpring } from "react-spring";

const Banner = () => {
  const [, api] = useSpring(() => ({ x: -300 }));

  const handleScroll = () => {
    const element = document.getElementById("questions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      api.start({ x: -300 });
    }
  };

  return (
    <div id="home" className="relative w-full h-screen mb-8">
      <video
        className="absolute top-0 left-0 bottom-0 w-full h-full object-cover"
        src={banner_video}
        autoPlay
        loop
        muted
      />

      <video
        className="absolute inset-0 m-auto  h-auto object-contain lg:w-3/4  "
        src={async_logo_animated}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="flex items-center justify-center absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent via-transparent to-background_purple opacity-100 transition transform">
        <MdOutlineKeyboardArrowDown
          onClick={() => handleScroll()}
          className="cursor-pointer text-white h-2/5 w-fit rounded-full hover:scale-150 transition transform"
        />
      </div>
    </div>
  );
};

export default Banner;
