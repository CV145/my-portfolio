import React, { useEffect, useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Icons for buttons

const ProjectCard = ({ project }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });

        // Clean up the tilt effect when the component unmounts
        return () => tiltRef.current.vanillaTilt.destroy();
    }, []);


    return (
        // Apply flex-col and flex-grow to the card
        <div ref={tiltRef} className=" overflow-hidden shadow-lg flex flex-col flex-grow bg-blue-900 bg-opacity-80 backdrop-blur" data-tilt>
            {/* Content grows and pushes buttons down */}
            <div className="p-4 flex justify-center items-center" style={{ height: '200px' }}> {/* Adjust height as needed */}
                {/* Image covering the area, centered and cropped */}
                <div className="w-full h-full overflow-hidden rounded-lg border-4 border-blue-950">
                    <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div className="p-6 flex-grow">
                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tech}</span>
                    ))}
                </div>
            </div>
            {/* Buttons at the bottom */}
            <div className="flex justify-between items-center p-4 bg-blue-900 bg-opacity-80 backdrop-blur-md">
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
