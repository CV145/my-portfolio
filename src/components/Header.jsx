import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        // Modify the className to apply the styles you need
        <header className="bg-opacity-50 bg-blue-900 text-white rounded-full py-2 px-8 mx-auto mt-4 my-0 w-auto max-w-screen-md">
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
