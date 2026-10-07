"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../../types';

export default function About() {
  const { subtitle, title, description, image1, image2, button, badge_text } = sections.about;

  return (
    <section className="pt-10 pb-20 lg:pt-12 lg:pb-24 bg-[#f4f5f7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[46%] flex flex-col gap-5 lg:gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#041e42] flex items-center justify-center text-white">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12l-8-8M12 12l8-8"/>
                </svg>
              </div>
              <span className="text-[#041e42] font-bold text-sm tracking-wide">{subtitle}</span>
            </div>
            
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#fd5b08] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#041e42] leading-[1.2] relative z-10">
                {title}
              </h2>
            </div>
            
            <div className="rounded-[32px] overflow-hidden h-[300px] sm:h-[400px] lg:h-[440px] w-full group">
              <img src={image1} alt="About Us Team 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </motion.div>
          
          {/* Middle Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[31%] rounded-[32px] overflow-hidden h-[400px] sm:h-[500px] lg:h-auto group"
          >
            <img src={image2} alt="About Us Team 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="w-full lg:w-[23%] flex flex-col justify-end gap-12 lg:gap-14 py-2 lg:py-6"
          >
            <div className="flex justify-center lg:justify-start lg:pl-2 mt-2 lg:mt-8">
              <div className="relative w-40 h-40 lg:w-44 lg:h-44 flex items-center justify-center group cursor-pointer">
                <svg className="absolute w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                  {/* Outer solid circle */}
                  <circle cx="50" cy="50" r="46" stroke="#041e42" strokeWidth="1.5" fill="none" className="transition-colors duration-300 group-hover:stroke-[#fd5b08]" />
                  
                  {/* Invisible path for text */}
                  <path id="textPath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
                  
                  {/* Text spanning the entire circle perfectly */}
                  <text className="text-[12px] font-bold uppercase fill-[#041e42] transition-colors duration-300 group-hover:fill-[#fd5b08]" style={{ letterSpacing: '2px' }}>
                    <textPath href="#textPath" startOffset="0%" textLength="213" lengthAdjust="spacing">{badge_text}</textPath>
                  </text>
                </svg>
                <div className="bg-[#f4f5f7] rounded-full p-2 transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight size={40} strokeWidth={1.5} className="text-[#041e42] transition-colors duration-300 group-hover:text-[#fd5b08]" />
                </div>
              </div>
            </div>
            
            <div className="mb-2 lg:mb-0 lg:pl-2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <p 
                className="text-gray-500 font-medium text-[15.5px] leading-[1.7] mb-8 lg:pr-2" 
                dangerouslySetInnerHTML={{ __html: description }} 
              />
              
              <Link 
                href={button.href} 
                className="group/btn bg-[#fd5b08] text-white pl-8 pr-2.5 py-2.5 rounded-full font-bold text-[15px] inline-flex items-center gap-6 hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 w-fit"
              >
                {button.text} 
                <span className="bg-white text-[#041e42] rounded-full w-9 h-9 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
