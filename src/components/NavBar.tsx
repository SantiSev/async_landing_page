import React, { useState, useEffect } from 'react';
import asyncLogo from '../assets/async_logo_5.png';
import asyncLogoMobile from '../assets/async_logo_4_white.png';
import languages from '../languages';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

interface NavBarProps {
    language: string;
}


const NavBar: React.FC<NavBarProps> = ({ language }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [bgOpacity, setBgOpacity] = useState(1);

    const texts = languages[language] || languages.es;

    const navBarTexts = [texts.services, texts.questions, texts.about_us];

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 350; // Maximum scroll value for zero opacity
            const opacity = Math.max(1 - scrollY / maxScroll, 0);
            setBgOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <div className="w-full bg-gradient-to-b bg-blue-950 bg-opacity-0   fixed top-0 left-0 z-50 h-16 py-12">
                <div className="relative w-full h-full">
                    <div className="flex justify-between items-center h-full pl-5 pr-5 md:pl-20 md:pr-16 text-white text-lg font-medium font-montserrat relative">
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <GiHamburgerMenu className="w-11 h-11 text-white" />
                            </button>
                        </div>
                        <div className="h-14 mx-auto md:mx-0 md:ml-0 hover:cursor-pointer">
                            <img src={asyncLogoMobile} alt="Async Logo Mobile" className="block md:hidden h-16 rotate-12 -mt-1" />
                            <img src={asyncLogo} alt="Async Logo" className="hidden md:block h-full" />
                        </div>
                        <div className="hidden md:flex md:justify-normal md:gap-x-12">
                            {navBarTexts.map((text, index) => (
                                <div key={index} className="hover:text-xl hover:cursor-pointer transition-all duration-500 ease-in-out">
                                    {text}
                                </div>
                            ))}
                            <div className="font-semibold ml-5 hover:cursor-pointer">{texts.current_language}</div>
                        </div>
                        <div className="md:hidden font-semibold text-3xl hover:cursor-pointer">{texts.current_language}</div>
                    </div>
                </div>
            </div>

            <animated.div
                {...bind()}
                style={{ x, touchAction: 'none' }}
                className="md:hidden fixed top-0 left-0 w-3/5 h-fit pb-10 rounded-r-3xl bg-blue-600 bg-opacity-55 z-40 transform transition-transform duration-75"
            >
                <div className="flex flex-col mt-20 gap-3 items-start pl-5 pr-5 text-white text-xl font-medium font-montserrat">
                    {navBarTexts.map((text, index) => (
                        <div key={index} className="py-2 hover:text-gray-300 hover:cursor-pointer">
                            {text}
                        </div>
                    ))}
                </div>
            </animated.div>
        </>
    )

}

export default NavBar;