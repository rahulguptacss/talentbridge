"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { common } from '../../types';

export default function Header() {
  const { logo_text, logo_image, links, button_text, button_link } = common.Header;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="bg-white border-b-2 border-[#1e3a8a] sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-0 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center">
            <img src={logo_image} alt={logo_text} className="h-16 md:h-24 w-auto object-contain" />
          </Link>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-6 lg:gap-8 items-center"
        >
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className={`font-bold text-sm lg:text-[15px] transition-colors ${isActive(link.href) ? 'text-[#fd5b08]' : 'text-[#1e3a8a] hover:text-[#fd5b08]'}`}
            >
              {link.name}
            </Link>
          ))}
        </motion.nav>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <a 
            href={button_link}
            className="group bg-[#fd5b08] text-white pl-4 md:pl-6 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full font-semibold text-[13px] md:text-[15px] flex items-center gap-2.5 md:gap-4 whitespace-nowrap hover:bg-[#e85004] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
          >
            <span>{button_text}</span>
            <span className="w-7 h-7 md:w-9 md:h-9 bg-black/15 text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={15} strokeWidth={2.5} />
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1e3a8a] focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-bold text-lg py-2 ${isActive(link.href) ? 'text-[#fd5b08]' : 'text-[#1e3a8a]'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
