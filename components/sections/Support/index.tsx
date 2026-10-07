"use client";

import React from 'react';
import Link from 'next/link';
import { motion, MotionConfig, type Variants } from 'framer-motion';
import { MessageCircle, Mail, Phone, ArrowRight, type LucideIcon } from 'lucide-react';
import { sections } from '../../types';

interface SupportItem {
  icon: string;
  title: string;
  text: string;
  link: { text: string; href: string };
}

const icons: Record<string, LucideIcon> = { MessageCircle, Mail, Phone };

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Support() {
  const { subtitle, title_line1, title_highlight, description, items } = (sections as any).support;

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-14 lg:py-16 bg-[#f6f8fb]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-[640px] mx-auto mb-10"
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

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {(items as SupportItem[]).map((item) => {
              const Icon = icons[item.icon] ?? MessageCircle;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-[16px] border border-[#e8ecf2] p-6 flex gap-5 shadow-[0_6px_20px_rgba(4,30,66,0.05)] hover:shadow-[0_15px_35px_rgba(4,30,66,0.1)] hover:border-[#fd5b08]/30 transition-[box-shadow,border-color]"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full bg-[#fff0e6] text-[#fd5b08] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#fd5b08] group-hover:text-white">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#041e42] text-[18px] font-bold mb-2">{item.title}</h3>
                    <p className="text-[#5e6a7c] text-[14px] leading-relaxed mb-4">{item.text}</p>
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-2 text-[#fd5b08] text-[14px] font-bold break-all"
                    >
                      {item.link.text}
                      <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
