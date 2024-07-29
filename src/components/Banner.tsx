import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import banner_video from '../assets/banner_video.mp4'
import async_logo from '../assets/async_logo_5_white.png'

const Banner = () => {
  return (
    <>
      <div className=" w-full h-screen overflow-hidden">
        <video className="absolute top-0 left-0 bottom-0 w-full h-full object-cover" src={banner_video} autoPlay loop muted />
        <img src={async_logo} alt="Center Image" className="absolute inset-0 m-auto w-11/12 object-contain" />
        <div className="flex items-center justify-center absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b hover:bg-gray-800 hover:opacity-50  from-transparent to-gray-800 transition transform">
            <MdOutlineKeyboardArrowDown className="text-white h-2/5 w-2/5 rounded-full"/>
        </div>
   
      </div>
    </>
  )
}

export default Banner;