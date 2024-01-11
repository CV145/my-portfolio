// Contact.jsx

import React, { useState } from 'react';
import { FiCopy, FiSend } from 'react-icons/fi';

const Contact = () => {
    const email = 'cvaleriano564@gmail.com';
    const [tooltip, setTooltip] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            // Handle successful copy...
            setTooltip('Copied!');
            setTimeout(() => setTooltip(''), 1500);
        }, () => {
            // Handle failed copy...
            setTooltip('Failed to copy');
        });
    };

    return (
        <div className="mx-auto max-w-3xl p-6 rounded-lg text-white flex flex-col relative">
            <h2 className="text-4xl mb-2">Contact</h2>
            <div className="flex w-full items-center">
                <input
                    type="text"
                    readOnly
                    value={email}
                    className="bg-transparent border-2 border-gray-300 p-2 text-white flex-grow"
                />
                <button onClick={copyToClipboard} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center ml-2">
                    <FiCopy className="text-lg" />
                </button>
                <a href={`mailto:${email}`} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center ml-2">
                    <FiSend className="text-lg" />
                </a>
            </div>
            {tooltip && <div className="tooltip bg-gray-500 rounded p-1 absolute -top-8 right-0">{tooltip}</div>}
        </div>
    );
};

export default Contact;
