// Projects.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import smileNotesImg from '../assets/eReader.png';
import animeHubImg from '../assets/thumbnail.png';
import schedulerImg from '../assets/AI-Scheduler.png';
import planWiseImg from '../assets/PlanWise.png';

//Data structure
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
        title: 'PlanWise',
        description: 'This application retrieves US health insurance information for you based on an input form you fill out. The information can be filtered. It uses a proxy server in Node.JS to talk to the Marketplace API and get the insurance data.',
        image: planWiseImg,
        tech: ['React', 'NodeJS'],
        liveLink: '#',
        codeLink: '#',
    }
];

const Projects = () => {
    return (
        <div className="mx-auto max-w-6xl p-10">
            <h2 className="text-4xl text-white mb-10">Projects</h2>
            {/* Ensure grid cells can grow and are full height */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                {projects.map((project, index) => (
                    // Apply h-full to each grid cell and flex flex-col to allow ProjectCard to grow
                    <div key={index} className="flex flex-col h-full">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
