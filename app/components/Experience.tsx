'use client';

import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import { ParallaxText } from "./ui/ParallaxText";
import { motion } from "motion/react";

const Experience = () => {
    return (
        <div className="py-20" id="experiences">
            <ParallaxText speed={0.2}>
                <h1 className="heading">
                    My {' '}
                    <span className="text-purple">Work Experience</span>
                </h1>
            </ParallaxText>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Button borderRadius="1.75rem" className="flex-1 text-white border-neutral dark:border-slate-800" duration={Math.floor(Math.random() * 10000 + 10000)}>
                        <div className="flex lg:flex-grow flex-col lg: items-center py-6 p-3 md:p-5 lg:p-10 gap-2">
                            <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
