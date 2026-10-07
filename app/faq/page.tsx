import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Faq from '@/components/sections/Faq';
import Support from '@/components/sections/Support';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.faq.meta?.title || 'FAQ - TalentBridge',
  description: pages.faq.meta?.description || '',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Help &" title2="Support" breadcrumb="FAQ" />
      <Faq />
      <Support />
    </main>
  );
}
