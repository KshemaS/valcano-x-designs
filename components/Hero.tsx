'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import herobg from '@/public/hero-bg.png';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through the 300vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress for professional feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    });

    // Phase 1: Text movement (0 to 0.4 progress)
    // Volcano X moves up
    const textUpY = useTransform(smoothProgress, [0, 0.4], [0, -200]);
    // Solutions moves down
    const textDownY = useTransform(smoothProgress, [0, 0.4], [0, 200]);
    // Opacity for text
    const textOpacity = useTransform(smoothProgress, [0, 0.25, 0.4], [1, 1, 0]);

    // Phase 2: Background split (0.4 to 1 progress)
    // Top half moves up
    const bgTopY = useTransform(smoothProgress, [0.4, 0.9], ["0%", "-100%"]);
    // Bottom half moves down
    const bgBottomY = useTransform(smoothProgress, [0.4, 0.9], ["0%", "100%"]);

    // Phase 3: Image scale (subtle zoom as we scroll)
    const imageScale = useTransform(smoothProgress, [0, 1], [1.1, 1]);

    // Phase 4: Tagline reveal (starts after background begins to split)
    const taglineOpacity = useTransform(smoothProgress, [0.6, 0.85], [0, 1]);
    const taglineY = useTransform(smoothProgress, [0.6, 0.85], [20, 0]);


    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            {/* Sticky Container - This stays fixed as we scroll */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Image Reveal Layer (Bottom Layer) */}
                <motion.div
                    style={{ scale: imageScale }}
                    className="absolute inset-0"
                >
                    <Image
                        src={herobg.src}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay for cinematic look */}
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                {/* Splitting Black Background (Middle Layer) */}
                {/* We use two panels with a slight overlap (51% height) to avoid the sub-pixel gap line */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <motion.div
                        style={{ y: bgTopY }}
                        className="absolute top-0 left-0 w-full h-[50.5%] bg-black"
                    />
                    <motion.div
                        style={{ y: bgBottomY }}
                        className="absolute bottom-0 left-0 w-full h-[50.5%] bg-black"
                    />
                </div>

                {/* Text Content (Top Layer) */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                    <div className="relative h-[180px] w-full flex flex-col items-center justify-center overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: textUpY, opacity: textOpacity }}
                            className="text-center"
                        >
                            <h1 className="text-6xl md:text-[60px] lg:text-[66px] font-bold font-everett tracking-wide text-white uppercase leading-none">
                                <span className="text-[#ee3a24]">V</span>OLC<span className="text-[#ee3a24]">A</span>NO<span className="text-[#ee3a24] pl-1">X</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            style={{ y: textDownY, opacity: textOpacity }}
                            className="text-center"
                        >
                            <h1 className="text-[24px] font-semibold font-everett tracking-[30px] text-white uppercase leading-none mt-6 mr-[-30px]">
                                DESIGNS
                            </h1>
                        </motion.div>
                    </div>

                    {/* Tagline Reveal - Appears in the center after background splits */}
                    <motion.div
                        style={{ opacity: taglineOpacity, y: taglineY }}
                        className="mt-8 text-center px-6"
                    >
                        <p className="text-xl md:text-5xl font-poppins text-white/90 font-light tracking-widest uppercase">
                            Innovating Your Digital Future
                        </p>
                        <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                    </motion.div>
                </div>


                {/* Optional Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-primary/60 font-light font-poppins">Scroll to Explore</span>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-primary/60 via-primary/10 to-transparent" />
                </motion.div>
            </div>

            {/* Extended content for testing scroll reveal */}
            <div className="h-screen bg-transparent relative z-40 pointer-events-none" />
        </section>
    );
};

export default Hero;
