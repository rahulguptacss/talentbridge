import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import About from '@/components/sections/About';
import MissionVision from '@/components/sections/MissionVision';
import Process from '@/components/sections/Process';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.about.meta?.title || 'About Us - TalentBridge',
  description: pages.about.meta?.description || '',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="About" title2="us" breadcrumb="About Us" />
      <About />
      <MissionVision />
      <Process />
      <WhyChooseUs />
    </main>
  );
}
