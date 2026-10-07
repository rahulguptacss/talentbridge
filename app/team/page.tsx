import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Team from '@/components/sections/Team';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.team.meta?.title || 'Our Team - TalentBridge',
  description: pages.team.meta?.description || '',
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb title1="Our" title2="Experts" breadcrumb="Our Team" />
      <Team />
    </main>
  );
}
