"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { sections } from '../../types';

export default function Jobs() {
  const { subtitle, title_line1, title_highlight, description, list } = (sections as any).jobs;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(list.length / itemsPerPage);
  
  const currentItems = list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-12 bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px] relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-[40px] h-[1.5px] bg-[#041e42]"></div>
            <span className="text-[#041e42] font-bold uppercase tracking-[0.2em] text-[13px]">{subtitle}</span>
            <div className="w-[40px] h-[1.5px] bg-[#041e42]"></div>
          </div>
          
          <h2 className="text-[34px] md:text-[44px] font-black text-[#041e42] leading-[1.1] mb-4 tracking-tight">
            {title_line1} <span className="text-[#fd5b08]">{title_highlight}</span>
          </h2>
          
          <p className="text-[#5e6a7c] max-w-2xl mx-auto text-[16px] md:text-[17px] leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 min-h-[400px] content-start">
          {currentItems.map((job: any, index: number) => (
            <motion.div 
              key={index + "-" + currentPage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-[16px] p-4 flex gap-3 sm:gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="w-[90px] sm:w-[110px] rounded-[10px] overflow-hidden flex-shrink-0 bg-gray-100 flex items-stretch">
                <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow py-0.5">
                <div className="flex justify-between items-start mb-1.5">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#041e42] leading-tight pr-2">
                    {job.title}
                  </h3>
                  <span className="text-[#fd5b08] bg-[#fff0e6] text-[10px] font-semibold px-2 py-0.5 rounded flex-shrink-0">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-[#6b7280] text-[12px] sm:text-[13px] leading-[1.5] line-clamp-2 mb-3 flex-grow">
                  {job.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-[12px] text-[#6b7280] font-medium mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#74829a]" strokeWidth={2.5} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={13} className="text-[#74829a]" strokeWidth={2.5} />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={13} className="text-[#74829a]" strokeWidth={2.5} />
                    {job.experience}
                  </div>
                </div>
                
                {/* Button */}
                <div>
                  <Link href={`/jobs/${job.slug}`} className="bg-[#fd5b08] hover:bg-[#e04a00] text-white text-[12px] sm:text-[13px] font-bold px-4 py-1.5 rounded-[6px] inline-flex items-center gap-1.5 transition-colors">
                    View Detail <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button 
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white transition-all border-2 border-transparent ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:border-[#041e42] hover:text-[#041e42]'}`}
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button 
              key={page}
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
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white transition-all border-2 border-transparent ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:border-[#041e42] hover:text-[#041e42]'}`}
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
