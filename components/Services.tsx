'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Box, Globe, Layout, Megaphone, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      desc: 'Modern, responsive, and high-performance websites built with the latest technologies.',
      icon: <Globe size={24} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'UI/UX Design',
      desc: 'Intuitive and engaging user interfaces designed for seamless digital experiences.',
      icon: <Layout size={24} />,
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Digital Marketing',
      desc: 'Strategic online marketing solutions to increase brand visibility and drive engagement.',
      icon: <Megaphone size={24} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Branding & Identity',
      desc: 'Comprehensive visual systems including color palettes, logos, and typography.',
      icon: <Box size={24} />,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Creative Design Services',
      desc: 'Professional design solutions ranging from social media visuals to print materials.',
      icon: <Palette size={24} />,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.5em] text-primary font-poppins mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-everett text-white mb-6"
          >
            Our Design <span className="text-primary italic">Services</span>
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative outline-none"
            >
              {/* Mobile / Tablet View (< lg) */}
              <div className="lg:hidden p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/50 transition-all duration-300 group shadow-xl h-full">
                <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold font-everett text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Desktop View (lg and above) */}
              <div className="hidden lg:block relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-xl">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient / Blur overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-black/50 overflow-hidden">

                  {/* Content Wrapper */}
                  <div className="relative z-10 transform transition-all duration-500 translate-y-6 group-hover:translate-y-0">

                    <h4 className="text-2xl font-bold font-everett text-white mb-2">{service.title}</h4>

                    {/* Description */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-white/80 text-sm leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
