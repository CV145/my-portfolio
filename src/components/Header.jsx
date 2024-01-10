import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="flex justify-center items-center mx-auto sticky bottom-0 md:top-0 w-full md:w-[720px] py-5 z-10 bg-opacity-50 bg-blue-900 text-white rounded-full">
            <nav>
                <ul className="flex">
                    <li className="mx-4">
                        <a href="#about" className="hover:text-gray-300">About Me</a>
                    </li>
                    <li className="mx-4">
                        <a href="#projects" className="hover:text-gray-300">Projects</a>
                    </li>
                    <li className="mx-4">
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
