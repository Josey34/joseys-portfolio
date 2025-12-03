"use client";

import { Suspense, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import animationData from "@/data/confetti.json";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 sm:gap-6 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["ReactJS", "Express JS", "Typescript"];
    const rightLists = ["NodeJS", "MongoDB", "NextJS"];

    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        setCopied(true);
        const text = "joseytakesan1@gmail.com";
        navigator.clipboard.writeText(text);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(2,4,20)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(2,4,20,1) 0%, rgba(8,10,25,1) 100%)",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                "object-cover object-center "
                            )}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 && "w-full opacity-80"
                    } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-4 p-4 sm:px-5 sm:p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans font-extralight text-xs sm:text-sm md:text-xs lg:text-base text-[#C1C2D3] z-50 max-w-[90%] md:max-w-32 relative">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-base sm:text-lg lg:text-3xl max-w-[90%] sm:max-w-96 font-bold z-50 leading-tight sm:leading-normal relative`}
                    >
                        {title}
                    </div>

                    {id === 2 && (
                        <Suspense fallback={
                            <div className="flex items-center justify-center w-full h-full">
                                <div className="animate-pulse text-white/50 text-sm">
                                    Loading interactive globe...
                                </div>
                            </div>
                        }>
                            <GlobeDemo />
                        </Suspense>
                    )}

                    {id === 3 && (
                        <div className="flex gap-1 sm:gap-2 lg:gap-5 w-fit absolute -right-2 sm:-right-3 lg:-right-2">
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="py-1.5 px-2 sm:py-2 sm:px-3 lg:py-4 lg:px-3 text-[10px] sm:text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="py-2 px-2 sm:py-4 sm:px-3 lg:py-4 lg:px-3 rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-8">
                                <span className="py-2 px-2 sm:py-4 sm:px-3 lg:py-4 lg:px-3 rounded-lg text-center bg-[#10132E]"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="py-1.5 px-2 sm:py-2 sm:px-3 lg:py-4 lg:px-3 text-[10px] sm:text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-3 sm:mt-5 relative">
                            <div
                                className={`absolute -bottom-5 right-0 ${
                                    copied ? "block" : "block"
                                }`}
                            >
                                <Lottie
                                    options={defaultOptions}
                                    height={200}
                                    width={400}
                                />
                            </div>

                            <MagicButton
                                text={
                                    copied
                                        ? "Email is Copied!"
                                        : "Copy my email address"
                                }
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31] text-xs sm:text-sm"
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
