"use client";

import React from 'react';
import { motion, MotionConfig, Variants } from 'framer-motion';
import { Quote, Check, Calendar, User } from 'lucide-react';
import { sections } from '@/components/types';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
};

const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.25 } } as const;

const paraCls = 'text-[#5e6a7c] text-[14px] md:text-[15px] leading-[1.8]';

export default function BlogDetails({ post }: { post: any }) {
  const d = (sections as any).blogDetails;
  const a = post.details;

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-10 md:py-14 bg-white">
        <article className="container mx-auto px-4 md:px-8 max-w-[1200px]">

          {/* Header */}
          <motion.header variants={stagger(0.1)} initial="hidden" animate="show" className="mb-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <motion.span
                className="w-[40px] h-[2px] bg-[#fd5b08] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.15 }}
              />
              <span className="text-[#041e42] font-bold uppercase tracking-[0.15em] text-[12px]">{d.subtitle}</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[30px] md:text-[42px] font-black leading-[1.12] tracking-tight text-[#041e42]">
              {a.titleLine1}
              <br />
              <span className="text-[#fd5b08]">{a.titleHighlight}</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-4 flex flex-wrap items-center gap-4 text-[13px] font-semibold text-[#5e6a7c]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} strokeWidth={2.5} className="text-[#fd5b08]" />
                <time>{post.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} strokeWidth={2.5} className="text-[#fd5b08]" />
                By {post.author}
              </span>
            </motion.div>
          </motion.header>

          {/* Featured image */}
          <motion.figure
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl shadow-[0_18px_40px_-20px_rgba(4,30,66,0.45)] mb-7"
          >
            <motion.img
              src={a.image ?? post.image}
              alt={post.title}
              className="block w-full h-auto"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease }}
            />
          </motion.figure>

          {/* Intro */}
          <div className="space-y-4">
            {a.intro.map((p: string, i: number) => (
              <motion.p key={i} variants={fadeUp} {...inView} className={paraCls}>{p}</motion.p>
            ))}
          </div>

          {/* Highlight quote */}
          <motion.blockquote
            variants={fadeUp}
            {...inView}
            className="group relative my-8 flex items-center gap-4 md:gap-6 rounded-2xl bg-[#fff4ec] border border-[#fde3d2] px-5 py-6 md:px-8 md:py-7 overflow-hidden"
          >
            <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[#fd5b08] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100" />
            <motion.span
              className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#fd5b08] text-white flex items-center justify-center shadow-[0_10px_22px_-10px_rgba(253,91,8,0.9)]"
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 }}
            >
              <Quote size={26} strokeWidth={2.5} className="fill-white" />
            </motion.span>
            <span aria-hidden className="hidden sm:block self-stretch w-px bg-[#fd5b08]/30" />
            <p className="text-[#041e42] font-bold text-[15px] md:text-[18px] leading-[1.55]">
              {a.quote}
            </p>
          </motion.blockquote>

          <motion.p variants={fadeUp} {...inView} className={paraCls}>{a.afterQuote}</motion.p>

          {/* Sub section */}
          <motion.section variants={stagger(0.08)} {...inView} className="mt-10">
            <motion.h3 variants={fadeUp} className="flex items-center gap-4 text-[24px] md:text-[32px] font-black leading-tight tracking-tight text-[#041e42]">
              <motion.span
                aria-hidden
                className="hidden sm:block w-[44px] h-[3px] bg-[#fd5b08] rounded-full origin-left shrink-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
              />
              <span>
                {a.section.titleLine1} <span className="text-[#fd5b08]">{a.section.titleHighlight}</span>
              </span>
            </motion.h3>

            <motion.p variants={fadeUp} className={`${paraCls} mt-3`}>{a.section.intro}</motion.p>

            <motion.ul variants={stagger(0.07, 0.1)} className="mt-5 space-y-3">
              {a.section.points.map((pt: string, i: number) => (
                <motion.li key={i} variants={listItem} className="group flex items-start gap-3">
                  <span className="mt-[2px] shrink-0 w-[20px] h-[20px] rounded-full bg-[#fd5b08] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Check size={12} strokeWidth={3.5} />
                  </span>
                  <span className="text-[#4b5563] text-[14px] md:text-[15px] leading-[1.6] transition-colors group-hover:text-[#041e42]">{pt}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className={`${paraCls} mt-6`}>{a.section.outro}</motion.p>
          </motion.section>

        </article>
      </section>
    </MotionConfig>
  );
}
