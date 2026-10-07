"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig, type Variants } from 'framer-motion';
import { ChevronDown, Headset, ArrowRight } from 'lucide-react';
import { sections } from '../../types';

interface FaqItem {
  question: string;
  answer: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function Faq() {
  const { subtitle, title_line1, title_highlight, description, image, help, items } = (sections as any).faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-14 lg:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-[680px] mx-auto mb-10"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3">
              <span className="w-[40px] h-[2px] bg-[#fd5b08]" />
              <span className="text-[#041e42] font-bold text-[14px] uppercase tracking-[2px]">{subtitle}</span>
              <span className="w-[40px] h-[2px] bg-[#fd5b08]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-[32px] md:text-[42px] font-black text-[#041e42] leading-tight mb-3">
              {title_line1}
              <span className="text-[#fd5b08]">{title_highlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5e6a7c] text-[15px] leading-relaxed">
              {description}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-8 items-start">
            {/* Left: image + help card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="relative pb-40 sm:pb-40"
            >
              <div className="rounded-[20px] overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt="Recruitment consultant answering questions"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-center"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                className="absolute left-4 right-4 sm:left-6 sm:right-auto sm:w-[340px] bottom-0 bg-white rounded-[16px] shadow-[0_15px_40px_rgba(4,30,66,0.15)] p-6"
              >
                <div className="w-11 h-11 rounded-full bg-[#fd5b08] text-white flex items-center justify-center mb-4">
                  <Headset size={20} strokeWidth={2.2} />
                </div>
                <span className="block text-[#6b7280] text-[12px] font-bold uppercase tracking-[1.5px] mb-1">
                  {help.label}
                </span>
                <h3 className="text-[#041e42] text-[22px] font-black mb-2">{help.title}</h3>
                <p className="text-[#5e6a7c] text-[14px] leading-relaxed mb-5">{help.text}</p>
                <Link
                  href={help.button.href}
                  className="group inline-flex items-center gap-2 bg-[#fd5b08] hover:bg-[#e04f05] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors"
                >
                  {help.button.text}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: accordion */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-3"
            >
              {(items as FaqItem[]).map((item, i) => {
                const isOpen = open === i;
                const num = String(i + 1).padStart(2, '0');
                const panelId = `faq-panel-${i}`;
                const btnId = `faq-btn-${i}`;
                return (
                  <motion.div
                    key={item.question}
                    variants={fadeUp}
                    className={`rounded-[14px] border transition-colors duration-300 ${
                      isOpen
                        ? 'border-[#fd5b08]/40 bg-[#fff8f3] shadow-[0_10px_30px_rgba(253,91,8,0.08)]'
                        : 'border-[#e8ecf2] bg-[#f6f8fb] hover:border-[#fd5b08]/30'
                    }`}
                  >
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center gap-4 text-left px-5 py-4 cursor-pointer"
                      >
                        <span
                          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors duration-300 ${
                            isOpen ? 'bg-[#fd5b08] text-white' : 'bg-[#e6ebf2] text-[#041e42]'
                          }`}
                        >
                          {num}
                        </span>
                        <span
                          className={`flex-1 text-[15px] md:text-[16px] font-bold transition-colors duration-300 ${
                            isOpen ? 'text-[#fd5b08]' : 'text-[#041e42]'
                          }`}
                        >
                          {item.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#fd5b08]' : 'text-[#041e42]'
                          }`}
                        />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[73px] pr-6 pb-5 text-[#5e6a7c] text-[14px] leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
