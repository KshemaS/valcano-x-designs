'use client';

import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Website Development', 'UI/UX Design', 'Digital Marketing',
    'Branding & Identity', 'Creative Design Services'
  ];

  const clientsList = [
    '/clients/AMZ-Logo.png',
    '/clients/Al-Seyouh-Travels-Logo.png',
    '/clients/Coab-Logo.png',
    '/clients/Malabar-Logo.png',
    '/clients/Natya-Veena-Logo.png',
    '/clients/Skool-Way-Logo.png'
  ];

  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-poppins mb-4">
              Behind the Designs
            </h2>
            <h3 className="text-4xl md:text-[26px] 2xl:text-[40px] font-bold font-everett text-white mb-6 leading-tight">
              Powerful Design & Digital Solutions  <br />
              <span className="text-primary italic">That Elevate Your Brand</span>
            </h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">
              Volcano X Designs is a creative digital agency dedicated to building strong, professional, and
              results-driven digital experiences. We combine creativity, strategy, and modern technology to
              help businesses stand out in today’s competitive market.
            </p>

            <div className="space-y-4">
              <h4 className="text-white font-bold font-everett text-xl mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 border border-primary/30 rounded-full text-sm text-white/80 font-poppins tracking-wider hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative Element / Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated Border Container */}
            <div className="relative z-10 p-[1px] rounded-2xl overflow-hidden group">
              {/* Spinning gradient */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ee3a24_50%,#000000_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Inner card card content */}
              <div className="relative bg-black rounded-2xl p-8 md:p-12 border border-white/5 h-full w-full z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center font-bold text-black text-xl">
                    V
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Experience Driven</h4>
                    <p className="text-white/40 text-sm italic">5+ Years of Creative Excellence</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                    <p className="text-primary font-bold mb-1 uppercase tracking-tighter text-sm">Design Philosophy</p>
                    <p className="text-white/70 text-sm">Minimalism with a punch of personality. I believe in designs that breathe but speak volumes.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                    <p className="text-primary font-bold mb-1 uppercase tracking-tighter text-sm">Workflow</p>
                    <p className="text-white/70 text-sm">Collaborative, iterative, and transparent. From brief to delivery, excellence is the standard.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>

        {/* Client Marquee Section */}
        <div className="mt-32 pt-12 border-t border-white/5 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Heading positioned on the left side */}
            <div className="flex items-center gap-4 whitespace-nowrap min-w-max md:order-1">
              <h4 className="text-sm uppercase tracking-[0.4em] text-white font-poppins">
                Our Clients
              </h4>
              <div className="h-[2px] bg-primary w-12" />
            </div>

            {/* Scrolling Marquee Slider */}
            <div className="w-full overflow-hidden relative md:order-2 flex-1">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

              <motion.div
                className="flex items-center gap-10 md:gap-20 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {/* Initial Set */}
                <div className="flex items-center gap-10 md:gap-20">
                  {clientsList.map((logo, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img
                        src={logo}
                        alt="Client Logo"
                        className="h-12 w-auto transition-all duration-500 w-[310px]"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicated Set for infinite loop */}
                <div className="flex items-center gap-10 md:gap-20">
                  {clientsList.map((logo, index) => (
                    <div key={`dup-${index}`} className="flex-shrink-0">
                      <img
                        src={logo}
                        alt="Client Logo"
                        className="h-12 w-auto transition-all duration-500 w-[320px]"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
