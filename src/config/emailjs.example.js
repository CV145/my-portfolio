// EmailJS Configuration Example
// Copy this file to emailjs.js and replace with your actual credentials

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID',    // e.g., 'service_abc123'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',  // e.g., 'template_xyz789'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY'     // e.g., 'user_def456...'
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{message}} - The message content
//    - {{to_email}} - Your email (optional, can be hardcoded in template)
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Replace the values above with your actual credentials