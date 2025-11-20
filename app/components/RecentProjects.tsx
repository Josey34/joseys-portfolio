'use client';

import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";
import { ParallaxText } from "./ui/ParallaxText";
import { motion } from "motion/react";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <ParallaxText speed={0.2}>
                <h1 className="heading">
                    A small selection of{" "}
                    <span className="text-purple">Recent Projects</span>
                </h1>
            </ParallaxText>

            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(
                    ({ id, title, des, img, iconLists, link }, index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[41rem]"
                        >
                            <PinContainer title={title} href={link} >
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] lg:h-[30vh] mb-10 rounded-xl">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                        <img src="./bg.png" alt="./bg.png" />
                                    </div>
                                    <img
                                        src={img}
                                        alt={title}
                                        className="z-10 absolute bottom-0"
                                    />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>
                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                    {des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, idx) => (
                                            <div
                                                key={icon}
                                                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:w-10 w-8 h-8 flex items-center justify-center"
                                                style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                                            >
                                                <img
                                                    src={icon}
                                                    alt={icon}
                                                    className="p-2"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center">
                                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                                    </div>
                                </div>
                            </PinContainer>
                        </motion.div>
                    )
                )}
            </div>
        </div>
    );
};

export default RecentProjects;
