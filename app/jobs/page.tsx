import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Jobs from '@/components/sections/Jobs';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.jobs.meta?.title || 'Jobs - TalentBridge',
  description: pages.jobs.meta?.description || '',
};

export default function JobsPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb title1="Open" title2="Positions" breadcrumb="Jobs" />
      <Jobs />
    </main>
  );
}
