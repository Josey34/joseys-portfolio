'use client';

import { useScroll, useTransform, motion } from "motion/react";
import { useRef, ReactNode } from "react";

interface ParallaxScaleProps {
    children: ReactNode;
    scaleRange?: [number, number];
    className?: string;
}

export const ParallaxScale = ({
    children,
    scaleRange = [0.8, 1],
    className = ""
}: ParallaxScaleProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
