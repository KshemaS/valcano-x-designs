'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-poppins mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold font-everett text-white mb-8">
              Let's Create Something <span className="text-primary italic">Epic</span>
            </h3>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Ready to take your brand to the next level? Drop me a message and let's discuss your project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-everett text-lg">Email Me</h4>
                  <p className="text-white/40">hello@volcanox.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-everett text-lg">Call Support</h4>
                  <p className="text-white/40">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-everett text-lg">WhatsApp</h4>
                  <p className="text-white/40">+1 (234) 567-891</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-poppins ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-poppins ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-poppins ml-1">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option className="bg-black">Website Development</option>
                  <option className="bg-black">UI/UX Design</option>
                  <option className="bg-black">Digital Marketing</option>
                  <option className="bg-black">Branding & Identity</option>
                  <option className="bg-black">Creative Design Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-poppins ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-primary hover:bg-accent text-white font-bold font-everett py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_10px_30px_rgba(230,81,0,0.3)]">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
