import asyncLogo from '../assets/async_logo_5.png';
import languages from '../languages';

interface NavBarProps {
    language: string;
}


const NavBar: React.FC<NavBarProps> = ({ language }) => {

    const texts = languages[language] || languages.es;

    const navBarTexts = [texts.services, texts.questions, texts.about_us];

    return (
        <>
            <div className="w-full hover:bg-blue-600 hover:opacity-80 fixed top-0 left-0 z-50 h-16 py-12 transition-all duration-500 ease-in-out ">
                <div className="flex justify-between items-center h-full  pl-20 pr-16 text-white text-lg  font-medium font-montserrat">
                    <img src={asyncLogo} alt="Async Logo" className='h-14 hover:cursor-pointer' />
                    <div className='flex justify-normal gap-x-12'>
                        {navBarTexts.map((text, index) => (
                            <div key={index} className='hover:text-gray-300 hover:cursor-pointer'>{text}</div>
                        ))}
                        <div className='font-semibold ml-5 hover:cursor-pointer'>[{texts.current_language}]</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default NavBar;