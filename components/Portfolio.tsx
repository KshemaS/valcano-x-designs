'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Design', 'UI/UX', 'Marketing', 'Branding', 'Creative'];

  const projects = [
    {
      title: 'Cinematic Poster',
      category: 'Creative',
      image: '/portfolio/poster.png',
      size: 'md:col-span-2 md:row-span-2',
    },
    {
      title: 'Volcano X Identity',
      category: 'Branding',
      image: '/portfolio/logo.png',
      size: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Premium Corporate Card',
      category: 'Branding',
      image: '/portfolio/card.png',
      size: 'md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2',
    },
    {
      title: 'Social Impact Campaign',
      category: 'Marketing',
      image: '/portfolio/social.png',
      size: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1',
    },
    {
      title: 'Brand Refresh',
      category: 'Branding',
      image: '/portfolio/poster.png',
      size: 'md:col-span-2 md:row-span-1',
    },
    {
      title: 'Digital Experience',
      category: 'UI/UX',
      image: '/portfolio/social.png',
      size: 'md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1',
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-poppins mb-4">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-everett text-white">
              Creative <span className="text-primary italic">Portfolio</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-poppins transition-all duration-300 border ${filter === cat
                    ? 'bg-primary border-primary text-black font-bold'
                    : 'bg-transparent border-white/20 text-white/60 hover:border-primary/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[250px] grid-flow-row-dense w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-3xl bg-[#0a0a0a] w-full h-full aspect-square md:aspect-auto ${project.size}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="space-y-2"
                  >
                    <span className="text-primary text-xs uppercase tracking-[0.3em] font-poppins">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-bold font-everett text-white">
                      {project.title}
                    </h4>
                    <button className="mt-4 text-white text-sm font-poppins underline underline-offset-4 decoration-primary hover:text-primary transition-colors">
                      View Details
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
