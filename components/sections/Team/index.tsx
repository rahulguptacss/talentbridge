"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { sections } from '@/components/types';

const ease = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

const socialIcons = [
  { key: 'facebook', icon: FaFacebookF, label: 'Facebook' },
  { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
  { key: 'linkedin', icon: FaLinkedinIn, label: 'LinkedIn' },
  { key: 'youtube', icon: FaYoutube, label: 'YouTube' },
] as const;

export default function Team() {
  const { subtitle, title_line1, title_highlight, description, members } = (sections as any).team;

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">
      {/* Decorative: left ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-[70px] top-6 w-[140px] h-[140px] rounded-full border-[22px] border-[#eef1f5]"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      />
      {/* Decorative: orange dot grid */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[50px] top-[50px] grid grid-cols-6 gap-[7px]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-[3px] h-[3px] rounded-full bg-[#fd5b08]/70" />
        ))}
      </motion.div>
      {/* Decorative: right ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-[60px] top-[70px] w-[120px] h-[120px] rounded-full border-[18px] border-[#fdf0e8]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1300px]">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-3 mb-2">
            <motion.span
              className="w-[40px] h-[2px] bg-[#fd5b08] origin-right"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            />
            <span className="text-[#041e42] font-bold uppercase tracking-[0.15em] text-[13px]">{subtitle}</span>
            <motion.span
              className="w-[40px] h-[2px] bg-[#fd5b08] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[32px] md:text-[42px] font-black text-[#041e42] leading-[1.15] mb-3 tracking-tight">
            {title_line1}<span className="text-[#fd5b08]">{title_highlight}</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#5e6a7c] max-w-[640px] mx-auto text-[15px] leading-relaxed">
            {description}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {members.map((m: any) => (
            <motion.article
              key={m.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group bg-white rounded-xl overflow-hidden border border-[#edf0f4] shadow-[0_4px_18px_-6px_rgba(4,30,66,0.12)] hover:shadow-[0_18px_36px_-14px_rgba(4,30,66,0.28)] transition-shadow duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f4f8]">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                {/* bottom gradient + orange bar on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041e42]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#fd5b08] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>

              {/* Info */}
              <div className="px-4 pt-3 pb-4 text-center">
                <h3 className="text-[16px] font-bold text-[#041e42] leading-tight transition-colors duration-300 group-hover:text-[#fd5b08]">
                  {m.name}
                </h3>
                <p className="text-[13px] text-[#6b7280] mt-1">{m.role}</p>

                <div className="mt-3 flex justify-center gap-2">
                  {socialIcons.map(({ key, icon: Icon, label }, i) => (
                    <motion.a
                      key={key}
                      href={m.social?.[key] ?? '#'}
                      aria-label={`${m.name} on ${label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-[34px] h-[34px] rounded-full bg-[#f1f4f8] text-[#041e42] flex items-center justify-center transition-colors duration-300 hover:bg-[#fd5b08] hover:text-white"
                    >
                      <Icon size={14} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
