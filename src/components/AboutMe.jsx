// AboutMe.jsx

import React from 'react';
import profilePic from '../assets/profilePic.png'; // Update the path to where your image is located
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container bg-opacity-50 bg-blue-900 text-white rounded-lg p-6">
            <img src={profilePic} alt="Profile" className="profile-pic w-24 h-24 rounded-full" />
            <h1 className="name mt-4 text-2xl font-bold">Carlos Valeriano</h1>
            <p className="description my-4">
                A freelance web developer ready to bring your visions to life.
            </p>
            <div className="social-links flex justify-center gap-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                    {/* Use an icon or image for GitHub */}
                    Github
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                    {/* Use an icon or image for LinkedIn */}
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
