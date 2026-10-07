"use client";

import React from 'react';
import Link from 'next/link';
import { motion, MotionConfig, Variants } from 'framer-motion';
import {
  Briefcase, Users, GraduationCap, FileCheck, Layers, UserCheck, Monitor, ClipboardCheck,
  ChevronRight, Headset, Phone, ArrowRight,
} from 'lucide-react';
import { sections } from '@/components/types';

const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase, Users, GraduationCap, FileCheck, Layers, UserCheck, Monitor, ClipboardCheck,
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = (gap = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const slideIn: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
};

export default function ServiceDetails({ service }: { service: any }) {
  const all = (sections as any).services.items as any[];
  const d = (sections as any).serviceDetails;
  const { hero, content } = service;

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8">

            {/* ===== Sidebar ===== */}
            <aside className="order-2 lg:order-1 lg:self-start lg:sticky lg:top-[110px] space-y-5">
              {/* Services list */}
              <motion.nav
                aria-label={d.sidebarTitle}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease }}
                className="rounded-2xl bg-[#041e42] p-4 shadow-[0_12px_30px_-14px_rgba(4,30,66,0.5)]"
              >
                <h2 className="text-white text-[18px] font-bold px-2 pt-1">{d.sidebarTitle}</h2>
                <motion.span
                  className="block w-9 h-[3px] bg-[#fd5b08] rounded-full mt-2 mb-3 mx-2 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease, delay: 0.3 }}
                />

                <motion.ul className="space-y-1" variants={stagger(0.05, 0.2)} initial="hidden" animate="show">
                  {all.map((s) => {
                    const Icon = iconMap[s.icon] ?? Briefcase;
                    const active = s.slug === service.slug;
                    return (
                      <motion.li key={s.slug} variants={slideIn}>
                        <Link
                          href={`/services/${s.slug}`}
                          aria-current={active ? 'page' : undefined}
                          className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors duration-300 ${
                            active
                              ? 'bg-[#fd5b08] text-white shadow-[0_8px_18px_-8px_rgba(253,91,8,0.8)]'
                              : 'text-white/85 hover:bg-white/[0.07] hover:text-white'
                          }`}
                        >
                          <Icon size={16} strokeWidth={1.9} className={`shrink-0 transition-colors ${active ? 'text-white' : 'text-white/70 group-hover:text-[#fd5b08]'}`} />
                          <span className="flex-1">{s.title}</span>
                          <ChevronRight
                            size={15}
                            className={`shrink-0 transition-transform duration-300 ${active ? 'translate-x-0.5' : 'opacity-60 group-hover:translate-x-1 group-hover:opacity-100'}`}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.nav>

              {/* Help card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.35 }}
                className="relative overflow-hidden rounded-2xl bg-[#041e42] p-5 text-white shadow-[0_12px_30px_-14px_rgba(4,30,66,0.5)]"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-[#fd5b08]/15 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative flex items-center gap-3">
                  <motion.div
                    className="w-11 h-11 rounded-full bg-[#fd5b08]/15 text-[#fd5b08] flex items-center justify-center shrink-0"
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Headset size={22} strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h3 className="text-[16px] font-bold leading-tight">{d.help.title}</h3>
                    <p className="text-[12px] text-white/70 mt-0.5">{d.help.subtitle}</p>
                  </div>
                </div>

                <a
                  href={`tel:${d.help.phone.replace(/\s+/g, '')}`}
                  className="relative mt-4 flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-full bg-white text-[#041e42] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#fd5b08] group-hover:text-white">
                    <Phone size={16} strokeWidth={2.2} />
                  </span>
                  <span className="text-[19px] font-extrabold tracking-wide transition-colors group-hover:text-[#fd5b08]">{d.help.phone}</span>
                </a>

                <motion.div className="relative mt-4" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={d.help.button.href}
                    className="group inline-flex items-center gap-2 rounded-lg bg-[#fd5b08] hover:bg-[#e54f00] px-4 py-2 text-[13px] font-semibold transition-colors shadow-[0_8px_18px_-8px_rgba(253,91,8,0.8)]"
                  >
                    {d.help.button.text}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </aside>

            {/* ===== Main content ===== */}
            <div className="order-1 lg:order-2 min-w-0">
              {/* Hero banner */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease }}
                className="group relative overflow-hidden rounded-2xl min-h-[230px] md:min-h-[300px] flex items-center shadow-[0_14px_36px_-18px_rgba(4,30,66,0.55)]"
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#041e42] via-[#041e42]/85 to-[#041e42]/10" />

                <motion.div className="relative px-6 md:px-10 py-8 max-w-[440px]" variants={stagger(0.1, 0.3)} initial="hidden" animate="show">
                  <motion.p variants={fadeUp} className="text-white/85 text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
                    {hero.tag}
                  </motion.p>
                  <motion.h1 variants={fadeUp} className="text-white text-[34px] md:text-[44px] font-black leading-[1.05] tracking-tight">
                    {hero.title1}
                    <br />
                    <span className="text-[#fd5b08]">{hero.title2}</span>
                  </motion.h1>
                  <motion.span
                    variants={fadeUp}
                    className="block w-12 h-[3px] bg-[#fd5b08] rounded-full mt-4 mb-3"
                  />
                  <motion.p variants={fadeUp} className="text-white/85 text-[14px] leading-snug">
                    {hero.tagline[0]}
                    <br />
                    {hero.tagline[1]}
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Content blocks */}
              <div className="mt-7 space-y-7">
                {content.map((block: any, i: number) => (
                  <motion.article
                    key={block.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="group"
                  >
                    <h2 className="text-[20px] md:text-[22px] font-bold text-[#041e42] leading-snug">
                      {block.title}
                    </h2>
                    <motion.span
                      className="block h-[3px] bg-[#fd5b08] rounded-full mt-2 mb-3 origin-left w-10 transition-[width] duration-500 group-hover:w-16"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.02 }}
                    />
                    <p className="text-[#5e6a7c] text-[14px] md:text-[15px] leading-[1.75]">
                      {block.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
