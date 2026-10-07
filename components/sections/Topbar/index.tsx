"use client";

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { common } from '../../types';

export default function Topbar() {
  const { contact_info, socials } = common.Topbar;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Mail': return <Mail size={16} />;
      case 'Phone': return <Phone size={16} />;
      case 'Instagram': return <FaInstagram size={16} />;
      case 'Facebook': return <FaFacebook size={16} />;
      case 'Linkedin': return <FaLinkedin size={16} />;
      default: return null;
    }
  };

  return (
    <div className="bg-[#fd5b08] text-white text-sm overflow-hidden">
      <div className="container mx-auto py-3 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <motion.div 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 md:gap-6"
        >
          {contact_info.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2 font-medium">
                {renderIcon(item.icon)}
                <span>{item.value}</span>
              </div>
              {index < contact_info.length - 1 && (
                <span className="text-white/60 font-light">|</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 md:gap-6"
        >
          {socials.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.href} className="flex items-center gap-2 hover:text-gray-200 transition-colors font-medium">
                {renderIcon(item.icon)}
                <span>{item.icon}</span>
              </a>
              {index < socials.length - 1 && (
                <span className="text-white/60 font-light">|</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
