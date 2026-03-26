'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, Coffee, RefreshCw, CheckCircle } from 'lucide-react';

const DesignProcess = () => {
  const steps = [
    {
      id: 'step-1',
      title: 'Requirements & Brief',
      desc: 'We start by understanding your goals, audience, and brand personality.',
      icon: <ClipboardList size={32} />,
      image: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=800&auto=format&fit=crop', // Planning / Brief
    },
    {
      id: 'step-2',
      title: 'Concept & Design',
      desc: 'Translating ideas into visual concepts with multiple design directions.',
      icon: <Coffee size={32} />,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', // Execution / Design
    },
    {
      id: 'step-3',
      title: 'Revisions',
      desc: 'Fine-tuning the chosen concept based on your valuable feedback.',
      icon: <RefreshCw size={32} />,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop', // Revisions / Branding
    },
    {
      id: 'step-4',
      title: 'Final Delivery',
      desc: 'High-quality files delivered in all necessary formats for print and web.',
      icon: <CheckCircle size={32} />,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', // Final Output
    },
  ];

  const [activeStepId, setActiveStepId] = useState(steps[0].id);
  const activeStep = steps.find(s => s.id === activeStepId);

  return (
    <section id="process" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 lg:text-left">
          <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-poppins mb-4">
            Workflow
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-everett text-white mb-6">
            My Design <span className="text-primary italic">Process</span>
          </h3>
          <div className="h-1 bg-primary w-20 mx-auto lg:mx-0" />
        </div>

        {/* Desktop View: Split Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Interactive List */}
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isActive = activeStepId === step.id;
              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStepId(step.id)}
                  className={`relative group cursor-pointer border-l-4 pl-10 py-6 transition-all duration-500 ${
                    isActive ? 'border-primary bg-white/[0.02] rounded-r-2xl' : 'border-white/10 hover:border-white/30 hover:bg-white/[0.01] rounded-r-2xl'
                  }`}
                >
                  {/* Subtle Background Number */}
                  <span className={`absolute right-6 top-1/2 -translate-y-1/2 text-8xl font-black font-everett pointer-events-none transition-all duration-500 ${
                      isActive ? 'text-white/5 tracking-tighter' : 'text-transparent'
                  }`}>
                      0{index + 1}
                  </span>
                  
                  <h4 className={`text-4xl font-bold font-everett mb-4 transition-colors duration-500 relative z-10 ${
                    isActive ? 'text-primary' : 'text-white group-hover:text-white/80'
                  }`}>
                    {step.title}
                  </h4>
                  
                  {/* Accordion Description */}
                  <div className={`grid transition-all duration-500 ease-in-out relative z-10 ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                      <div className="overflow-hidden">
                          <p className="text-white/60 text-xl leading-relaxed pt-2">
                            {step.desc}
                          </p>
                      </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Dynamic Image */}
          <div className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
            {/* Dark Graphic Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] z-10" />

            <AnimatePresence mode="popLayout">
              {activeStep && (
                <motion.img
                  key={activeStep.id}
                  src={activeStep.image}
                  alt={activeStep.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Mobile / Tablet View (<lg) */}
        <div className="lg:hidden flex flex-col gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="relative h-64 w-full rounded-3xl overflow-hidden bg-[#0a0a0a]">
                    <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 left-6 h-14 w-14 bg-primary rounded-xl flex items-center justify-center text-black">
                        {step.icon}
                    </div>
                </div>

                <div>
                    <span className="text-primary font-bold font-poppins tracking-widest uppercase mb-2 block">Step 0{index + 1}</span>
                    <h4 className="text-2xl font-bold font-everett text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-white/60 text-base leading-relaxed">
                      {step.desc}
                    </p>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default DesignProcess;
