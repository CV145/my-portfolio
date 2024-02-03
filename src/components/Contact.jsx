import React, { useState } from 'react';
import { FiCopy, FiSend } from 'react-icons/fi';
import TornadoParticles from './Stars';
import '../styles/Contact.css'; // Ensure this path is correct for your CSS file

const Contact = () => {
    const email = 'your_email@example.com';
    const [tooltip, setTooltip] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setTooltip('Copied!');
            setTimeout(() => setTooltip(''), 1500);
        }, () => {
            setTooltip('Failed to copy');
        });
    };

    return (
        <div className="contact-container relative mx-auto max-w-3xl p-6 rounded-lg text-white flex flex-col overflow-hidden">
            <div className="particles-container absolute inset-0 z-0">
                <TornadoParticles />
            </div>
            <div className="contact-content z-10">
                <h2 className="text-4xl mb-6">Contact</h2>
                <form className="flex flex-col space-y-4">
                    <label>
                        Your Name
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="contact-input"
                        />
                    </label>
                    <label>
                        Your Email
                        <input
                            type="text"
                            placeholder="johndoe@email.com"
                            className="contact-input"
                        />
                    </label>
                    <label>
                        Your Message
                        <textarea
                            placeholder="Hello there!"
                            className="contact-input"
                            rows="4"
                        ></textarea>
                    </label>
                    <div className="flex justify-between items-center">
                        <a href={`mailto:${email}`} className="contact-button">
                            <FiSend className="text-lg" />
                            <span>Send Email</span>
                        </a>
                    </div>
                </form>
                {tooltip && <div className="tooltip">{tooltip}</div>}
            </div>
        </div>
    );
};

export default Contact;
