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
import type { NavItem, Project, ProjectCategory, Service, SkillCategory } from '../types';

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

export const projects: Project[] = [
  {
    title: 'SmartPredict',
    description:
      'A questionnaire-led estimator for smartphone addiction risk, built around clear inputs, analysis output, and useful recommendations.',
    relevance: 'Shows full stack product thinking: data capture, analysis flow, dashboard UI, and user guidance.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    features: ['Questionnaire system', 'Addiction analysis', 'Recommendation engine', 'Responsive dashboard'],
    tags: ['All', 'React', 'Full Stack'],
    status: 'Flagship full stack',
    accent: '#3ee7d3',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/MRI-100',
  },
  {
    title: 'Weather App',
    description:
      'A clean forecasting interface with search, live weather data, condition cards, and responsive forecast views.',
    relevance: 'Highlights API integration, UI states, TypeScript usage, and mobile-friendly data presentation.',
    stack: ['React', 'TypeScript', 'Weather API', 'Tailwind'],
    features: ['API integration', 'Search flow', 'Weather cards', 'Forecast display'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'API product',
    accent: '#5b8cff',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/MRI-100',
  },
  {
    title: 'Restaurant App',
    description:
      'A business-focused restaurant experience with menu discovery, food showcase, delivery messaging, and order-first sections.',
    relevance: 'Demonstrates local business UX, conversion-minded layout, and responsive service presentation.',
    stack: ['React', 'Tailwind', 'Responsive UI', 'Business UX'],
    features: ['Menu system', 'Delivery section', 'Order flow', 'Business-focused UI'],
    tags: ['All', 'React', 'Business'],
    status: 'Business ready',
    accent: '#ff7a70',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/MRI-100',
  },
  {
    title: 'UrbanCode',
    description:
      'A branded web presence concept for a modern digital service, built to feel credible, deployable, and client-ready.',
    relevance: 'Strong signal for freelance work: brand positioning, landing page hierarchy, and deployment-ready thinking.',
    stack: ['React', 'Tailwind', 'Brand UI', 'SEO'],
    features: ['Premium landing page', 'Service sections', 'CTA strategy', 'Responsive brand system'],
    tags: ['All', 'React', 'Business', 'UI/UX'],
    status: 'Brand + business',
    accent: '#38bdf8',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/MRI-100',
  },
  {
    title: 'Expense Tracker',
    description:
      'A personal finance interface for tracking expenses, scanning spending patterns, and keeping everyday data simple.',
    relevance: 'Shows practical app structure, state-driven UI, forms, summaries, and dashboard-style presentation.',
    stack: ['React', 'TypeScript', 'Local State', 'Dashboard UI'],
    features: ['Expense entries', 'Category summary', 'Dashboard cards', 'Clean empty states'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'Practical app',
    accent: '#b9f56f',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/MRI-100',
  },
  {
    title: 'Portfolio Website',
    description:
      'A premium personal portfolio focused on motion, responsive execution, contact flow, SEO, and recruiter-friendly proof of work.',
    relevance: 'Represents frontend polish: animation discipline, visual hierarchy, accessibility, and reusable components.',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    features: ['Modern animations', 'SEO optimization', 'Contact form', 'Reusable components'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'Personal brand',
    accent: '#a78bfa',
    demoUrl: '#home',
    githubUrl: 'https://github.com/MRI-100',
  },
];

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
