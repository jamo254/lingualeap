import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const ContactForm = ({ selectedCourse }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailSent, setEmailSent] = useState(false);
    const [phoneNumber] = useState('+79771100314');
    const [whatsapp] = useState('+79771100314');
    const [telegram] = useState('jagaban_bigboss');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            selectedCourse: selectedCourse ? selectedCourse.title : 'Not specified'
        };

        emailjs
            .send("service_fo7khba", "template_k24wuop", dataToSend, "vadXL2fIC1_wPEAc0")
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    setEmailSent(true);
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('Failed to send email:', error);
                }
            );
    };

    return (
        <div className="max-w-md mx-auto">
            { emailSent ? (
                <div className="text-center text-green-600">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={ handleSubmit } className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                            <label htmlFor="name" className="block font-medium text-gray-700">
                                Name
                            </label>
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
                            <label htmlFor="email" className="block font-medium text-gray-700">
                                Email
                            </label>
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="block font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={ formData.message }
                            onChange={ handleInputChange }
                            // @ts-ignore
                            rows="4"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        ></textarea>
                    </div>
                    { selectedCourse && (
                        <div className="form-group">
                            <p className="font-medium text-gray-700">Selected Course: { selectedCourse.title }</p>
                        </div>
                    ) }
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
                    >
                        Send
                    </button>
                    <div className="flex items-center space-x-4">
                        <a
                            href={ `tel:${phoneNumber}` }
                            className="flex items-center space-x-2 text-gray-600 transition duration-300 hover:text-gray-800"
                        >
                            <Phone size={ 20 } />
                            <span>{ phoneNumber }</span>
                        </a>
                        <a
                            href={ `https://wa.me/${whatsapp}?text=Здравствуйте%2C%20меня%20интересуют%20ваши%20услуги!` }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-green-600 transition duration-300 hover:text-green-800"
                        >
                            <FaWhatsapp size={ 20 } />
                            <span>WhatsApp</span>
                        </a>
                        <a
                            href={ `https://t.me/${telegram}` }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-600 transition duration-300 hover:text-blue-800"
                        >
                            <FaTelegramPlane size={ 20 } />
                            <span>Telegram</span>
                        </a>
                    </div>
                </form>
            ) }
        </div>
    );
};

export default ContactForm;