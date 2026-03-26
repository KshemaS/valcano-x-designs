'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-30 bg-[#050505] relative overflow-clip">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
        <h2 className="text-[20vw] font-bold font-everett uppercase whitespace-nowrap">PURPOSE</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Mobile / Tablet View (<lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:hidden">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group p-10 rounded-3xl bg-black border border-white/5 hover:border-primary/40 transition-all duration-500"
          >
            <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-colors duration-500">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold font-everett text-white mb-6">Our Mission</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To deliver innovative, reliable, and high-impact digital solutions that exceed client expectations and drive measurable business growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group p-10 rounded-3xl bg-black border border-white/5 hover:border-primary/40 transition-all duration-500"
          >
            <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-colors duration-500">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold font-everett text-white mb-6">Our Vision</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To be recognized as a leading creative technology partner known for exceptional design quality,smart marketing strategies, and scalable software solutions.
            </p>
          </motion.div>
        </div>

        {/* Desktop View (lg and above) */}
        <div className="hidden lg:grid grid-cols-2 gap-16 relative min-h-[120vh]">

          {/* Left Column Wrapper */}
          <div className="relative h-full">
            {/* Left Sticky Content */}
            <div className="sticky top-[35vh] flex flex-col gap-12 pr-12">
              <div
                className="cursor-pointer group flex items-center gap-6"
                onClick={() => {
                  setActiveTab('mission');
                  document.getElementById('mission-content')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <h2 className={`text-6xl xl:text-7xl font-bold font-everett uppercase transition-all duration-500 ${activeTab === 'mission' ? 'text-white translate-x-4' : 'text-white/20 group-hover:text-white/40'}`}>
                  Mission
                </h2>
                <div className={`h-1 bg-primary rounded-full transition-all duration-500 ${activeTab === 'mission' ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
              </div>

              <div
                className="cursor-pointer group flex items-center gap-6"
                onClick={() => {
                  setActiveTab('vision');
                  document.getElementById('vision-content')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <h2 className={`text-6xl xl:text-7xl font-bold font-everett uppercase transition-all duration-500 ${activeTab === 'vision' ? 'text-white translate-x-4' : 'text-white/20 group-hover:text-white/40'}`}>
                  Vision
                </h2>
                <div className={`h-1 bg-primary rounded-full transition-all duration-500 ${activeTab === 'vision' ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
              </div>
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="flex flex-col gap-[10vh]">
            <motion.div
              id="mission-content"
              onViewportEnter={() => setActiveTab('mission')}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
              className={`group p-10 xl:p-12 rounded-3xl bg-black border transition-all duration-700 ${activeTab === 'mission' ? 'border-primary/40 opacity-100 scale-100 shadow-[0_0_40px_rgba(230,81,0,0.1)]' : 'border-white/5 opacity-40 scale-95'}`}
            >
              <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <Target size={40} />
              </div>
              <h3 className="text-4xl font-bold font-everett text-white mb-6">Our Mission</h3>
              <p className="text-white/60 text-xl leading-relaxed">
                To deliver world-class design solutions that empower brands to stand out in a crowded digital landscape.
                We aim to combine innovation, creativity, and strategy to build lasting visual legacies for our clients.
              </p>
            </motion.div>

            <motion.div
              id="vision-content"
              onViewportEnter={() => setActiveTab('vision')}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
              className={`group p-10 xl:p-12 rounded-3xl bg-black border transition-all duration-700 ${activeTab === 'vision' ? 'border-primary/40 opacity-100 scale-100 shadow-[0_0_40px_rgba(230,81,0,0.1)]' : 'border-white/5 opacity-40 scale-95'}`}
            >
              <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <Eye size={40} />
              </div>
              <h3 className="text-4xl font-bold font-everett text-white mb-6">Our Vision</h3>
              <p className="text-white/60 text-xl leading-relaxed">
                To be the premier creative partner for visionary brands, setting new standards for digital aesthetics
                and functional design. Our vision is a world where every brand has a powerful and authentic voice.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
