
import React, { useState } from 'react';
import { SCHOOL_INFO } from '../constants';

const PageHeader: React.FC<{title:string}> = ({title}) => (
    <div className="bg-school-light-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-school-blue text-center">{title}</h1>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Dummy submission logic
        console.log('Form submitted:', formData);
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
    };

    return (
        <div>
            <PageHeader title="Contact Us" />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info and Map */}
                    <div>
                        <h2 className="text-2xl font-bold text-school-blue">Get in Touch</h2>
                        <p className="mt-2 text-gray-600">We'd love to hear from you. Please feel free to reach out with any questions.</p>
                        <div className="mt-8 space-y-4">
                            <p className="flex items-center text-gray-700">
                                <svg className="flex-shrink-0 mr-3 h-6 w-6 text-school-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>{SCHOOL_INFO.address}</span>
                            </p>
                            <p className="flex items-center text-gray-700">
                                <svg className="flex-shrink-0 mr-3 h-6 w-6 text-school-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>{SCHOOL_INFO.phone}</span>
                            </p>
                            <p className="flex items-center text-gray-700">
                                <svg className="flex-shrink-0 mr-3 h-6 w-6 text-school-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>{SCHOOL_INFO.email}</span>
                            </p>
                        </div>
                        <div className="mt-8">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.261895846615!2d74.85698081482121!3d12.89112269090886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a51352e6d69%3A0xf6356e437039a037!2sJr%20Technical%20School!5e0!3m2!1sen!2sin!4v1672583842183!5m2!1sen!2sin" 
                                width="100%" 
                                height="300" 
                                style={{border:0}} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-school-blue">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-school-blue focus:border-school-blue"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-school-blue focus:border-school-blue"/>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-school-blue focus:border-school-blue"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-school-blue bg-school-accent hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-school-accent">
                                    Send Message
                                </button>
                            </div>
                             {formStatus === 'success' && <p className="text-green-600">Thank you! Your message has been sent.</p>}
                             {formStatus === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
