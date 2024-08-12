import React, { useEffect } from 'react';

const FooterSection: React.FC = () => {

    useEffect(() => {
        // Load Tally embeds after component mounts
        if (window.Tally) {
            window.Tally.loadEmbeds();
        }
    }, []);

    return (
        <>
            <div className='font-montserrat text-white flex flex-col gap-10 items-center justify-start h-screen bg-gradient-to-b from-transparent to-background_purple'>

                <div className="w-full flex justify-center mt-10 ">
                    <div className="text-center ">
                        <hr className="border-b-2 border-white mx-auto w-3/4 " />
                        <h1 className="text-3xl font-bold my-2 px-20">
                            Contact Us
                        </h1>
                        <hr className="border-b-2 border-white mx-auto w-3/4 " />
                    </div>
                </div>

                <div className='bg-red-500 w-1/2 h-1/2 rounded-3xl hover:scale-110 transform transition-all'>
                    FORM
                </div>

                <div className='flex gap-9'>

                    <div>
                        Instagram
                    </div>

                    <div>
                        Facebook
                    </div>

                    <div>
                        Youtube
                    </div>

                </div>

            </div>

        </>
    );
};

export default FooterSection;
