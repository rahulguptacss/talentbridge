"use client";

import React from 'react';
import Link from 'next/link';
import { Users, Search, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../../types';

export default function Hero() {
  const { subtitle, title_line1, title_line2, title_highlight, features, button, image } = sections.hero;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users size={28} strokeWidth={2.5} />;
      case 'Search': return <Search size={28} strokeWidth={2.5} />;
      case 'BarChart': return <BarChart size={28} strokeWidth={2.5} />;
      default: return null;
    }
  };

  return (
    <section className="bg-[#041e42] text-white pt-20 pb-0 relative overflow-hidden">
      {/* Background Animated Patterns */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] text-white opacity-30 hidden md:block"
      >
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-current rounded-full"></div>)}
        </div>
      </motion.div>

      <motion.div 
        animate={{ rotate: [0, 90, 180, 270, 360] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[10%] text-[#fd5b08]"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -left-[5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none"
      />

      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[5%] w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 rounded-full"
      />

      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-8 h-8 md:w-10 md:h-10 border-2 border-white/20 rounded-full"
      />

      <motion.div 
        animate={{ x: [0, 15, 0], opacity: [0.6, 1, 0.6] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[40%] right-[5%] md:right-[15%] text-[#fd5b08] hidden lg:block"
      >
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-current rounded-full"></div>)}
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] right-[30%] hidden xl:block z-20 pointer-events-none"
      >
        <svg width="80" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#fd5b08]">
          <path d="M90 10 Q 70 60 10 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M25 35 L 10 50 L 25 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </motion.div>

      <div className="absolute top-0 w-full h-full left-0 pointer-events-none opacity-20 hidden md:block overflow-hidden">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-[150%] h-[150%] -ml-[25%] -mt-[25%]">
          <path d="M0,30 Q25,10 50,30 T100,30" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0,80 Q25,60 50,80 T100,80" fill="none" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <div className="w-12 h-[2px] bg-[#fd5b08]"></div>
          <span className="text-white font-medium uppercase tracking-[0.15em] text-xs md:text-sm">{subtitle}</span>
          <div className="w-12 h-[2px] bg-[#fd5b08]"></div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[38px] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[80px] font-black mb-14 md:mb-10 tracking-tighter max-w-5xl mx-auto px-2 sm:px-0"
        >
          {title_line1} <br className="hidden sm:block" />
          {title_line2} <span className="text-[#fd5b08]">{title_highlight}</span>
        </motion.h1>
        
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-10 mb-10 md:mb-12 w-full max-w-4xl mx-auto px-0"
        >
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center justify-start gap-4 w-[240px] sm:w-auto mx-auto sm:mx-0 cursor-default group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#fd5b08] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:shadow-md">
                  <div className="scale-[0.85] md:scale-100 flex items-center justify-center">
                    {renderIcon(feature.icon)}
                  </div>
                </div>
                <div className="font-medium text-left text-[14px] md:text-base leading-snug w-[130px] sm:max-w-[130px] transition-colors duration-300 group-hover:text-[#fd5b08]">
                  {feature.text}
                </div>
                {index < features.length - 1 && (
                  <div className="block sm:hidden w-[1px] h-10 bg-white/20 ml-auto"></div>
                )}
              </motion.div>
              {index < features.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.15) }}
                  className="hidden sm:block w-[1px] h-12 bg-white/20"
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-6 md:mb-4 relative"
        >
          <Link 
            href={button.href} 
            className="group bg-[#fd5b08] text-white pl-8 pr-2.5 py-2.5 md:pl-8 md:pr-3 md:py-3 rounded-[18px] md:rounded-full font-bold text-[16px] md:text-xl flex items-center gap-5 md:gap-6 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <span>{button.text}</span>
            <div className="bg-white text-[#fd5b08] rounded-full w-9 h-9 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
            </div>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center mt-12 md:mt-4 -mb-1"
        >
          <img src={image} alt="Hero Team" className="w-full max-w-[1200px] h-auto object-contain pointer-events-none scale-110 md:scale-100 origin-bottom" />
        </motion.div>
      </div>
    </section>
  );
}
