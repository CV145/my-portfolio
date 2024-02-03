import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 mb-8 py-1 px-4 bg-opacity-80 bg-blue-950 text-white z-50 rounded-full max-w-xs backdrop-blur-sm">
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><Link to="about" spy={true} smooth={true} duration={500} className="hover:text-gray-300">About</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} duration={500} className="hover:text-gray-300">Projects</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-gray-300">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
