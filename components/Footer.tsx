'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Dribbble } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.74619 11.2368C8.50493 11.2368 9.07409 11.1102 9.45367 10.8569C9.83325 10.6036 10.023 10.223 10.023 9.71533C10.023 9.14413 9.83325 8.7635 9.45367 8.47353C9.07409 8.18357 8.50493 8.03857 7.74619 8.03857H4.35339V11.2368H7.74619ZM7.84105 15.7061C8.66318 15.7061 9.32717 15.542 9.83325 15.2139C10.3393 14.8858 10.5924 14.4144 10.5924 13.8C10.5924 13.1856 10.3393 12.6961 9.83325 12.3315C9.32717 11.967 8.66318 11.7847 7.84105 11.7847H4.35339V15.7061H7.84105ZM15.4623 10.3204H19.7327V9.30514H15.4623V10.3204ZM17.5975 11.7847C16.807 11.7847 16.1429 12.0163 15.6053 12.4794C15.0678 12.9426 14.7989 13.5932 14.7984 14.4312C14.7989 15.2693 15.0678 15.9103 15.6053 16.354C16.1429 16.7977 16.807 17.0195 17.5975 17.0195C18.4196 17.0195 19.068 16.8188 19.5422 16.4173C20.0165 16.0159 20.3328 15.4526 20.4909 14.7276H18.9953C18.9007 15.0441 18.7268 15.308 18.4735 15.5193C18.2198 15.7303 17.9276 15.8358 17.5968 15.8358C17.2018 15.8358 16.8854 15.7197 16.6479 15.4876C16.4107 15.2555 16.2917 14.9069 16.2912 14.4418H20.5857V14.1251C20.5857 13.3653 20.3644 12.7941 19.9218 12.4111C19.4793 12.0284 18.7042 11.8373 17.5968 11.8373L17.5975 11.7847ZM16.2912 13.4912C16.3386 13.206 16.4651 12.9739 16.6706 12.7944C16.8761 12.6148 17.1852 12.5252 17.5975 12.5252C17.9452 12.5252 18.2458 12.6148 18.5 12.7937C18.7541 12.9725 18.9118 13.2052 18.9735 13.4916L16.2912 13.4912ZM0 4.14444C0 1.85556 1.85556 0 4.14444 0H19.8556C22.1444 0 24 1.85556 24 4.14444V19.8556C24 22.1444 22.1444 24 19.8556 24H4.14444C1.85556 24 0 22.1444 0 19.8556V4.14444ZM12.1408 13.9111C12.1408 12.723 11.7458 11.8217 10.9554 11.2069C11.5878 10.7422 11.904 10.1245 11.904 9.35339C11.904 8.58229 11.6033 7.91717 11.0028 7.35824C10.4023 6.7993 9.48514 6.51991 8.25143 6.51991H2.45524V17.2248H8.34621C9.72145 17.2248 10.758 16.94 11.4559 16.3702C12.1537 15.8005 12.5028 14.9808 12.5028 13.9111L12.1408 13.9111Z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
                className="h-12 w-auto mb-2 lg:mb-5"
              />
            </Link>
            <p className="text-white/40 text-lg max-w-sm">
              Elevating digital experiences through strategic design and creative excellence.
              Based in the future, working worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { component: <Instagram size={20} />, href: "#" },
                { component: <Linkedin size={20} />, href: "#" },
                { component: <BehanceIcon size={20} />, href: "#" },
                { component: <Dribbble size={20} />, href: "#" },
                { component: <WhatsAppIcon size={20} />, href: "https://wa.me/1234567891" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, color: '#ee3a24' }}
                  className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  {social.component}
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
              {['Creative Design Services', 'Website Development', 'UI/UX Design', 'Digital Marketing', 'Branding & Identity'].map((item) => (
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
          {/* <div className="flex gap-8">
                <Link href="#" className="text-white/20 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-white/20 text-sm hover:text-white transition-colors">Terms of Service</Link>
            </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
