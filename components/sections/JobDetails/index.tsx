"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig, Variants } from 'framer-motion';
import { Briefcase, MapPin, Users, Calendar, CheckCircle2, User, Mail, Phone, FileText, ArrowRight } from 'lucide-react';
import { sections } from '@/components/types';

const inputCls = "w-full h-[40px] pl-10 pr-3 rounded-lg border border-[#dde3ec] bg-white text-[13px] text-[#041e42] placeholder:text-[#8a94a6] outline-none transition-all focus:border-[#fd5b08] focus:ring-2 focus:ring-[#fd5b08]/15";
const labelCls = "block text-[13px] font-semibold text-[#041e42] mb-1.5";
const iconCls = "absolute left-3.5 text-[#4b5563] pointer-events-none transition-colors group-focus-within:text-[#fd5b08]";

/* ---------- Motion presets ---------- */
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
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

const pop: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
};

const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.2 } } as const;

/* Card heading with animated accent bar */
function CardTitle({ children, size = 'text-[20px]' }: { children: React.ReactNode; size?: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <motion.div
        className="w-[30px] h-[3px] bg-[#fd5b08] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
      />
      <h3 className={`${size} font-bold text-[#041e42]`}>{children}</h3>
    </div>
  );
}

const cardCls = "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-[0_12px_30px_-14px_rgba(4,30,66,0.22)]";

