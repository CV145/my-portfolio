
import React from 'react';
import profilePic from '../assets/profilePic.png'; // Ensure this path is correct

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center py-10 text-white">
            <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full" />
            <h1 className="mt-4 text-2xl font-bold">Carlos Valeriano</h1>
            <p className="my-4 text-center">
                A freelance web developer ready to bring your <span className="text-yellow-400">visions</span> to <span className="text-yellow-400">life</span>.
            </p>
            <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    {/* Use an icon or image for GitHub */}
                    Github
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    {/* Use an icon or image for LinkedIn */}
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
