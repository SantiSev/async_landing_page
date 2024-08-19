import React, { useState } from 'react';
import asyncLogo from '../assets/async_logo_4_white.png';
import asyncLogoMobile from '../assets/async_logo_4_white.png';
import languages from '../languages';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

interface NavBarProps {
    language: string;
    onLanguageChange: () => void;
}


const NavBar: React.FC<NavBarProps> = ({ language, onLanguageChange }) => {

    const [isOpen, setIsOpen] = useState(false);

    const texts = languages[language] || languages.es;

    const navBarTexts = [
        { text: texts.questions, id: 'questions' },
        { text: texts.services, id: 'services' },
        { text: texts.contact_us, id: 'contact' },
    ];

    const logo_content = {
        logo: asyncLogo,
        logo_mobile: asyncLogoMobile,
        id: 'home'
    }

    const [{ x }, api] = useSpring(() => ({ x: -300 }));

    const toggleMenu = () => {
        if (isOpen) {
            api.start({ x: -300 });
            setIsOpen(false);
        } else {
            api.start({ x: 0 });
            setIsOpen(true);
        }
    };

    const bind = useDrag(({ down, movement: [mx] }) => {
        if (down && mx < 0) {
            api.start({ x: mx });
        } else if (!down && mx < -50) {
            api.start({ x: -300 });
            setIsOpen(false);
        } else if (!down) {
            api.start({ x: 0 });
            setIsOpen(true);
        }
    });

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);  // Close the mobile menu after selection
            api.start({ x: -300 });
        }
    };

    return (
        <>
            <div className="transform transition-all z-50 fixed left-0 top-0  bg-gradient-to-b from-background_purple from-10% to-transparent w-full h-16 py-12">
                <div className="relative w-full h-full">
                    <div className="flex justify-between items-center h-full pl-5 pr-5 md:pl-20 md:pr-16 text-white text-lg font-medium font-montserrat relative">
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <GiHamburgerMenu className="w-11 h-11 text-white" />
                            </button>
                        </div>
                        <div onClick={() => handleScroll(logo_content.id)} className="h-14 mx-auto md:mx-0 md:ml-0 hover:cursor-pointer">
                            <img src={logo_content.logo} alt="Async Logo Mobile" className="block md:hidden h-16 rotate-12 -mt-1" />
                            <img src={logo_content.logo_mobile} alt="Async Logo" className="hidden md:block rotate-12 w-full h-20 " />
                        </div>
                        <div className="hidden md:flex md:justify-normal md:gap-x-12">
                            {navBarTexts.map((item, index) => (
                                <div key={index} onClick={() => handleScroll(item.id)} className="py-2 hover:text-gray-300 hover:cursor-pointer">
                                    {item.text}
                                </div>
                            ))}
                            <div onClick={onLanguageChange} className="font-semibold md:text-2xl text-3xl bg-opacity-75 hover:cursor-pointer text-center w-14  p-2 rounded-full ">{texts.current_language}</div>
                        </div>
                        <div  onClick={onLanguageChange} className="md:hidden w-14 font-semibold text-3xl hover:cursor-pointer">{texts.current_language}</div>
                    </div>
                </div>
            </div>

            <animated.div
                {...bind()}
                style={{ x, touchAction: 'none' }}
                className="md:hidden fixed top-0 left-0 w-3/5 h-fit pb-10 rounded-r-3xl bg-opacity-55 z-40 transform transition-transform duration-75"
            >
                <div className="flex flex-col mt-20 gap-3 items-start pl-5 pr-5 text-white text-xl font-medium font-montserrat">
                    {navBarTexts.map((item, index) => (
                        <div key={index} onClick={() => handleScroll(item.id)} className="py-2 hover:text-gray-300 hover:cursor-pointer">
                            {item.text}
                        </div>
                    ))}
                </div>
            </animated.div>
        </>
    )

}

export default NavBar;