"use client";

import React from 'react';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { sections } from '../../types';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MissionVision() {
  const { subtitle, title_line1, title_highlight, description, button, mission, vision, image } = (sections as any).mission_vision;

  return (
    <section className="py-8 lg:py-10 bg-[#041e42] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-4 xl:gap-6">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[35%] flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#fd5b08]"></div>
                <span className="text-[#fd5b08] font-bold uppercase tracking-widest text-[12px]">{subtitle}</span>
              </div>
              <h2 className="text-[30px] lg:text-[36px] font-black text-white leading-[1.15] mb-5 tracking-tight">
                {title_line1} <span className="text-[#fd5b08]">{title_highlight}</span>
              </h2>
              <div className="w-[40px] h-[3px] bg-[#fd5b08] mb-6"></div>
              <p className="text-[#a8b2c1] text-[14px] leading-[1.7] mb-8 font-normal pr-4">
                {description}
              </p>
              
              <Link href={button.href} className="inline-flex items-center gap-3 bg-[#fd5b08] text-white pl-6 pr-2 py-2 rounded-full font-bold hover:bg-[#e04f05] transition-colors shadow-lg group w-fit">
                <span className="text-[15px]">{button.text}</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#041e42] group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Middle Column - Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[35%] flex flex-col gap-3 lg:gap-3"
          >
            {/* Mission Card */}
            <div className="bg-white rounded-[16px] px-6 py-5 lg:px-7 lg:py-5 flex flex-col sm:flex-row gap-5 lg:gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="w-[70px] h-[70px] shrink-0 rounded-full bg-[#fff0e6] flex items-center justify-center mt-1">
                <Target className="text-[#fd5b08]" size={32} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] lg:text-[22px] font-black text-[#041e42] mb-2">{mission.title}</h3>
                <div className="w-[30px] h-[3px] bg-[#fd5b08] mb-4"></div>
                <p className="text-[#5e6a7c] text-[14px] leading-[1.7] font-medium">
                  {mission.description}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#f4f5f7] rounded-[16px] px-6 py-5 lg:px-7 lg:py-5 flex flex-col sm:flex-row gap-5 lg:gap-5 shadow-inner">
              <div className="w-[70px] h-[70px] shrink-0 rounded-full bg-[#e8edff] flex items-center justify-center mt-1">
                <Eye className="text-[#4169e1]" size={32} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] lg:text-[22px] font-black text-[#041e42] mb-2">{vision.title}</h3>
                <div className="w-[30px] h-[3px] bg-[#fd5b08] mb-4"></div>
                <p className="text-[#5e6a7c] text-[14px] leading-[1.7] font-medium">
                  {vision.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[30%] h-[350px] lg:h-[440px] rounded-[20px] overflow-hidden relative shadow-2xl"
          >
            <img src={image} alt="Mission and Vision" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
