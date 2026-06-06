import type { LucideIcon } from 'lucide-react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface Stat {
  /** Numeric value used to drive the count-up animation. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  /** Short title fragments rendered as a separated subtitle line. */
  titleParts: string[];
  headline: string;
  location: string;
  summary: string;
  resumeUrl: string;
  resumeFileName: string;
  contact: ContactDetail[];
  socials: SocialLink[];
  stats: Stat[];
  languages: Language[];
  achievements: string[];
  nav: NavLink[];
}

export const profile: Profile = {
  name: 'Ishant Behl',
  title:
    'Associate Director · Consulting Partnerships · Qualitative & Quantitative Research Leader',
  titleParts: [
    'Associate Director',
    'Consulting Partnerships',
    'Research Leader',
  ],
  headline:
    'I help global strategy and advisory firms turn complex client questions into decision-ready insight — owning the P&L, the relationships, and the multi-market research that drives growth.',
  location: 'Delhi, India',
  summary:
    'Ishant Behl is a client success and account management professional with over 7+ years of experience driving client satisfaction, retention, and revenue growth across global consulting, corporate, and investment clients. Known for his strategic thinking and client-centric approach, he has built a strong track record of managing high-value portfolios, leading cross-functional delivery teams, and executing data-driven strategies that enhance long-term client value. As an Associate Director, he focuses on defining and executing strategic growth plans, strengthening service lines, and supporting market expansion across both quantitative and qualitative research methodologies — consistently translating complex client requirements into scalable execution and delivery models while mentoring teams toward a high-performance culture.',
  resumeUrl: '/Ishant-Behl-Resume.pdf',
  resumeFileName: 'Ishant-Behl-Resume.pdf',
  contact: [
    {
      icon: Mail,
      label: 'Email',
      value: 'ishantbehl1997@gmail.com',
      href: 'mailto:ishantbehl1997@gmail.com',
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 70113 54309',
      href: 'tel:+917011354309',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/ishant-behl',
      href: 'https://www.linkedin.com/in/ishant-behl',
      external: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: 'https://www.google.com/maps/place/Delhi',
      external: true,
    },
  ],
  socials: [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ishant-behl',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ishantbehl1997@gmail.com',
    },
  ],
  stats: [
    { value: 7, suffix: '+', label: 'Years of Experience' },
    { value: 3, prefix: '$', suffix: 'M+', label: 'Annual Revenue Impact' },
    { value: 6, suffix: '+', label: 'Team Members Led' },
    { value: 30, suffix: '+', label: 'Global Markets Served' },
  ],
  languages: [
    { name: 'English', proficiency: 'Full Professional' },
    { name: 'Hindi', proficiency: 'Native' },
    { name: 'French', proficiency: 'Limited Working' },
  ],
  achievements: [
    'Exceeded revenue targets by up to 180% through strategic account execution.',
    'Achieved 3x revenue targets, earning "Best Performer of the Month".',
    'Owned end-to-end delivery of client engagements valued at $2M+ annually for McKinsey, Bain & Company, and BCG.',
    'Reduced project turnaround time by 25% by optimising project-management workflows.',
    'Expanded the expert network by 30% across APAC, MENA, and the US.',
    'Increased expert–client match success by 40% through structured in-depth interviews.',
    'Streamlined engagement across a 70,000+ expert database.',
    'Earned a perfect NPS 10 score and "Best Performer of the Quarter" at Concentrix.',
  ],
  nav: [
    { label: 'Summary', href: '#summary' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
};
