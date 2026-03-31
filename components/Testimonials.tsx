'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import savad from '@/public/testimonials/Savad-MV.png';
import amalapp from '@/public/testimonials/Amala-PP.png';
import sahadev from '@/public/testimonials/Amala-Sahadev.png';


const Testimonials = () => {
  const reviews = [
    {
      name: 'Savad M V',
      role: 'CEO, SkoolWay',
      text: 'Volcano X didn’t just design a logo—he helped shape Skoolway’s identity. They were incredibly patient with feedback, brought fresh ideas, and delivered a modern, professional result that truly stands out. Highly recommended.',
      image: savad.src
    },
    {
      name: 'Amala P P',
      role: 'CEO, COAB',
      text: 'Volcano X is a game-changer for any business looking to establish a strong online presence. Their team is professional, creative, and dedicated to delivering exceptional results.',
      image: amalapp.src
    },
    {
      name: 'Amala Sahadev',
      role: 'AMZ Dance Studio',
      text: 'Working with Volcano X was a breeze. They understood our requirements perfectly and delivered beyond our expectations. ',
      image: sahadev.src
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-black overflow-hidden select-none">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.5em] text-primary font-poppins mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-everett text-white"
          >
            Client <span className="text-primary italic">Feedback</span>
          </motion.h3>
        </div>

        <div className="bg-[#0a0a0a] rounded-[40px] border border-white/5 relative max-w-6xl mx-auto shadow-2xl p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Side: Image Sphere */}
            <div className="relative aspect-square lg:order-1 order-2 w-full max-w-md mx-auto">
              {/* Spinning Decorative Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-accent/10 blur-[60px] animate-pulse pointer-events-none" />

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10"
                >
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  {/* Internal Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Content Box */}
            <div className="flex flex-col justify-center h-full lg:order-2 order-1 relative z-10">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="relative z-10">
                    <p className="text-white/80 text-2xl lg:text-3xl leading-relaxed italic mb-10 font-poppins">
                      <span className="text-primary font-bold">"</span>{reviews[currentIndex].text}
                    </p>

                    <div className="flex flex-col gap-1">
                      <h4 className="text-white text-2xl font-bold font-everett tracking-wide">{reviews[currentIndex].name}</h4>
                      <p className="text-primary text-sm uppercase tracking-widest">{reviews[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4 mt-16 pt-8 border-t border-white/5 relative z-20">
                <button
                  onClick={prevTestimonial}
                  className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group cursor-pointer"
                >
                  <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group cursor-pointer"
                >
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="ml-4 font-poppins text-white/40 tracking-widest text-sm">
                  0{currentIndex + 1} <span className="mx-2">/</span> 0{reviews.length}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
