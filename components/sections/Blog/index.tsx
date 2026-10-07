'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { sections } from '../../types';
import { motion } from 'framer-motion';

interface BlogProps {
  /** Max posts to show (home uses 2). Omit to show all. */
  limit?: number;
  /** Show the "View All Blogs" button (hidden on the /blog page). */
  showButton?: boolean;
  /** "home" = white section, "page" = light background like the blog listing page. */
  variant?: 'home' | 'page';
  /** Posts per page. When set, pagination is shown. */
  perPage?: number;
}

export default function Blog({ limit, showButton = true, variant = 'home', perPage }: BlogProps = {}) {
  const { subtitle, title_line1, title_highlight, description, button, posts: allPosts } = sections.blog;
  const listed = limit ? allPosts.slice(0, limit) : allPosts;
  const isPage = variant === 'page';

  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = perPage ? Math.max(1, Math.ceil(listed.length / perPage)) : 1;
  const posts = perPage ? listed.slice((currentPage - 1) * perPage, currentPage * perPage) : listed;

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    const top = (sectionRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 110;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${isPage ? 'py-10 md:py-14 bg-[#f7f9fc]' : 'pt-12 pb-6 bg-white'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header matching Services/Process */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-[10px] flex items-center justify-center gap-[13px]">
            <span className="h-[2px] w-[38px] bg-[#fd5b08]" />
            <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#041e42]">
              {subtitle}
            </span>
            <span className="h-[2px] w-[38px] bg-[#fd5b08]" />
          </div>
          <h2 className="mb-[16px] text-[34px] font-black leading-[1.1] text-[#041e42] md:text-[46px] tracking-tight">
            {title_line1} <span className="text-[#fd5b08]">{title_highlight}</span>
          </h2>
          <p className="mx-auto max-w-4xl text-[15px] sm:text-[16px] leading-[1.6] text-[#5e6a7c] font-medium">
            {description}
          </p>
        </motion.div>
        
        {/* Blog Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isPage ? 'gap-6 lg:gap-8 xl:gap-10' : 'gap-8 lg:gap-10 xl:gap-14 mb-8'}`}>
          {posts.map((post, index) => (
            <motion.div 
              key={post.link + '-' + currentPage} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="relative flex flex-col sm:flex-row sm:items-center sm:justify-end w-full sm:min-h-[300px] lg:min-h-[320px] group"
            >
              {/* Left Side: Image */}
              <div className="relative sm:absolute sm:left-0 sm:top-0 sm:bottom-0 w-full sm:w-[65%] h-[240px] sm:h-auto rounded-[15px] overflow-hidden z-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Right Side: Floating Text Card */}
              <div className="relative w-[90%] sm:w-[70%] lg:w-[65%] mx-auto sm:mx-0 -mt-16 sm:mt-0 bg-white rounded-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_15px_50px_rgba(253,91,8,0.12)] group-hover:-translate-y-2 transition-all duration-500 p-5 lg:p-6 z-10">
                <div className="flex flex-wrap gap-3 mb-3 text-[12px] font-semibold text-[#5e6a7c]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} strokeWidth={2.5} className="text-[#fd5b08]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1.5px] before:bg-gray-300">
                    <User size={14} strokeWidth={2.5} className="text-[#fd5b08]" />
                    <span>By {post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-[17px] lg:text-[18px] font-bold text-[#041e42] mb-2.5 leading-[1.35] group-hover:text-[#fd5b08] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[13px] lg:text-[14px] text-[#5e6a7c] mb-4 leading-[1.6]">
                  {post.description}
                </p>
                
                <div className="w-full h-[1px] bg-[#fd5b08]/20 mb-4"></div>
                
                <Link href={post.link} className="text-[#fd5b08] font-bold text-[13px] flex items-center gap-1.5 group/link w-fit">
                  Learn More <ArrowRight size={15} strokeWidth={3} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination (same design as Jobs) */}
        {perPage && totalPages > 1 && (
          <nav aria-label="Blog pagination" className="flex justify-center items-center gap-2 mt-10">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white transition-all border-2 border-transparent ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:border-[#041e42] hover:text-[#041e42]'}`}
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                type="button"
                key={page}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${
                  currentPage === page
                    ? 'bg-[#fd5b08] text-white shadow-md border-2 border-[#fd5b08]'
                    : 'bg-white text-gray-600 border-2 border-transparent hover:border-[#041e42] hover:text-[#041e42]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              aria-label="Next page"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white transition-all border-2 border-transparent ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:border-[#041e42] hover:text-[#041e42]'}`}
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </nav>
        )}
        
        {/* Bottom Button */}
        {showButton && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center pb-6"
        >
          <Link href={button.href} className="inline-flex items-center gap-2.5 bg-[#fd5b08] text-white pl-6 pr-2 py-2 rounded-[8px] font-bold hover:bg-[#e04f05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(253,91,8,0.3)] shadow-sm">
            <span className="text-[14px]">{button.text}</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#fd5b08]">
              <ArrowRight size={18} strokeWidth={2.5} />
            </div>
          </Link>
        </motion.div>
        )}
        
      </div>
    </section>
  );
}
