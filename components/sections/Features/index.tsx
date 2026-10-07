"use client";

import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../../types';

export default function Features() {
  const { items } = sections.features;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target size={28} strokeWidth={2.5} />;
      case 'Users': return <Users size={28} strokeWidth={2.5} />;
      case 'Zap': return <Zap size={28} strokeWidth={2.5} />;
      case 'Award': return <Award size={28} strokeWidth={2.5} />;
      default: return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative z-20 -mt-16 pb-0">
      {/* Seamless background connection to About section */}
      <div className="absolute top-16 left-0 right-0 bottom-0 bg-[#f4f5f7] -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-4 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          {items.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center gap-3 lg:gap-4 px-4 py-5 lg:px-5 lg:py-6 text-left border-b lg:border-b-0 lg:border-r border-gray-200 last:border-0 hover:bg-gray-50 transition-colors"
            >
              <div className="w-14 h-14 shrink-0 bg-[#fd5b08] text-white rounded-full flex items-center justify-center">
                {renderIcon(item.icon)}
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-[#041e42] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-tight">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
