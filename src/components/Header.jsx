import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 mb-8 py-1 px-4 bg-opacity-80 bg-blue-900 text-white z-50 rounded-full max-w-xs backdrop-blur-sm">
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
