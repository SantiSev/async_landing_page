import React, { useState } from 'react';
import banner_video from '../assets/bg_videos/bg_vid_2.webm';
import placeholderImage from '../assets/bg_videos/placeholder.png';

interface BackgroundSectionProps {
  children: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ children }) => {

  const [isVideoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="bg-purple-950 relative w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${placeholderImage})` }}>
      <video
        className={`absolute w-full h-full object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        src={banner_video}
        autoPlay
        loop
        muted
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      />
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;