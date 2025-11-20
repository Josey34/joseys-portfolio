"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { ParallaxText } from "./ui/ParallaxText";
import { motion } from "motion/react";

const Footer = () => {
    return (
        <footer className="w-full pb-10 relative overflow-hidden" id="contact">
            <div className="w-full absolute left-0 bottom-0 min-h-96 pointer-events-none">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="flex flex-col items-center">
                <ParallaxText speed={0.3}>
                    <h1 className="heading lg:max-w-[45vw]">
                        Ready to take <span className="text-purple">your</span>{" "}
                        digital presence to the next level?
                    </h1>
                </ParallaxText>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-white-200 md:mt-10 my-5 text-center"
                >
                    Reach out to me today and let&apos;s discuss how I can help
                    you achieve your goals.
                </motion.p>
                <motion.a
                    href="mailto:joseytakesan1@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <MagicButton
                        text="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </motion.a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Josey Alexander Takesan
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <button
                            key={info.id}
                            onClick={() => window.open(info.url, "_blank")}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all sm:mt-10 mt-10"
                        >
                            <img
                                src={info.img}
                                alt="icons"
                                width={20}
                                height={20}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
