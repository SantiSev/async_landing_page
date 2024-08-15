import React from 'react';
import banner_video from '../assets/banner_video.mp4';

interface BackgroundSectionProps {
  children: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src={banner_video}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;