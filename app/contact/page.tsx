import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Contact from '@/components/sections/Contact';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.contact.meta?.title || 'Contact Us - TalentBridge',
  description: pages.contact.meta?.description || '',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Contact" title2="Us" breadcrumb="Contact Us" />
      <Contact />
    </main>
  );
}
