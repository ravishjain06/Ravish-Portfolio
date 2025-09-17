import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="container mx-auto min-h-screen px-4 sm:px-8 py-4 sm:py-8 md:py-10 flex items-center justify-center scroll-mt-16">
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 md:gap-10 lg:gap-16 w-full max-w-6xl mx-auto">
                <motion.div
                    className="w-full md:w-[400px] lg:w-[480px] xl:w-[520px] border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden relative group space-y-3 mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    {/* Circular rotating image container */}
                    <div className="relative mx-auto w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-4">
                        {/* Decorative rotating ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-300 animate-spin-slow"></div>
                        {/* Glowing gradient spot */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300 blur-2xl opacity-60 animate-pulse"></div>
                        {/* Animated gradient ring */}
                        <div className="absolute inset-2 rounded-full border-4 border-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-spin-reverse-slower opacity-40"></div>
                        {/* Inner rotating circle with gradient */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 animate-spin-reverse-slower"></div>
                        {/* Profile image */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/ravishjain.jpeg"
                                alt="Profile"
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl text-center font-semibold">Ravish Jain</h1>
                        <div className="mt-1 px-3 py-2 text-xs sm:text-sm text-gray-500 border rounded-full flex items-center justify-center w-fit mx-auto">
                            Available for Work
                            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center">
                        {/* LinkedIn */}
                        <div className="p-2 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border border-gray-200">
                            <a href="https://www.linkedin.com/in/ravish-jain-5840712b4/" target="_blank" rel="noopener noreferrer" className="text-black transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.285c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.285h-3v-5.5c0-1.237-.013-2.823-1.75-2.823-1.75 0-2.02 1.37-2.02 2.723v5.6h-3v-10h2.88v1.36h.041c.401-.76 1.379-1.56 2.84-1.56 3.04 0 3.609 2 3.609 4.591v5.609z" />
                                </svg>
                            </a>
                        </div>
                        {/* Instagram */}
                        <div className="p-2 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border border-gray-200">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                    <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM12 6a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6zm0 2a4 4 0 100 8 4 4 0 000-8zm5.5-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                </svg>
                            </a>
                        </div>
                        {/* Facebook */}
                        <div className="p-2 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border border-gray-200">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V15.47h-2.54v-2.47h2.54v-1.84c0-2.507 1.492-3.89 3.773-3.89 1.094 0 2.24.196 2.24.196v2.461h-1.263c-1.244 0-1.63.775-1.63 1.57v1.5h2.773l-.443 2.47h-2.33v6.409C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                        {/* GitHub */}
                        <div className="p-2 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border border-gray-200">
                            <a href="https://github.com/ravishjain06" target="_blank" rel="noopener noreferrer" className="text-black transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                    <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.091-.745.083-.73.083-.73 1.206.085 1.841 1.239 1.841 1.239 1.07 1.835 2.809 1.304 3.495.998.108-.776.42-1.304.763-1.604-2.665-.302-5.467-1.333-5.467-5.93 0-1.312.469-2.383 1.235-3.222-.124-.303-.535-1.52.117-3.167 0 0 1.008-.322 3.301 1.23a11.501 11.501 0 013.002-.404c1.018.005 2.041.138 3.002.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.647.242 2.864.118 3.167.767.839 1.234 1.91 1.234 3.222 0 4.609-2.806 5.625-5.479 5.921.431.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.289 0 .32.192.693.799.576C20.565 22.093 24 17.595 24 12.297c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                        {/* LeetCode */}
                        <div className="p-2 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border border-gray-200 bg-white transition duration-300">
                            <a
                                href="https://leetcode.com/u/ravishjain988/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full h-full"
                            >
                                <img
                                    src="/Leetcode--Streamline-Simple-Icons.svg"
                                    alt="LeetCode"
                                    className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                                    style={{ filter: 'none' }}
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>
                <div className="w-full md:flex-1 mt-8 md:mt-0 flex flex-col items-center lg:items-start">
                    <motion.div
                        className="w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <h1 className="text-center lg:text-left text-lg sm:text-xl md:text-3xl lg:text-[44px] leading-snug md:leading-tight lg:leading-[60px] font-medium">
                            Hello, I'm Ravish Jain,
                            <span className="font-medium border px-3 py-2 mx-2 my-2 border-gray-200 text-center inline-block text-base sm:text-xl md:text-2xl lg:text-[44px]">
                                MERN Developer
                            </span>
                            <span className="block mt-2 sm:mt-0 lg:inline"> and Full-Stack Web Developer Living in Ahmedabad.</span>
                        </h1>
                    </motion.div>
                    <a
                        href="/Ravish Jain Resume.pdf"
                        download="Ravish-Jain-Resume.pdf"
                        className="mt-6 w-full sm:w-auto"
                    >
                        <motion.button
                            className="px-5 py-3 md:px-7 md:py-4 bg-black text-white text-sm border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-gray-200 text-center lg:text-left w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            Hire Me <span className="ml-2">&#128640;</span>
                        </motion.button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
