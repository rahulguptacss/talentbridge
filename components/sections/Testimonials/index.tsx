'use client';

import React, { useState, useEffect, useRef } from 'react';

import { ArrowRight, Star } from 'lucide-react';
import { sections } from '../../types';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/(\d+)(.*)/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * targetNumber));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetNumber);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Testimonials() {
  const { subtitle, title_line1, title_highlight, button, reviews } = sections.testimonials;
  const { items: statItems } = sections.stats;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!reviews || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews]);

  return (
    <section className="bg-[#041e42] text-white pt-12 pb-10 sm:pt-14 sm:pb-12 relative overflow-hidden">
      {/* Background graphic - Radial patterns */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full border-[40px] border-white/5 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full border-[30px] border-white/5 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-10 sm:mb-12">
          
          {/* Left Side: Header & Button */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[6px] h-[6px] rounded-full bg-[#fd5b08]"></div>
              <span className="text-gray-300 font-bold uppercase tracking-widest text-[13px]">{subtitle}</span>
            </div>
            <h2 className="text-[34px] md:text-[46px] font-black leading-[1.1] mb-8 text-white max-w-xl tracking-tight">
              {title_line1} <span className="text-[#fd5b08]">{title_highlight}</span>
            </h2>
            
            <div>
              <div className="inline-flex items-center gap-3 bg-[#fd5b08] text-white px-5 py-2.5 rounded-full font-bold transition-colors">
                <span className="pl-2">{button.text}</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#fd5b08]">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Testimonial & Profile */}
          <div className="flex flex-col justify-center relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(reviews[currentSlide].rating || 5)].map((_, i) => (
                      <Star key={i} size={22} fill="#fd5b08" className="text-[#fd5b08]" />
                    ))}
                  </div>
                  
                  <p className="text-[16px] md:text-[17px] text-gray-200 leading-relaxed mb-6 max-w-2xl font-medium min-h-[72px]">
                    &quot;{reviews[currentSlide].text}&quot;
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-gray-300">
                         {reviews[currentSlide].avatar ? (
                           <img src={reviews[currentSlide].avatar} alt={reviews[currentSlide].author} className="w-full h-full object-cover" />
                         ) : (
                           <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                             <span className="text-gray-100 font-bold">{reviews[currentSlide].author.charAt(0)}</span>
                           </div>
                         )}
                      </div>
                      {/* Quote Icon Badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#fd5b08] rounded-full flex items-center justify-center border-2 border-[#041e42]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 17H17L19 13V7H13V13H16L14 17ZM6 17H9L11 13V7H5V13H8L6 17Z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[17px]">{reviews[currentSlide].author}</h4>
                      <p className="text-gray-400 text-[14px]">{reviews[currentSlide].role}</p>
                    </div>
                  </div>
                  
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-2">
                    {reviews.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-[8px] rounded-full transition-all duration-300 ${
                          currentSlide === i ? 'w-5 bg-[#fd5b08]' : 'w-[8px] bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Stats Section Integrated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-0">
          {statItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-4 px-2 xl:px-4 ${
                index % 2 === 0 ? 'border-r border-white/10' : ''
              } md:border-r md:border-white/10 ${
                index === statItems.length - 1 ? 'md:border-none' : ''
              }`}
            >
              <div className="text-[40px] md:text-[48px] font-black text-white leading-none">
                <AnimatedCounter value={item.value} />
              </div>
              <div className="text-gray-300 font-medium text-[13px] md:text-[14px] max-w-[120px] leading-snug text-center xl:text-left">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
