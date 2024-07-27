import React from 'react'
import banner_video from '../assets/banner_video.mp4'

const Banner = () => {
  return (
    <>
      <div className="w-full h-3/4 top-0 overflow-hidden absolute left-0">
        <video className="w-full h-full object-cover" src={banner_video} autoPlay loop muted />
      </div>
    </>
  )
}

export default Banner;