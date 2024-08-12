import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import banner_video from '../assets/banner_video.mp4'
import async_logo from '../assets/async_logo_5_white.png'

const Banner = () => {
  return (
    <>
      <div className=" w-fit h-screen">
        <video className="absolute top-0 left-0 bottom-0 w-full h-full object-cover" src={banner_video} autoPlay loop muted />
        <img src={async_logo} alt="Center Image" className="absolute inset-0 m-auto w-1/2 object-contain" />
        <div className="flex items-center justify-center absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent via-transparent  to-background_purple opacity-25 hover:opacity-100 transition transform">
            <MdOutlineKeyboardArrowDown className="text-white h-2/5 w-fit rounded-full hover:scale-150 transition transform"/>
        </div>
   
      </div>
    </>
  )
}

export default Banner;