import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SkillCard.css';

const SkillCard = ({ title, icon }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
            perspective: 1000,
            reverse: true
        });

        // Clean up the tilt effect when the component unmounts
        return () => tiltRef.current.vanillaTilt.destroy();
    }, []);

    return (
        <div ref={tiltRef} className="skill-card" data-tilt>
            <FontAwesomeIcon icon={icon} size="3x" color="#0078D4" />
            <h3 className="skill-title">{title}</h3>
        </div>
    );
};

export default SkillCard;
