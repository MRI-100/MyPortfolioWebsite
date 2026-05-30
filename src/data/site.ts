import {
  AppWindow,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  Globe2,
  LayoutDashboard,
  MonitorSmartphone,
  PanelsTopLeft,
  Rocket,
  Server,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import type { NavItem, ProjectCategory, Service, SkillCategory } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '8+', label: 'Projects built' },
  { value: '18+', label: 'Technologies used' },
  { value: '100%', label: 'Mobile-first focus' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces that feel fast, polished, and easy to use across devices.',
    skills: [
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'JavaScript', level: 86 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs, data flow, authentication patterns, and production-minded structure.',
    skills: [
      { name: 'Node.js', level: 76 },
      { name: 'Express.js', level: 74 },
      { name: 'REST APIs', level: 80 },
      { name: 'Auth Systems', level: 72 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Practical persistence for dashboards, apps, and client-focused products.',
    skills: [
      { name: 'MongoDB', level: 76 },
      { name: 'Firebase', level: 72 },
      { name: 'Data Analytics', level: 62 },
      { name: 'Cloud Fundamentals', level: 64 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools + AI',
    description: 'Modern delivery workflow with source control, debugging, APIs, and AI support.',
    skills: [
      { name: 'Git & GitHub', level: 84 },
      { name: 'VS Code', level: 88 },
      { name: 'Postman', level: 76 },
      { name: 'AI-assisted Development', level: 86 },
    ],
  },
];

export const skillIcons = [
  { label: 'React', icon: Code2 },
  { label: 'TypeScript', icon: PanelsTopLeft },
  { label: 'Node.js', icon: Server },
  { label: 'MongoDB', icon: Database },
  { label: 'GitHub', icon: GitBranch },
  { label: 'AI Tools', icon: Bot },
];

export const projectFilters: ProjectCategory[] = ['All', 'React', 'Full Stack', 'UI/UX', 'Business'];

export const services: Service[] = [
  {
    title: 'Business Websites',
    description: 'Professional websites that help local businesses explain, sell, and earn trust online.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Portfolio Websites',
    description: 'Personal brands for founders, creators, students, and professionals who need stronger visibility.',
    icon: MonitorSmartphone,
  },
  {
    title: 'React Frontends',
    description: 'Responsive frontends with reusable components, polished interactions, and clean TypeScript.',
    icon: AppWindow,
  },
  {
    title: 'Full Stack Apps',
    description: 'React, Node, Express, APIs, MongoDB, authentication flows, and scalable app foundations.',
    icon: Server,
  },
  {
    title: 'Dashboard UI',
    description: 'Operational dashboards for SaaS ideas, admin tools, analytics views, and internal products.',
    icon: LayoutDashboard,
  },
  {
    title: 'Website Redesign',
    description: 'Sharper layouts, clearer copy, better performance, and modern UX for outdated websites.',
    icon: WandSparkles,
  },
  {
    title: 'API Integration',
    description: 'Weather APIs, business data, Firebase, REST services, and smooth frontend data experiences.',
    icon: Globe2,
  },
  {
    title: 'AI-integrated Apps',
    description: 'Smart interfaces, AI-assisted workflows, automation concepts, and startup-ready prototypes.',
    icon: Sparkles,
  },
  {
    title: 'Landing Pages',
    description: 'Launch pages with strong hierarchy, clear calls to action, and conversion-focused structure.',
    icon: Rocket,
  },
];

export const journey = [
  {
    year: 'Now',
    title: 'Building deployable portfolio products',
    copy: 'React, TypeScript, dashboards, APIs, business websites, and polished responsive interfaces.',
  },
  {
    year: '2025',
    title: 'Strengthening full stack fundamentals',
    copy: 'Node, Express, MongoDB, REST APIs, auth patterns, and practical product architecture.',
  },
  {
    year: 'Foundation',
    title: 'Web and software foundations',
    copy: 'JavaScript, HTML, CSS, cloud basics, data analytics fundamentals, and basic Servlet/JSP.',
  },
];
