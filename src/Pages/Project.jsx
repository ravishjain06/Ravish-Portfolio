import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Add this import

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 }
    })
};

const Project = () => {
    const navigate = useNavigate();

    // Image arrays for each project
    const flashzyImages = [
        "/flashzy1.png",
        "/flashzy2.png",
        "/flashzy3.png",
        "/flashzy4.png"
    ];
    const luckyJobImages = [
        "/luckyjob1.png",
        "/luckyjob2.png",
        "/luckyjob3.png",
        "/luckyjob4.png"
    ];
    const attendanceImages = [
        "/Movya-Attendace5.png",
        "/Movya-Attendace2.png",
        "/Movya-Attendace3.png",
        "/Movya-Attendace4.png"
    ];
    const wearexImages = [
        "/WEAREX1.png",
        "/WEAREX2.png",
        "/WEAREX3.png",
        "/WEAREX4.png"
    ];
    const movyaAIImages = [
        "/Movya-ai1.png",
        "/Movya-ai2.png",
    ];

    // Store current image index for each project
    const [currentIndexes, setCurrentIndexes] = useState({
        Flashzy: 0,
        LuckyJob: 0,
        Attendance: 0,
        WEAREX: 0,
        MovyaAI: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexes(prev => ({
                Flashzy: (prev.Flashzy + 1) % flashzyImages.length,
                LuckyJob: (prev.LuckyJob + 1) % luckyJobImages.length,
                Attendance: (prev.Attendance + 1) % attendanceImages.length,
                WEAREX: (prev.WEAREX + 1) % wearexImages.length,
                MovyaAI: (prev.MovyaAI + 1) % movyaAIImages.length
            }));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Helper to open project URL
    const handleViewProject = (project) => {
        window.open(project.url, "_blank");
    };

    // Projects in desired order with improved descriptions
    const projects = [
        {
            img: wearexImages[currentIndexes.WEAREX],
            name: "WEAREX",
            url: "https://wearex-frontend.onrender.com/",
            brief: "E-commerce platform with Stripe integration.",
            description: "WEAREX is a modern e-commerce website offering a seamless shopping experience. It features secure Stripe payment integration, user-friendly navigation, and a responsive design for all devices."
        },
        {
            img: attendanceImages[currentIndexes.Attendance],
            name: "Attendance Tracking System",
            url: "https://www.attendance.movya.com/", // updated URL
            brief: "Employee attendance & leave management.",
            description: "This system provides organizations with robust employee tracking, including attendance, leave management, and analytics. It features separate admin and user panels for efficient workflow."
        },
        {
            img: movyaAIImages[currentIndexes.MovyaAI],
            name: "MovyaAI",
            url: "https://movya.ai/",
            brief: "Discover 400+ categorized AI tools.",
            description: "MovyaAI is a curated platform listing over 400 AI tools, organized by category for easy discovery. Users can explore, compare, and access the latest AI solutions in one place."
        }
    ];

    return (
        <section id='projects' className="container mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 scroll-mt-16 md:scroll-mt-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10">PROJECTS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white overflow-hidden shadow-sm rounded-md hover:shadow-md transition-shadow duration-300 flex flex-col"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <div className="overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-40 sm:h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 sm:p-5 md:p-6 bg-[#E6EAEE] rounded-bl-md rounded-br-md border-t flex flex-col flex-1">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">{project.name}</h2>
                            <p className="text-gray-600 text-xs sm:text-sm mb-2 font-medium">{project.brief}</p>
                            <p className="text-gray-700 text-xs sm:text-sm mb-4">{project.description}</p>
                            <button
                                className="mt-auto w-full sm:w-auto px-5 sm:px-6 md:px-7 py-3 md:py-4 bg-black text-white text-xs sm:text-sm border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-gray-200"
                                onClick={() => handleViewProject(project)}
                            >
                                View Project
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Project;
