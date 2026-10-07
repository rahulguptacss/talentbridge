import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
}

export interface TopbarData {
  contact_info: { icon: string; value: string }[];
  socials: { icon: string; href: string }[];
}

export interface HeaderData {
  logo_text: string;
  logo_image: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_text: string;
  logo_image: string;
  description: string;
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: { address: string; phone: string; email: string };
  copyright: string;
}

export interface HeroSectionData {
  subtitle: string;
  title_line1: string;
  title_line2: string;
  title_highlight: string;
  features: { icon: string; text: string }[];
  button: { text: string; href: string };
  image: string;
}

export interface FeaturesSectionData {
  items: { icon: string; title: string; description: string }[];
}

export interface AboutSectionData {
  subtitle: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
  button: { text: string; href: string };
}

export interface ServiceItem {
  icon: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  hero: {
    tag: string;
    title1: string;
    title2: string;
    tagline: string[];
  };
  content: { title: string; text: string }[];
  link: string;
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  items: ServiceItem[];
}

export interface ProcessSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  steps: { number: string; title: string; description: string; icon: string }[];
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  button: { text: string; href: string };
  reviews: { text: string; author: string; role: string; avatar: string; rating: number }[];
}

export interface StatsSectionData {
  items: { value: string; label: string }[];
}

export interface BlogSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  posts: { image: string; date: string; author: string; title: string; description: string; link: string }[];
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.HR.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
// Force HMR
