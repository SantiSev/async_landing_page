import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import banner_video from "../assets/bg_videos/bg_vid_1.webm";
import async_logo_animated from "../assets/async/async_animated.webm";
import async_mobile_logo from "../assets/async/async_logo_5_white.png";
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
    <div id="home" className="relative w-full h-screen mb-7">
      <video
        className="absolute top-0 left-0 bottom-0 w-full h-full object-cover"
        src={banner_video}
        autoPlay
        loop
        muted
      />

      <video
        className="absolute inset-0 m-auto h-auto object-contain lg:w-3/4 hidden sm:block"
        src={async_logo_animated}
        autoPlay
        loop
        muted
        playsInline
      />

      <img
        className="absolute inset-0 m-auto h-auto object-contain scale-95 block sm:hidden"
        src={async_mobile_logo}
        alt="Async Logo"
      />

      <div className="flex items-center justify-center absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent via-transparent to-background_purple opacity-100 transition transform">
        <MdOutlineKeyboardArrowDown
          onClick={() => handleScroll()}
          className="cursor-pointer text-white xl:h-2/5 w-fit rounded-full hover:scale-150 transition transform xl:-mt-0 -mt-24"
        />
      </div>
    </div>
  );
};

export default Banner;
