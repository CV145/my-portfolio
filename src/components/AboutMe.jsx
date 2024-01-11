import React from 'react';
import profilePic from '../assets/profilePic.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <div className="mt-8 flex flex-col items-center py-10 text-white mb-16">
            <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full" />
            <h1 className="mt-4 text-2xl font-bold">Carlos Valeriano</h1>

            <p className="my-4 text-center">
                A freelance web developer ready to bring your <span className="text-yellow-400 bounce">visions</span> to <span className="text-yellow-400 bounce">life</span>.
            </p>

            <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/cv145" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FaGithub className="mr-2" /> Github
                </a>
                <a href="https://www.linkedin.com/in/carlos-valeriano-006506195/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FaLinkedin className="mr-2" /> LinkedIn
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
