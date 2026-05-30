import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Array<{ name: string; level: number }>;
};

export type ProjectCategory = 'All' | 'React' | 'Full Stack' | 'UI/UX' | 'Business';

export type ProjectScreenshot = {
  url: string;
  path?: string;
  type?: 'desktop' | 'mobile' | 'other';
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  focus: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  status: string;
  category: string;
  screenshots: ProjectScreenshot[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};
