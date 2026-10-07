"use client";

import React from 'react';
import { sections } from '../../types';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Building, ShieldCheck, Handshake, Settings, BarChart3, Award, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs({ bgColor = "bg-[#f8f9fa]" }: { bgColor?: string } = {}) {
  const { subtitle, title_line1, title_highlight, description, image1, image2, badge_text, features } = (sections as any).why_choose_us;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users size={22} className="text-[#fd5b08]" strokeWidth={2} />;
      case 'Target': return <Target size={22} className="text-[#4169e1]" strokeWidth={2} />;
      case 'Zap': return <Zap size={22} className="text-[#4169e1]" strokeWidth={2} />;
      case 'Building': return <Building size={22} className="text-[#fd5b08]" strokeWidth={2} />;
      case 'ShieldCheck': return <ShieldCheck size={22} className="text-[#fd5b08]" strokeWidth={2} />;
      case 'Handshake': return <Handshake size={22} className="text-[#4169e1]" strokeWidth={2} />;
      default: return <Target size={22} className="text-[#fd5b08]" />;
    }
  };

  return (
    <section className={`py-4 lg:py-4 ${bgColor} overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* Left Column - Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] relative flex gap-5 lg:gap-6 items-center justify-center py-6"
          >
            {/* Left Image (staggered UP) */}
            <div className="w-[50%] h-[350px] lg:h-[480px] xl:h-[520px] rounded-[24px] overflow-hidden shadow-xl relative z-10 -mt-24">
              <img src={image1} alt="Why Choose Us" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Image (staggered DOWN) */}
            <div className="w-[50%] h-[350px] lg:h-[480px] xl:h-[520px] rounded-[24px] overflow-hidden shadow-xl relative z-10 mt-24">
              <img src={image2} alt="Why Choose Us 2" className="w-full h-full object-cover" />
            </div>

            {/* Circular Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] lg:w-[160px] lg:h-[160px] bg-[#fff0e6] rounded-full flex items-center justify-center p-2.5 shadow-xl z-20">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#fd5b08] rounded-full flex items-center justify-center text-white z-10">
                  <Users size={28} strokeWidth={2.5} />
                </div>
                <svg className="absolute w-full h-full scale-[1.05] animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="curve-badge" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10px] lg:text-[11px] font-black fill-[#041e42] tracking-[2.5px] uppercase">
                    <textPath href="#curve-badge" startOffset="0%">
                      • {badge_text} • {badge_text}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] flex flex-col gap-7"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[10px] h-[10px] rounded-full bg-[#fd5b08]"></div>
                <span className="text-[#fd5b08] font-bold uppercase tracking-[0.2em] text-[13px]">{subtitle}</span>
                <div className="h-[1.5px] w-[120px] bg-gradient-to-r from-[#fd5b08] to-transparent ml-1"></div>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-black text-[#041e42] leading-[1.15] mb-3 tracking-tight">
                {title_line1} <span className="text-[#fd5b08]">{title_highlight}</span>
              </h2>
              <p className="text-[#5e6a7c] text-[16px] lg:text-[17px] leading-[1.6] font-normal max-w-xl">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3">
              {features.map((feature: any, idx: number) => {
                const title = feature.title;
                let isOrange = false;
                let IconComp: any = Target;
                
                if (title.includes('Expert')) { IconComp = Users; isOrange = true; }
                else if (title.includes('Customized')) { IconComp = Settings; isOrange = false; }
                else if (title.includes('Faster')) { IconComp = BarChart3; isOrange = false; }
                else if (title.includes('Industry')) { IconComp = Award; isOrange = true; }
                else if (title.includes('End-to-End')) { IconComp = HeartHandshake; isOrange = true; }
                else if (title.includes('Long-Term')) { IconComp = Target; isOrange = false; }

                return (
                  <div key={idx} className="bg-white rounded-[20px] p-4 flex flex-col sm:flex-row gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow group items-start">
                    <div className={`w-[52px] h-[52px] shrink-0 rounded-full flex items-center justify-center transition-colors ${
                      isOrange ? 'bg-[#fff0e6] text-[#fd5b08]' : 'bg-[#edf1ff] text-[#4169e1]'
                    }`}>
                      <IconComp size={24} strokeWidth={2} />
                    </div>
                    <div className="mt-1">
                      <h3 className="text-[15px] font-bold text-[#041e42] mb-1">{feature.title}</h3>
                      <p className="text-[12px] text-[#5e6a7c] leading-[1.6]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
