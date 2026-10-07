"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { common } from '../../types';

export default function Footer() {
  const { description, quick_links, our_services, contact, copyright, socials, logo_image, logo_text } = common.Footer;
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Instagram': return <FaInstagram size={22} />;
      case 'Facebook': return <FaFacebook size={22} />;
      case 'Linkedin': return <FaLinkedin size={22} />;
      case 'Youtube': return <FaYoutube size={22} />;
      default: return null;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#041e42] text-white pt-12 pb-4 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 md:gap-10 lg:gap-8 mb-8"
        >
          
          {/* Column 1 */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:border-r border-white/10 lg:pr-8 border-b border-white/10 md:border-b-0 pb-8 md:pb-0 mb-2 md:mb-0">
            <div className="-mb-2">
              <img src={logo_image} alt={logo_text || "TalentBridge Logo"} className="w-[280px] md:w-[360px] max-w-none h-auto object-contain -ml-2 lg:-ml-4" />
            </div>
            <p className="text-gray-300 mb-6 text-base leading-relaxed pr-4">{description}</p>
            <div className="flex gap-4">
              {socials.map((item, index) => (
                <a key={index} href={item.href} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#fd5b08] hover:border-[#fd5b08] transition-all hover:scale-110">
                  {renderIcon(item.icon)}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2 */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:border-r border-white/10 lg:px-4 border-b border-white/10 md:border-b-0 py-4 md:py-0">
            <h4 
              className="text-[20px] md:text-[22px] font-bold text-white mb-0 md:mb-6 relative md:pb-3 flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('quick')}
            >
              <span>Quick Links</span>
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-[#fd5b08] rounded-full hidden md:block"></span>
              <span className="md:hidden text-[#fd5b08] text-2xl font-light leading-none">{openSection === 'quick' ? '−' : '+'}</span>
            </h4>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out md:!max-h-none ${openSection === 'quick' ? 'max-h-[400px] mt-4' : 'max-h-0 md:mt-0'}`}>
              <ul className="space-y-2">
                {quick_links.map((link, index) => (
                  <li key={index} className="flex items-center gap-3 text-[15px] group">
                    <span className="text-white font-bold text-sm leading-none group-hover:text-[#fd5b08] transition-colors">{'>'}</span>
                    <Link href={link.href} className="text-white hover:text-[#fd5b08] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Column 3 */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:border-r border-white/10 lg:px-4 border-b border-white/10 md:border-b-0 py-4 md:py-0">
            <h4 
              className="text-[20px] md:text-[22px] font-bold text-white mb-0 md:mb-6 relative md:pb-3 flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('services')}
            >
              <span>Our Services</span>
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-[#fd5b08] rounded-full hidden md:block"></span>
              <span className="md:hidden text-[#fd5b08] text-2xl font-light leading-none">{openSection === 'services' ? '−' : '+'}</span>
            </h4>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out md:!max-h-none ${openSection === 'services' ? 'max-h-[400px] mt-4' : 'max-h-0 md:mt-0'}`}>
              <ul className="space-y-2">
                {our_services.map((link, index) => (
                  <li key={index} className="flex items-center gap-3 text-[15px] group">
                    <span className="text-white font-bold text-sm leading-none group-hover:text-[#fd5b08] transition-colors">{'>'}</span>
                    <Link href={link.href} className="text-white hover:text-[#fd5b08] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Column 4 */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-4 py-4 md:py-0">
            <h4 
              className="text-[20px] md:text-[22px] font-bold text-white mb-0 md:mb-6 relative md:pb-3 flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              <span>Contact Information</span>
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-[#fd5b08] rounded-full hidden md:block"></span>
              <span className="md:hidden text-[#fd5b08] text-2xl font-light leading-none">{openSection === 'contact' ? '−' : '+'}</span>
            </h4>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out md:!max-h-none ${openSection === 'contact' ? 'max-h-[400px] mt-6' : 'max-h-0 md:mt-0'}`}>
              <ul className="space-y-6">
                <li className="flex gap-4 items-center text-gray-300 text-sm group">
                  <div className="w-[46px] h-[46px] rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#fd5b08] transition-colors">
                    <Phone size={22} className="text-[#fd5b08] group-hover:text-white transition-colors" fill="currentColor" strokeWidth={0} />
                  </div>
                  <span>{contact.phone}</span>
                </li>
                <li className="flex gap-4 items-center text-gray-300 text-sm group">
                  <div className="w-[46px] h-[46px] rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#fd5b08] transition-colors">
                    <FaEnvelope size={22} className="text-[#fd5b08] group-hover:text-white transition-colors" />
                  </div>
                  <span>{contact.email}</span>
                </li>
                <li className="flex gap-4 items-center text-gray-300 text-sm group">
                  <div className="w-[46px] h-[46px] rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#fd5b08] transition-colors">
                    <MapPin size={22} className="text-[#fd5b08] group-hover:text-white transition-colors" fill="currentColor" strokeWidth={0} />
                  </div>
                  <span>{contact.address}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-white/10 pt-4 text-center md:text-left text-gray-400 text-sm flex justify-center md:justify-between items-center flex-wrap gap-4"
        >
          <div>{copyright}</div>
        </motion.div>
      </div>
    </footer>
  );
}
