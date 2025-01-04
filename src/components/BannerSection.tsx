import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSpring } from "react-spring";
import { useState } from "react";
import banner_video from "../assets/bg_videos/bg_vid_1.webm";
import async_logo_animated from "../assets/async/async_animated.webm";
import async_mobile_logo from "../assets/async/async_logo_5_white.png";
import placeholderImage from "../assets/bg_videos/placeholder.png"; 

const Banner = () => {
  const [, api] = useSpring(() => ({ x: -300 }));
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("questions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      api.start({ x: -300 });
    }
  };

  return (
    <div
      id="home"
      className="relative w-full h-screen mb-7 bg-cover bg-center"
      style={{ backgroundImage: `url(${placeholderImage})` }}
    >
      {/* Background Video */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={banner_video}
        autoPlay
        loop
        muted
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* Animated Logo for Larger Screens */}
      <video
        className="absolute inset-0 m-auto h-auto object-contain lg:w-3/4 hidden sm:block"
        src={async_logo_animated}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Static Logo for Mobile Screens */}
      <img
        className="absolute inset-0 m-auto h-auto object-contain scale-95 block sm:hidden"
        src={async_mobile_logo}
        alt="Async Logo"
      />

      {/* Scroll Button */}
      <div className="absolute bottom-0 left-0 w-full h-1/6 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-background_purple">
        <MdOutlineKeyboardArrowDown
          onClick={handleScroll}
          className="cursor-pointer text-white w-fit h-1/3 bg-background_purple bg-opacity-30 rounded-full hover:scale-150 transition-transform -mt-24 xl:mt-0"
        />
      </div>
    </div>
  );
};

export default Banner;
