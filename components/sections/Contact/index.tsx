"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig, type Variants } from 'framer-motion';
import {
  User, Phone, Mail, MessageSquare, ArrowRight, MapPin, MessageCircle,
  Clock, Headset, FileText, CheckCircle2, type LucideIcon,
} from 'lucide-react';
import { sections } from '../../types';

interface InfoItem { icon: string; title: string; text: string; href: string; wide?: boolean }
interface CardItem { icon: string; title: string; text?: string; lines?: string[]; link?: { text: string; href: string } }

const icons: Record<string, LucideIcon> = { Mail, Phone, MapPin, MessageCircle, Clock, Headset, FileText };

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const inputBase =
  'w-full bg-white border border-[#e3e8ef] rounded-[10px] text-[14px] text-[#041e42] placeholder:text-[#8a94a6] outline-none transition-[border-color,box-shadow] focus:border-[#fd5b08] focus:shadow-[0_0_0_3px_rgba(253,91,8,0.12)]';

function Field({
  id, name, type = 'text', placeholder, icon: Icon, autoComplete, onInput
}: { id: string; name: string; type?: string; placeholder: string; icon: LucideIcon; autoComplete?: string; onInput?: (e: React.FormEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        onInput={onInput}
        className={`${inputBase} h-[46px] pl-11 pr-4`}
      />
    </div>
  );
}

export default function Contact() {
  const { subtitle, title_line1, title_highlight, description, form, map, info, cards } = (sections as any).contact;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="bg-white rounded-[16px] border border-[#eef1f5] shadow-[0_10px_35px_rgba(4,30,66,0.07)] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-[30px] h-[2px] bg-[#fd5b08]" />
                <span className="text-[#041e42] font-bold text-[12px] uppercase tracking-[1.5px]">{form.label}</span>
              </div>
              <h3 className="text-[26px] md:text-[32px] font-black leading-[1.2] text-[#041e42] mb-4">
                {form.title_line1}
                <br />
                <span className="text-[#fd5b08]">{form.title_highlight}</span>
              </h3>
              <p className="text-[#5e6a7c] text-[14px] leading-relaxed pb-6 mb-6 border-b border-[#e8ecf2]">
                {form.text}
              </p>

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field id="contact-first-name" name="firstName" placeholder={form.fields.firstName} icon={User} autoComplete="given-name" />
                  <Field id="contact-last-name" name="lastName" placeholder={form.fields.lastName} icon={User} autoComplete="family-name" />
                  <Field 
                    id="contact-phone" 
                    name="phone" 
                    type="tel" 
                    placeholder={form.fields.phone} 
                    icon={Phone} 
                    autoComplete="tel" 
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+]/g, '');
                    }}
                  />
                  <Field id="contact-email" name="email" type="email" placeholder={form.fields.email} icon={Mail} autoComplete="email" />
                </div>
                <div className="relative">
                  <label htmlFor="contact-message" className="sr-only">{form.fields.message}</label>
                  <MessageSquare size={16} className="absolute left-4 top-[15px] text-[#6b7280] pointer-events-none" />
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder={form.fields.message}
                    className={`${inputBase} pl-11 pr-4 py-3 resize-y min-h-[110px]`}
                  />
                </div>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      role="status"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 text-[14px] text-[#0f8a4b] bg-[#ecfaf2] rounded-[10px] px-4 py-3"
                    >
                      <CheckCircle2 size={18} className="shrink-0" /> {form.success}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div>
                  <button
                    id="contact-submit"
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-[#fd5b08] hover:bg-[#e04f05] text-white text-[14px] font-bold pl-6 pr-2 py-2 rounded-[10px] transition-colors cursor-pointer"
                  >
                    {form.button}
                    <span className="w-8 h-8 rounded-full bg-white text-[#fd5b08] flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Map + info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-[16px] overflow-hidden border border-[#eef1f5] shadow-[0_10px_35px_rgba(4,30,66,0.07)] h-[280px] lg:flex-1 lg:min-h-[280px]">
                <iframe
                  title={map.title}
                  src={map.src}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(info as InfoItem[]).map((item) => {
                  const Icon = icons[item.icon] ?? Mail;
                  const external = item.href.startsWith('http');
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`group flex items-center gap-4 bg-white rounded-[14px] border border-[#eef1f5] shadow-[0_6px_20px_rgba(4,30,66,0.05)] px-5 py-4 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#fd5b08]/30 hover:shadow-[0_12px_30px_rgba(4,30,66,0.1)] ${item.wide ? 'sm:col-span-2' : ''}`}
                    >
                      <span className="shrink-0 w-12 h-12 rounded-full bg-[#fff0e6] text-[#fd5b08] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#fd5b08] group-hover:text-white">
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[#041e42] text-[15px] font-bold">{item.title}</span>
                        <span className="block text-[#5e6a7c] text-[13px] break-words">{item.text}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
          >
            {(cards as CardItem[]).map((card) => {
              const Icon = icons[card.icon] ?? MessageCircle;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group flex gap-4 bg-white rounded-[14px] border border-[#eef1f5] shadow-[0_6px_20px_rgba(4,30,66,0.05)] hover:shadow-[0_15px_35px_rgba(4,30,66,0.1)] hover:border-[#fd5b08]/30 transition-[box-shadow,border-color] p-5"
                >
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#fff0e6] text-[#fd5b08] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#fd5b08] group-hover:text-white">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[#041e42] text-[15px] font-bold mb-1">{card.title}</h3>
                    {card.text && <p className="text-[#5e6a7c] text-[13px] leading-relaxed mb-2">{card.text}</p>}
                    {card.lines?.map((line) => (
                      <p key={line} className="text-[#5e6a7c] text-[13px] leading-relaxed">{line}</p>
                    ))}
                    {card.link && (
                      <Link
                        href={card.link.href}
                        className="inline-flex items-center gap-1.5 text-[#fd5b08] text-[13px] font-bold"
                      >
                        {card.link.text}
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
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
