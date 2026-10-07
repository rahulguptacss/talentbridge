import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';
import Blog from '@/components/sections/Blog';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Services limit={4} />
      <Process />
      <Testimonials />
      <Stats />
      <Blog limit={2} />
    </main>
  );
}
