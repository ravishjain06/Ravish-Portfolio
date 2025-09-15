import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section id="home" className="scroll-mt-32 container mx-auto rounded-lg bg-[#E6EAEE] min-h-[450px] flex flex-col justify-center items-center text-center px-4 sm:px-6 mt-12 sm:mt-24">
            <motion.div
                className="max-w-4xl py-12 sm:py-0"
            >
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    I'M{" "}
                    <span
                        style={{ WebkitTextStroke: "1px #000", color: "transparent" }}
                        className="font-bold"
                    >
                        RAVISH
                    </span>{" "}
                    JAIN
                </motion.h1>
                <motion.div
                    className="bg-white px-3 sm:px-6 py-2 sm:py-4 mt-4 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                >
                    <span className="text-gray-500 text-sm sm:text-base">
                        MERN Developer | Full-Stack Web Developer
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
