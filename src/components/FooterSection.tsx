import React from 'react';

const FooterSection: React.FC = () => {

    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0">
                <div className="h-1/4 bg-white w-full"></div>
                <div className="h-full bg-slate-800 w-full"></div>
            </div>
            <div className="relative z-10">
                <p className="text-white">Footer Section</p>
            </div>
        </div>
    );
};

export default FooterSection;
