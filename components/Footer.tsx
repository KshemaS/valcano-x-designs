'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Facebook, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <Link href="/">
                <Image 
                  src="/logo.svg" 
                  alt="Volcano X Logo" 
                  width={200} 
                  height={50} 
                  className="h-12 w-auto"
                />
            </Link>
            <p className="text-white/40 text-lg max-w-sm">
                Elevating digital experiences through strategic design and creative excellence. 
                Based in the future, working worldwide.
            </p>
            <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Facebook, Github].map((Icon, i) => (
                    <motion.a
                        key={i}
                        href="#"
                        whileHover={{ y: -5, color: '#E65100' }}
                        className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <Icon size={20} />
                    </motion.a>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-everett text-lg uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <li key={item}>
                        <Link href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors font-poppins flex items-center gap-2 group">
                            <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all" />
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-everett text-lg uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
                {['Website Development', 'UI/UX Design', 'Digital Marketing', 'Branding & Identity', 'Creative Design'].map((item) => (
                    <li key={item}>
                        <Link href="#services" className="text-white/40 hover:text-primary transition-colors font-poppins flex items-center gap-2 group">
                             <span className="h-[1px] w-0 bg-primary group-hover:w-4 transition-all" />
                             {item}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-sm font-poppins">
                © {currentYear} Volcano X Designs. All rights reserved.
            </p>
            <div className="flex gap-8">
                <Link href="#" className="text-white/20 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-white/20 text-sm hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
