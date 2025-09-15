import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        category: "Frontend", subcategories: [
            { name: "HTML5", img: "/html-5-svgrepo-com.svg" },
            { name: "CSS3", img: "/css-3-svgrepo-com.svg " },
            { name: "JavaScript", img: "/js-svgrepo-com.svg" },
            { name: "React", img: "/react-svgrepo-com.svg" },
            { name: "Redux", img: "/redux-svgrepo-com.svg" },
            { name: "Tailwind CSS", img: "/tailwindcss-icon-svgrepo-com.svg" }
        ]
    },
    {
        category: "Backend", subcategories: [
            { name: "Node.js", img: "/nodejs-icon-svgrepo-com.svg" },
            { name: "Express.js", img: "/express-svgrepo-com.svg" },
            { name: "REST API", img: "/rest-api-svgrepo-com.svg" },
            { name: "MongoDB", img: "/mongodb-svgrepo-com.svg" },
            { name: "PostgreSQL", img: "/icons8-postgresql.svg" },
            { name: "MySQL", img: "/icons8-mysql.svg" }
        ]
    },
    {
        category: "Cloud", subcategories: [
            { name: "AWS", img: "/icons8-aws-logo.svg" },
            { name: "Azure", img: "/icons8-azure.svg" },
            { name: "Firebase", img: "/icons8-firebase.svg" }
        ]
    },
    {
        category: "Other Tools", subcategories: [
            { name: "GitHub", img: "/github.svg" },
            { name: "Postman", img: "/public/postman-icon-svgrepo-com.svg" },
            { name: "Vercel", img: "/public/vercel-fill-svgrepo-com.svg" },
            { name: "Stripe", img: "/public/stripe-svgrepo-com.svg" }
        ]
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 }
    })
};

const Skills = () => {
    return (
        <section id='skills' className='container mx-auto min-h-screen scroll-mt-16 px-4 py-10 md:py-14'>
            <div className='text-center space-y-2 md:space-y-3'>
                <h1 className='text-3xl md:text-4xl font-semibold text-gray-800'>MY SKILLS</h1>
                <p className='text-gray-500 text-sm md:text-base'>Here are the technologies I'm proficient in.</p>
            </div>

            <div className='mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6'>
                {skills.map((category, index) => (
                    <motion.div
                        key={index}
                        className='w-full p-3 md:p-4 lg:p-6 bg-gray-50 rounded-lg shadow-sm'
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <h2 className='text-xl md:text-2xl font-semibold text-center mb-3 md:mb-4'>{category.category}</h2>
                        <ul className='space-y-2'>
                            {category.subcategories.map((skill, i) => (
                                <li key={i} className='bg-white p-2 flex items-center space-x-3 rounded shadow-sm'>
                                    <img src={skill.img} alt={skill.name} className='h-6 w-6 md:h-8 md:w-8' />
                                    <div className='border-b border-gray-300 w-full pb-1'>
                                        <span className='text-left text-sm md:text-md'>{skill.name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
