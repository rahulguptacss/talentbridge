import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Blog from '@/components/sections/Blog';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.blog.meta?.title || 'Blog - TalentBridge',
  description: pages.blog.meta?.description || '',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Our" title2="Blog" breadcrumb="Blog" />
      <Blog />
    </main>
  );
}
