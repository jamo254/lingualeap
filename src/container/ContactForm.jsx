import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailSent, setEmailSent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+15555555555');  // No spaces, international format
    const [whatsapp, setWhatsapp] = useState('+15555555555');  // WhatsApp number in the correct format
    const [telegram, setTelegram] = useState('jagaban_bigboss');  // Telegram username without @

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
            .then((response) => {
                console.log('Email sent successfully:', response);
                setEmailSent(true);
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error('Failed to send email:', error);
            });
    };

    return (
        <div className="max-w-md mx-auto">
            { emailSent ? (
                <div className="text-center text-green-600">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={ handleSubmit } className="space-y-4">
                    {/* <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={ formData.name }
                                onChange={ handleInputChange }
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={ formData.email }
                                onChange={ handleInputChange }
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            />
                        </div>
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={ formData.message }
                            onChange={ handleInputChange }
                            rows="4"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        ></textarea>
                    </div> */}
                    <div className="flex items-center space-x-4">
                        {/* Phone */ }
                        <a href={ `tel:${phoneNumber}` } className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition duration-300">
                            <Phone size={ 20 } />
                            <span>{ phoneNumber }</span>
                        </a>

                        {/* WhatsApp */ }
                        <a href={ `https://wa.me/${whatsapp}?text=Hello%2C%20I%27m%20interested%20in%20your%20services!` } target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition duration-300">
                            <FaWhatsapp size={ 20 } />
                            <span>WhatsApp</span>
                        </a>

                        {/* Telegram */ }
                        <a href={ `https://t.me/${telegram}` } target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-300">
                            <FaTelegramPlane size={ 20 } />
                            <span>Telegram</span>
                        </a>
                    </div>
                    {/* <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                        Send
                    </button> */}
                </form>
            ) }
        </div>
    );
};

export default ContactForm;
