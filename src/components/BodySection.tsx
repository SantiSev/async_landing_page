import React, { ReactNode } from 'react';

interface BodySectionProps {
    backgroundColor?: string;
    children: ReactNode;
}

const BodySection: React.FC<BodySectionProps> = ({ children }) => { // Set default color
    return (
        <>
            <div className='absolute -mt-8 left-0 bg-gray-800 w-full h-full'>
                {children}
            </div>
        </>
    );
};

export default BodySection;
