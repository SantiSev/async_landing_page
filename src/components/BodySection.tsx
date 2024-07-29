import React, { ReactNode } from 'react';

interface BodySectionProps {
    children: ReactNode;
}

const BodySection: React.FC<BodySectionProps> = ({ children }) => { // Set default color
    return (
        <>
            <div className='flex flex-col absolute -mt-8 left-0 bg-gradient-to-b from-purple-950 to-blue-900  w-full h-full'>
                {children}
            </div>
        </>
    );
};

export default BodySection;
