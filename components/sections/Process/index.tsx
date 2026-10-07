'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSearch,
  Users,
  Video,
  Handshake,
} from 'lucide-react';

import { sections } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  FileSearch,
  Users,
  Video,
  Handshake,
};

export default function Process() {
  const {
    subtitle,
    title_line1,
    title_highlight,
    description,
    steps,
  } = sections.process;

  const renderIcon = (name: string) => {
    const Icon = iconMap[name] || FileSearch;

    return (
      <Icon
        className="h-[42px] w-[42px] text-[#041e42]"
        strokeWidth={1.55}
      />
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-[40px] sm:py-[50px] lg:py-[60px]">
      <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10">
        {(subtitle || title_line1 || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-[55px] text-center"
          >
            {subtitle && (
              <div className="mb-[10px] flex items-center justify-center gap-[13px]">
                <span className="h-[2px] w-[38px] bg-[#fd5b08]" />
                <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#041e42]">
                  {subtitle}
                </span>
                <span className="h-[2px] w-[38px] bg-[#fd5b08]" />
              </div>
            )}

            {title_line1 && (
              <h2 className="mb-[10px] text-[34px] font-black leading-[1.12] tracking-[-1px] text-[#041e42] sm:text-[42px] lg:text-[46px]">
                {title_line1}
                {title_highlight && (
                  <>
                    {' '}
                    <span className="text-[#fd5b08]">
                      {title_highlight}
                    </span>
                  </>
                )}
              </h2>
            )}

            {description && (
              <p className="mx-auto max-w-[680px] text-[14px] leading-[1.6] text-[#5e6a7c] sm:text-[15px]">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block relative mx-auto max-w-[1290px]">
          <div className="absolute bottom-[25px] left-1/2 top-[10px] hidden w-[2px] -translate-x-1/2 bg-[#dce3ee] lg:block" />

          <div className="absolute left-1/2 top-0 z-20 hidden h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-[#fd5b08] lg:block" />

          <div className="relative space-y-[28px] sm:space-y-[35px] lg:space-y-[35px]">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="relative grid grid-cols-1 items-center gap-[20px] lg:grid-cols-[1fr_110px_1fr] lg:gap-0"
                >
                  {index > 0 && (
                    <span className="absolute left-1/2 top-[-25px] z-30 hidden h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-[#fd5b08] lg:block" />
                  )}

                  <div className={`flex w-full items-center justify-center lg:min-h-[145px] lg:justify-end ${isLeft ? 'order-3 lg:order-none' : 'order-2 lg:order-none'}`}>
                    {isLeft ? (
                      <ProcessCard title={step.title} description={step.description} side="left" />
                    ) : (
                      <ProcessIcon icon={renderIcon(step.icon)} side="left" />
                    )}
                  </div>

                  <div className="order-first relative z-40 flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center self-center justify-self-center rounded-full bg-white shadow-[0_5px_20px_rgba(20,45,80,0.10)] lg:order-none lg:h-[62px] lg:w-[62px]">
                    <span className="text-[19px] font-black tracking-[-0.5px] text-[#041e42] lg:text-[21px]">
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>

                  <div className={`flex w-full items-center justify-center lg:min-h-[145px] lg:justify-start ${isLeft ? 'order-2 lg:order-none' : 'order-3 lg:order-none'}`}>
                    {isLeft ? (
                      <ProcessIcon icon={renderIcon(step.icon)} side="right" />
                    ) : (
                      <ProcessCard title={step.title} description={step.description} side="right" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="block lg:hidden relative w-full mt-10 pt-4 pl-2">
          {/* Vertical Line for Mobile */}
          <div className="absolute top-0 left-[26px] sm:left-[30px] h-full w-[1px] bg-gray-200 z-0"></div>
          {/* Top Orange Dot */}
          <div className="absolute top-0 left-[26px] sm:left-[30px] w-[8px] h-[8px] bg-[#fd5b08] rounded-full z-10 -ml-[3px] -mt-[4px]"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center gap-4 sm:gap-5 w-full"
              >
                {/* Orange Dot Between Steps */}
                {index > 0 && (
                  <div className="absolute top-[-20px] left-[26px] sm:left-[30px] w-[8px] h-[8px] bg-[#fd5b08] rounded-full z-20 -ml-[3px]"></div>
                )}
                
                {/* Number Circle */}
                <div className="relative z-20 flex h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.06)]">
                  {/* Faint Horizontal connecting line */}
                  <div className="absolute top-1/2 left-[100%] w-[16px] sm:w-[20px] h-[1px] bg-gray-200 -z-10"></div>
                  <span className="text-[17px] sm:text-[19px] font-black text-[#041e42]">
                    {String(step.number).padStart(2, '0')}
                  </span>
                </div>

                {/* Combined Card */}
                <motion.div 
                  whileHover={{ y: -3, boxShadow: "0 5px 15px -5px rgba(0,0,0,0.1)" }}
                  className="flex-1 bg-[#f3f6fb] rounded-[15px] p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4 shadow-sm"
                >
                  <div className="mt-1 flex-shrink-0 opacity-90 scale-90 sm:scale-100 transform origin-top-left">
                     {renderIcon(step.icon)}
                  </div>
                  <div>
                    <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#041e42] leading-[1.2] mb-1.5">{step.title}</h3>
                    <p className="text-[13px] sm:text-[14px] text-[#5e6a7c] leading-[1.5]">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  title,
  description,
  side,
}: {
  title: string;
  description: string;
  side: 'left' | 'right';
}) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
      className={`relative w-full rounded-[15px] bg-[#f3f6fb] px-[25px] py-[22px] sm:px-[30px] sm:py-[25px] lg:min-h-[128px] lg:w-[calc(100%-45px)] xl:w-[calc(100%-55px)] ${
        side === 'left' ? 'lg:mr-0 lg:pr-[40px]' : 'lg:ml-0 lg:pl-[35px]'
      }`}
    >
      <h3 className="mb-[8px] text-[19px] font-extrabold leading-[1.2] tracking-[-0.4px] text-[#041e42] sm:text-[21px]">
        {title}
      </h3>
      <p className="max-w-[560px] text-[14px] leading-[1.55] text-[#5e6a7c] sm:text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}

function ProcessIcon({
  icon,
  side,
}: {
  icon: React.ReactNode;
  side: 'left' | 'right';
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative z-20 flex h-[88px] w-[88px] flex-shrink-0 items-center justify-center rounded-[15px] bg-[#f0f4fc] sm:h-[96px] sm:w-[96px] lg:h-[102px] lg:w-[102px] ${
        side === 'left' ? 'lg:mr-[0px]' : 'lg:ml-[0px]'
      }`}
    >
      {icon}
    </motion.div>
  );
}