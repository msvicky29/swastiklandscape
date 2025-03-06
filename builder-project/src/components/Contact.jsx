import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
            tempErrors.phone = "Please enter a valid 10-digit phone number";
        }
        if (!formData.message.trim()) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
    };

    return (
        <section className="py-20 bg-neutral-900  ">
            <div className="container mx-auto px-4 border-green-600 border-2 rounded-2xl">
                <motion.div 
                    className="max-w-5xl mx-auto bg-neutral-900 rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="bg-green-600 p-12 text-white">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-green-100 mb-12">We'd love to hear from you. Drop us a line below.</p>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <MdLocationOn className="w-6 h-6 text-green-300" />
                                        <span className="text-green-100">123 Green Avenue, Garden City, 302001</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <MdPhone className="w-6 h-6 text-green-300" />
                                        <span className="text-green-100">+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <MdEmail className="w-6 h-6 text-green-300" />
                                        <span className="text-green-100">contact@swastiklandscape.com</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="p-12">
                            <motion.form 
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.name ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="1234567890"
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.phone ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.message ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
