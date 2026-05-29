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

export type Project = {
  title: string;
  description: string;
  relevance: string;
  stack: string[];
  features: string[];
  tags: ProjectCategory[];
  status: string;
  accent: string;
  demoUrl: string;
  githubUrl: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};
