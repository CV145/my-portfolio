import React from 'react';
import SkillCard from './SkillCard';
import profilePic from '../assets/profilePic.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { faReact, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <>
            <div className="about-me-container flex flex-col items-center justify-center h-screen text-white">
                <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full" />
                <h1 className="text-2xl font-bold">Carlos Valeriano</h1>
                <p className="text-center mt-4">
                    A web developer ready to bring your <span className="text-yellow-400 bounce">visions</span> to <span className="text-yellow-400 bounce">life</span>.
                </p>
                <div className="social-links flex justify-center gap-4 mt-4">
                    <a href="https://github.com/cv145" target="_blank" rel="noopener noreferrer" className="social-link bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <FaGithub className="mr-2" /> Github
                    </a>
                    <a href="https://www.linkedin.com/in/carlos-valeriano-006506195/" target="_blank" rel="noopener noreferrer" className="social-link bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                </div>
            </div>

            <div className="summary-card p-6 mt-12 rounded-lg shadow-lg max-w-2xl w-full">
                <p className="text-white text-left">
                    Dedicated to the art of coding, I am a skilled web developer with expertise in Javascript, React, C#, and ASP.NET. I learn quickly using effective research skills to find solutions to real-world problems. Let's work on your next project together!
                </p>
            </div>

            <div className="skills-container">
                <SkillCard title="React" icon={faReact} />
                <SkillCard title="ASP.NET" icon={faMicrosoft} />
            </div>


        </>
    );
};

export default AboutMe;

