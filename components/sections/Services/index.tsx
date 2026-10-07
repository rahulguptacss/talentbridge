"use client";

import React from 'react';
import Link from 'next/link';
import { Briefcase, Users, GraduationCap, FileCheck, Layers, UserCheck, Monitor, ClipboardCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../../types';

export default function Services({ limit }: { limit?: number } = {}) {
  const { subtitle, title_line1, title_highlight, description, items } = sections.services;
  
  const displayItems = limit ? items.slice(0, limit) : items;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase size={26} strokeWidth={1.5} />;
      case 'Users': return <Users size={26} strokeWidth={1.5} />;
      case 'GraduationCap': return <GraduationCap size={26} strokeWidth={1.5} />;
      case 'FileCheck': return <FileCheck size={26} strokeWidth={1.5} />;
      case 'Layers': return <Layers size={26} strokeWidth={1.5} />;
      case 'UserCheck': return <UserCheck size={26} strokeWidth={1.5} />;
      case 'Monitor': return <Monitor size={26} strokeWidth={1.5} />;
      case 'ClipboardCheck': return <ClipboardCheck size={26} strokeWidth={1.5} />;
      default: return <Briefcase size={26} strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-10 md:py-12 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Decor: Large Circle Left */}
      <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#f0f4f8] pointer-events-none hidden lg:block"></div>
      
      {/* Background Decor: Dots Left */}
      <div className="absolute top-[80px] left-[8%] opacity-30 pointer-events-none hidden xl:block">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(20)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#4169e1] rounded-full"></div>)}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1300px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-[40px] h-[1.5px] bg-[#041e42]"></div>
            <span className="text-[#041e42] font-bold uppercase tracking-[0.2em] text-[13px]">{subtitle}</span>
            <div className="w-[40px] h-[1.5px] bg-[#041e42]"></div>
          </div>
          
          <h2 className="text-[34px] md:text-[44px] font-black text-[#041e42] leading-[1.1] mb-4 tracking-tight">
            {title_line1} <span className="text-[#fd5b08]">{title_highlight}</span>
          </h2>
          
          <p className="text-[#5e6a7c] max-w-2xl mx-auto text-[16px] md:text-[17px] leading-relaxed">
            {description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-[20px] p-7 group hover:bg-[#041e42] hover:-translate-y-2 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#fff0e6] text-[#fd5b08] group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-300">
                {renderIcon(item.icon)}
              </div>
              
              <h3 className="text-[19px] font-bold text-[#041e42] group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-[#5e6a7c] group-hover:text-gray-300 mb-6 text-[14px] leading-[1.6] flex-grow transition-colors duration-300">
                {item.description}
              </p>
              
              <Link href={item.link || '#'} className="inline-flex items-center gap-2 text-[#fd5b08] group-hover:text-white font-bold text-[14px] hover:gap-3 transition-all duration-300">
                Read More <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner - Only visible when limit is passed (e.g. homepage) */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 flex justify-center items-center"
          >
            <div className="flex items-center gap-3 text-[#5e6a7c] text-[15px] sm:text-[16px] font-medium">
              <span className="bg-[#fd5b08] text-white px-3 py-1 rounded-[6px] font-bold text-[14px]">Free</span>
              <span>Let's build success together - <Link href="/contact" className="text-[#fd5b08] font-bold underline hover:no-underline underline-offset-4 decoration-2">Get In Touch Today!</Link></span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