export default function JobDetails({ job }: { job: any }) {
  const d = (sections as any).jobDetails;
  const f = d.form.fields;
  const [fileName, setFileName] = useState('');

  const textInputs = [
    { key: 'name', type: 'text', icon: User, auto: 'name' },
    { key: 'email', type: 'email', icon: Mail, auto: 'email' },
    { key: 'phone', type: 'tel', icon: Phone, auto: 'tel' },
  ];

  const infoCards = [
    { icon: Briefcase, label: d.infoLabels.type, value: job.type },
    { icon: MapPin, label: d.infoLabels.location, value: job.location },
    { icon: Users, label: d.infoLabels.experience, value: job.experience },
    { icon: Calendar, label: d.infoLabels.postedOn, value: job.postedOn },
  ];

  const infoRows = [
    { icon: Briefcase, label: d.info.labels.title, value: job.title },
    { icon: Briefcase, label: d.info.labels.type, value: job.type },
    { icon: MapPin, label: d.info.labels.location, value: job.location },
    { icon: Users, label: d.info.labels.experience, value: job.experience },
    { icon: Calendar, label: d.info.labels.postedOn, value: job.postedOn },
  ];

  return (
    <MotionConfig reducedMotion="user">
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Content */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            
            {/* Header */}
            <motion.div className="text-center md:text-left" variants={stagger(0.1)} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex justify-center md:justify-start items-center gap-3 mb-2">
                <motion.div className="w-[40px] h-[1.5px] bg-[#fd5b08] origin-right" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease, delay: 0.2 }} />
                <span className="text-[#fd5b08] font-bold uppercase tracking-[0.2em] text-[13px]">{d.subtitle}</span>
                <motion.div className="w-[40px] h-[1.5px] bg-[#fd5b08] md:hidden origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease, delay: 0.2 }} />
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[30px] md:text-[38px] font-black text-[#041e42] leading-[1.1] mb-2 tracking-tight">
                {job.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#6b7280] text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
                {d.intro.replace('{title}', job.title)}
              </motion.p>
            </motion.div>

            {/* Info Cards */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3" variants={stagger(0.08, 0.3)} initial="hidden" animate="show">
              {infoCards.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={pop}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group bg-white px-3.5 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 cursor-default transition-[box-shadow,border-color] duration-300 hover:border-[#fd5b08]/30 hover:shadow-[0_10px_24px_-12px_rgba(253,91,8,0.35)]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#fd5b08] flex-shrink-0 transition-all duration-300 group-hover:bg-[#fd5b08] group-hover:text-white group-hover:rotate-[8deg]">
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#041e42] font-bold leading-tight">{label}</p>
                    <p className="text-[13px] text-[#6b7280] leading-tight mt-0.5">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Job Overview */}
            <motion.div variants={fadeUp} {...inView} className={cardCls}>
              <CardTitle>{d.overview.title}</CardTitle>
              <p className="text-[#6b7280] text-[15px] leading-relaxed">
                {job.description} {job.overview ?? d.overview.text}
              </p>
            </motion.div>

            {/* Key Responsibilities */}
            <motion.div variants={fadeUp} {...inView} className={cardCls}>
              <CardTitle>{d.responsibilitiesTitle}</CardTitle>
              <motion.ul className="space-y-2.5" variants={stagger(0.06, 0.15)} {...inView}>
                {job.responsibilities?.map((item: string, i: number) => (
                  <motion.li key={i} variants={listItem} className="flex gap-2.5 text-[#6b7280] text-[15px] leading-relaxed">
                    <CheckCircle2 size={18} className="text-[#fd5b08] flex-shrink-0 mt-[3px]" strokeWidth={2} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Qualifications & Skills */}
            <motion.div variants={fadeUp} {...inView} className={cardCls}>
              <CardTitle>{d.qualificationsTitle}</CardTitle>
              <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5" variants={stagger(0.05, 0.15)} {...inView}>
                {job.qualifications?.map((item: string, i: number) => (
                  <motion.li key={i} variants={listItem} className="flex gap-2.5 text-[#6b7280] text-[15px] leading-relaxed">
                    <CheckCircle2 size={18} className="text-[#fd5b08] flex-shrink-0 mt-[3px]" strokeWidth={2} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>

          {/* Right Sidebar (sticky on desktop) */}
          <aside className="lg:col-span-1 lg:self-start lg:sticky lg:top-[110px]">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
            >
            
            {/* Apply Form */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_-12px_rgba(4,30,66,0.18)] border border-[#e8edf3]">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#041e42] via-[#08295a] to-[#0c3570] px-6 pt-5 pb-4 text-white">
                {/* soft moving glow */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#fd5b08]/20 blur-2xl"
                  animate={{ x: [0, -20, 0], y: [0, 12, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <h3 className="relative text-[20px] font-extrabold leading-tight">{d.form.title}</h3>
                <motion.div
                  className="relative w-9 h-[3px] bg-[#fd5b08] rounded-full mt-2 mb-2.5 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease, delay: 0.7 }}
                />
                <p className="relative text-[#d6deea] text-[13px] leading-snug">{d.form.description}</p>
              </div>

              <motion.form
                className="px-6 pt-4 pb-5 space-y-3"
                onSubmit={(e) => e.preventDefault()}
                variants={stagger(0.06, 0.5)}
                initial="hidden"
                animate="show"
              >
                {textInputs.map(({ key, type, icon: Icon, auto }) => (
                  <motion.div key={key} variants={fadeUp}>
                    <label htmlFor={`apply-${key}`} className={labelCls}>{f[key].label}</label>
                    <div className="group relative flex items-center">
                      <Icon size={16} strokeWidth={1.8} className={iconCls} />
                      <input id={`apply-${key}`} name={key} type={type} required autoComplete={auto} placeholder={f[key].placeholder} className={inputCls} />
                    </div>
                  </motion.div>
                ))}

                <motion.div variants={fadeUp}>
                  <label htmlFor="apply-resume" className={labelCls}>{f.resume.label}</label>
                  <label htmlFor="apply-resume" className="group relative flex items-center h-[40px] pl-10 pr-3 rounded-lg border border-dashed border-[#c9d1dc] bg-[#f3f6fa] cursor-pointer transition-colors hover:border-[#fd5b08] hover:bg-[#fff7f2]">
                    <FileText size={16} strokeWidth={1.8} className="absolute left-3.5 text-[#4b5563] pointer-events-none transition-colors group-hover:text-[#fd5b08]" />
                    <span className="px-2 py-0.5 rounded border border-[#c9d1dc] bg-[#e9edf2] text-[12px] text-[#041e42] font-medium shrink-0 transition-colors group-hover:bg-white">{f.resume.button}</span>
                    <motion.span
                      key={fileName || 'empty'}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`ml-2.5 text-[13px] truncate ${fileName ? 'text-[#041e42] font-medium' : 'text-[#4b5563]'}`}
                    >
                      {fileName || f.resume.empty}
                    </motion.span>
                  </label>
                  <input id="apply-resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')} />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label htmlFor="apply-cover" className={labelCls}>{f.coverLetter.label}</label>
                  <div className="group relative">
                    <FileText size={16} strokeWidth={1.8} className="absolute left-3.5 top-[11px] text-[#4b5563] pointer-events-none transition-colors group-focus-within:text-[#fd5b08]" />
                    <textarea id="apply-cover" name="coverLetter" rows={2} placeholder={f.coverLetter.placeholder} className="w-full min-h-[64px] pl-10 pr-3 py-2.5 rounded-lg border border-[#dde3ec] bg-white text-[13px] text-[#041e42] placeholder:text-[#8a94a6] outline-none transition-all focus:border-[#fd5b08] focus:ring-2 focus:ring-[#fd5b08]/15 resize-y"></textarea>
                  </div>
                </motion.div>

                <motion.button
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="group relative overflow-hidden w-full h-[44px] bg-[#fd5b08] hover:bg-[#e54f00] text-white font-semibold text-[14px] rounded-lg flex items-center justify-center gap-2 shadow-[0_8px_20px_-8px_rgba(253,91,8,0.7)] transition-colors"
                >
                  {/* shine sweep on hover */}
                  <span aria-hidden className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/25 translate-x-0 transition-transform duration-700 ease-out group-hover:translate-x-[450%]" />
                  <span className="relative">{d.form.submit}</span>
                  <ArrowRight size={17} strokeWidth={2.2} className="relative transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.p variants={fadeUp} className="text-[12px] text-[#4b5563] leading-snug">
                  {d.form.disclaimer}{' '}
                  {d.form.privacy && (
                    <Link href={d.form.privacy.href} className="text-[#1e3a8a] font-medium hover:text-[#fd5b08] transition-colors">{d.form.privacy.text}</Link>
                  )}.
                </motion.p>
              </motion.form>
            </div>

            {/* Job Information */}
            <motion.div variants={fadeUp} {...inView} className={cardCls}>
              <CardTitle size="text-[18px]">{d.info.title}</CardTitle>
              
              <motion.div className="space-y-2.5" variants={stagger(0.07, 0.1)} {...inView}>
                {infoRows.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    variants={listItem}
                    className={`group flex items-center justify-between ${i < infoRows.length - 1 ? 'border-b border-gray-100 pb-2.5' : ''}`}
                  >
                    <div className="flex items-center gap-3 text-[#041e42] font-bold text-[14px]">
                      <Icon size={18} className="text-gray-400 transition-colors group-hover:text-[#fd5b08]" /> {label}
                    </div>
                    <span className="text-[#6b7280] text-[14px]">{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            </motion.div>
          </aside>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}
