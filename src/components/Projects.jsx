// Projects.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import smileNotesImg from '../assets/eReader.png';
import animeHubImg from '../assets/thumbnail.png';
import schedulerImg from '../assets/AI-Scheduler.png';

//Data structure
const projects = [
    {
        title: 'AI Scheduler',
        description: 'This project connects to your Google account and uses OpenAI to generate a schedule for you based on provided input.',
        image: schedulerImg,
        tech: ['React', 'ASP.NET'],
        liveLink: '#', // URL to live project
        codeLink: '#', // URL to code repository
    },
    {
        title: 'AI Chat Text RPG',
        description: 'A role-playing game using a chat UI to allow the player to speak to an AI that creates a game world.',
        image: animeHubImg,
        tech: ['React', 'ASP.NET'],
        liveLink: '#',
        codeLink: '#',
    },
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
        tech: ['React', 'Tailwind CSS'],
        liveLink: '#',
        codeLink: '#',
    },
    {
        title: 'Ramen Bowl Website',
        description: 'Frontend for a ramen bowl restaurant.',
        image: animeHubImg,
        tech: ['React', 'Tailwind CSS'],
        liveLink: '#',
        codeLink: '#',
    },
    {
        title: 'Ramen Bowl Website',
        description: 'Frontend for a ramen bowl restaurant.',
        image: animeHubImg,
        tech: ['React', 'Tailwind CSS'],
        liveLink: '#',
        codeLink: '#',
    }
];

const Projects = () => {
    return (
        // Add mx-auto and a max-width class, such as max-w-6xl for a large container size
        <div className="mx-auto max-w-3xl p-10 mb-16">
            <h2 className="text-4xl text-white mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
