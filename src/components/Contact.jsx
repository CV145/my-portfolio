import React, { useState } from 'react';
import { FiCopy, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import TornadoParticles from './Stars';
import { EMAILJS_CONFIG } from '../config/emailjs';
import '../styles/Contact.css'; // Ensure this path is correct for your CSS file

const Contact = () => {
    const email = 'cvaleriano564@gmail.com';
    const [tooltip, setTooltip] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setTooltip('Copied!');
            setTimeout(() => setTooltip(''), 1500);
        }, () => {
            setTooltip('Failed to copy');
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all fields' });
            return;
        }

        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: email,
                },
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            setStatus({ type: 'success', message: 'Email sent successfully!' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send error:', error);
            setStatus({ type: 'error', message: 'Failed to send email. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-container relative mx-auto max-w-3xl p-6 rounded-lg text-white flex flex-col overflow-hidden">
            <div className="particles-container absolute inset-0 z-0">
                <TornadoParticles />
            </div>
            <div className="contact-content z-10">
                <h2 className="text-4xl mb-6">Contact</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <label>
                        Your Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="contact-input"
                            required
                        />
                    </label>
                    <label>
                        Your Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="johndoe@email.com"
                            className="contact-input"
                            required
                        />
                    </label>
                    <label>
                        Your Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Hello there!"
                            className="contact-input"
                            rows="4"
                            required
                        ></textarea>
                    </label>
                    {status.message && (
                        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                            {status.message}
                        </div>
                    )}
                    <div className="flex justify-between items-center">
                        <button 
                            type="submit" 
                            className="contact-button"
                            disabled={isLoading}
                        >
                            <FiSend className="text-lg" />
                            <span>{isLoading ? 'Sending...' : 'Send Email'}</span>
                        </button>
                    </div>
                </form>
                {tooltip && <div className="tooltip">{tooltip}</div>}
            </div>
        </div>
    );
};

export default Contact;
