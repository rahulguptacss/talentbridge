"use client";

import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  title1: string;
  title2: string;
  breadcrumb: string;
  /** Optional intermediate links, e.g. [{ label: "Our Blogs", href: "/blog" }] */
  parents?: { label: string; href: string }[];
}

export default function Breadcrumb({ title1, title2, breadcrumb, parents = [] }: BreadcrumbProps) {
  return (
    <section className="bg-[#041e42] py-28 text-center relative z-10 flex flex-col justify-center min-h-[300px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white mb-4 tracking-tight">
          {title1} <span className="text-[#fd5b08]">{title2}</span>
        </h1>
        <div className="text-[13px] text-white font-bold flex items-center justify-center gap-2 tracking-wide uppercase">
          <Link href="/" className="hover:text-[#fd5b08] transition-colors">Home</Link>
          {parents.map((p) => (
            <React.Fragment key={p.href}>
              <span className="text-gray-400 mx-1">/</span>
              <Link href={p.href} className="hover:text-[#fd5b08] transition-colors">{p.label}</Link>
            </React.Fragment>
          ))}
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-[#fd5b08]">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
