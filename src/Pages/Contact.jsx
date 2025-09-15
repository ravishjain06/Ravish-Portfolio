import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"; // Add this import

// Initialize EmailJS with your public key
emailjs.init('4j129vXVe6-chP89x');

const Contact = () => {
    const data = [
        {
            icon: "/location-pin-alt-1-svgrepo-com.svg",
            heading: "Location",
            info: "Ahmedabad, Gujarat",
        },
        {
            icon: "/phone-flip-svgrepo-com.svg",
            heading: "Contact Number",
            info: "9316572829",
        },
        {
            icon: "/mail-svgrepo-com.svg",
            heading: "Email",
            info: "ravishjain0601@gmail.com",
        },
    ];

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        emailjs.sendForm(
            'service_s67phu5', // Updated to your correct EmailJS service ID
            'template_kj01tzn', // Your EmailJS template ID
            form.current,
            '4j129vXVe6-chP89x' // Your EmailJS public key
        )
        .then((result) => {
            setSubmitStatus('success');
            // Clear form
            setFormData({
                from_name: '',
                from_email: '',
                message: ''
            });
        }, (error) => {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 }
        })
    };

    return (
        <section className="scroll-mt-16 container mx-auto min-h-screen py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center" id="contact">
            {/* Section Header */}
            <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                <h1 className="text-gray-500 text-sm sm:text-md">CONTACT</h1>
                <p className="font-semibold text-2xl sm:text-3xl md:text-4xl text-gray-800">
                    Get in Touch with Me!
                </p>
            </div>

            {/* Contact Info & Form Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-4 sm:mt-6 md:mt-10 w-full">
                {/* Contact Info Box */}
                <motion.div
                    className="w-full md:w-4/12 bg-[#E6EAEE] p-6 sm:p-8 md:p-10 rounded-md"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    {data.map((item, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <img src={item.icon} alt="" className="h-5 w-5 sm:h-6 sm:w-6 mb-2" />
                            <p className="text-gray-700 font-semibold text-sm sm:text-base">{item.heading}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{item.info}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="w-full md:w-8/12 border border-gray-300 p-6 sm:p-8 rounded-md"
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    {submitStatus === 'success' ? (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-md text-center">
                            <p className="font-medium text-lg">Message sent successfully!</p>
                            <p className="mt-2">Thank you for contacting me. I'll get back to you soon.</p>
                            <button 
                                onClick={() => setSubmitStatus(null)} 
                                className="mt-4 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : submitStatus === 'error' ? (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-6 rounded-md text-center">
                            <p className="font-medium text-lg">Failed to send message</p>
                            <p className="mt-2">There was an error sending your message. Please try again later.</p>
                            <button 
                                onClick={() => setSubmitStatus(null)} 
                                className="mt-4 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                            >
                                Try again
                            </button>
                        </div>
                    ) : (
                        <form ref={form} className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="text-gray-600 text-sm block mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#F9F9F9] border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-600 text-sm block mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#F9F9F9] border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-600 text-sm block mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Write your message..."
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#F9F9F9] border border-gray-300 rounded-md outline-none resize-none focus:ring-1 focus:ring-gray-400"
                                ></textarea>
                            </div>
                            
                            {/* Hidden field for recipient email */}
                            <input type="hidden" name="to_email" value="ravishjain0601@gmail.com" />

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="mt-4 sm:mt-6 px-5 sm:px-7 py-3 sm:py-4 bg-black text-white text-sm border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Me Message"} <span className="ml-1">&#9993;</span>
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;