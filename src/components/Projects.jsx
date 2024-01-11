// Projects.jsx

import React from 'react';

// Import images for your projects (update paths accordingly)
import smileNotesImg from '../assets/eReader.png';
import animeHubImg from '../assets/thumbnail.png';

const projects = [
    {
        title: 'e-Reader',
        description: 'Loads and displays your epub files! Gave me experience working with epubs especially the ones that have a table of contents with sub-sections within sections.',
        image: smileNotesImg,
        tech: ['UI', 'Firebase'],
        liveLink: '#', // URL to live project
        codeLink: '#', // URL to code repository
    },
    {
        title: 'Ramen Bowl Website',
        description: 'Frontend for a ramen bowl restaurant.',
        image: animeHubImg,
        tech: ['React', 'Node.js'],
        liveLink: '#',
        codeLink: '#',
    },
    // ... add more projects as needed
];

const Projects = () => {
    return (
        <div className="bg-blue-900 bg-opacity-50 p-10 text-white">
            <h2 className="text-4xl mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-blue-800 bg-opacity-75 rounded-lg p-6">
                        <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full" />
                        <h3 className="text-2xl mb-3">{project.title}</h3>
                        <p className="mb-3">{project.description}</p>
                        <ul className="flex mb-4">
                            {project.tech.map((tech, index) => (
                                <li key={index} className="mr-2 last:mr-0 bg-blue-700 bg-opacity-50 text-sm rounded px-3 py-1">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <div className="flex">
                            <a href={project.liveLink} className="mr-2 last:mr-0 text-sm bg-green-500 hover:bg-green-400 rounded px-4 py-2 transition duration-300">
                                Live
                            </a>
                            <a href={project.codeLink} className="text-sm bg-gray-500 hover:bg-gray-400 rounded px-4 py-2 transition duration-300">
                                Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
