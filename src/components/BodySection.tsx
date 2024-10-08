import React, { ReactNode } from 'react';

type BodySectionProps = {
    children: ReactNode;
};

const BodySection: React.FC<BodySectionProps> = ({ children }) => {
    return (
        <>
            <div className='snap-y scroll-smooth focus:scroll-auto w-full absolute left-0 -mt-8 h-fit flex flex-col'>
                {children}
            </div>
        </>
    );
};

export default BodySection;