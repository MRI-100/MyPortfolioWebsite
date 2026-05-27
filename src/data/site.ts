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
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '8+', label: 'Projects built' },
  { value: '18+', label: 'Technologies used' },
  { value: '100%', label: 'Responsive focus' },
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
      'A socio-demographic smartphone addiction estimator with questionnaire flow, analysis logic, user recommendations, and a responsive dashboard experience.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    features: ['Questionnaire system', 'Addiction analysis', 'Recommendation engine', 'Responsive dashboard'],
    tags: ['All', 'React', 'Full Stack'],
    status: 'Flagship full stack',
    accent: '#3ee7d3',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Weather App',
    description:
      'A TypeScript weather forecasting app with location search, real-time weather API data, condition cards, and clean forecast visualization.',
    stack: ['React', 'TypeScript', 'Weather API', 'Tailwind'],
    features: ['API integration', 'Search flow', 'Weather cards', 'Forecast display'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'API product',
    accent: '#5b8cff',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Restaurant Web App',
    description:
      'A modern dine-in and delivery web experience designed for local businesses with menu discovery, food showcase, and order-focused sections.',
    stack: ['React', 'Tailwind', 'Responsive UI', 'Business UX'],
    features: ['Menu system', 'Delivery section', 'Order flow', 'Business-focused UI'],
    tags: ['All', 'React', 'Business'],
    status: 'Business ready',
    accent: '#ff7a70',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Portfolio Website',
    description:
      'A premium developer portfolio with motion, SEO tags, responsive layouts, contact integration, and a recruiter-friendly content system.',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    features: ['Modern animations', 'SEO optimization', 'Contact form', 'Reusable components'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'Personal brand',
    accent: '#b9f56f',
    demoUrl: '#home',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'AI SaaS Dashboard',
    description:
      'Concept dashboard for AI-powered products with metrics, workspace cards, model activity, and a clean operational interface.',
    stack: ['React', 'TypeScript', 'Dashboard UI', 'AI UX'],
    features: ['Metrics layout', 'Workspace UI', 'AI activity feed', 'SaaS-ready design'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'Concept build',
    accent: '#a78bfa',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Business Landing Page',
    description:
      'A conversion-focused landing page system for service businesses, startups, and local brands that need credibility quickly.',
    stack: ['React', 'Tailwind', 'SEO', 'Lead Forms'],
    features: ['CTA sections', 'Trust blocks', 'Lead capture', 'Mobile-first layout'],
    tags: ['All', 'Business', 'UI/UX'],
    status: 'Client concept',
    accent: '#fbbf24',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Admin Dashboard',
    description:
      'A practical admin interface with data cards, table-ready layouts, navigation patterns, and clear management actions.',
    stack: ['React', 'TypeScript', 'Charts', 'Auth UI'],
    features: ['Analytics cards', 'User flows', 'Management table', 'Role-ready UI'],
    tags: ['All', 'React', 'UI/UX'],
    status: 'Dashboard UI',
    accent: '#38bdf8',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'E-commerce UI',
    description:
      'A clean shopping interface concept with product cards, checkout-first thinking, category browsing, and mobile commerce patterns.',
    stack: ['React', 'Tailwind', 'Commerce UX', 'Responsive UI'],
    features: ['Product grid', 'Cart flow', 'Mobile checkout', 'Category filters'],
    tags: ['All', 'React', 'Business'],
    status: 'UI concept',
    accent: '#fb7185',
    demoUrl: '#contact',
    githubUrl: 'https://github.com/',
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
    title: 'Building career-ready products',
    copy: 'Focused on React, TypeScript, dashboards, business websites, and full stack apps that solve real problems.',
  },
  {
    year: '2025',
    title: 'Full stack project practice',
    copy: 'Built app flows with Node, Express, MongoDB, REST APIs, authentication patterns, and responsive UI.',
  },
  {
    year: 'Foundation',
    title: 'Computer science and web fundamentals',
    copy: 'Developed core knowledge in JavaScript, HTML, CSS, cloud fundamentals, data analytics, and basic Servlet/JSP.',
  },
];

export const testimonials = [
  {
    quote:
      'Mrityunjoy thinks beyond screens. He connects product goals with clean implementation and communicates like someone ready for startup work.',
    name: 'Aarav Mehta',
    role: 'Startup Founder',
  },
  {
    quote:
      'The restaurant site concept felt modern, fast, and practical for customers. The mobile experience was clearly treated as a priority.',
    name: 'Nisha Sharma',
    role: 'Local Business Client',
  },
  {
    quote:
      'Reliable, curious, and careful with details. He turned a rough idea into a polished interface with a strong client-focused structure.',
    name: 'Rohan Das',
    role: 'Freelance Client',
  },
];
