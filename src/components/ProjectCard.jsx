// ProjectCard.jsx

import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Icons for buttons

const ProjectCard = ({ project }) => {
    return (
        // Remove max-w-sm and adjust width settings
        <div className="bg-blue-800 rounded-lg overflow-hidden shadow-lg w-full flex flex-col">
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-6 flex-grow">
                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tech}</span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-900">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FiExternalLink className="mr-2" />Visit
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FiGithub className="mr-2" />Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
