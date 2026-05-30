import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import type { Project } from '../types';
import { BrowserMockup } from './BrowserMockup';
import { MagneticLink } from './MagneticLink';

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const images = project.screenshots.map((screenshot, index) => ({
    src: screenshot.url,
    alt: `${project.title} screenshot ${index + 1}`,
    label: `${screenshot.type ?? 'Screenshot'} ${index + 1}`,
  }));
  const domain = getDisplayDomain(project.liveUrl, project.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-soft backdrop-blur-xl light:border-slate-200 light:bg-white sm:p-6 lg:p-8"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="absolute -bottom-28 left-16 h-64 w-64 rounded-full bg-brand-coral/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.42fr)_minmax(330px,0.9fr)] lg:items-center">
        <BrowserMockup
          images={images}
          alt={`${project.title} screenshot`}
          domain={domain}
          title={project.title}
        />

        <div className="lg:pl-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Project
          </span>
          <h3 className="mt-5 font-display text-3xl font-black text-white light:text-slate-950 sm:text-4xl">{project.title}</h3>
          <p className="mt-2 text-base font-bold text-brand-cyan">{project.subtitle}</p>
          <p className="mt-5 leading-8 text-mist light:text-slate-600">
            {project.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mist">Role</p>
              <p className="mt-2 font-display text-lg font-black text-white light:text-slate-950">{project.role}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mist">Tech</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span key={item} className="rounded-full bg-white/[0.07] px-2.5 py-1 text-xs font-bold text-white light:bg-white light:text-slate-950">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mist">Focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs font-semibold text-mist light:bg-slate-100 light:text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-cyan/25 bg-gradient-to-br from-brand-cyan/[0.12] via-white/[0.045] to-brand-blue/[0.08] p-5 shadow-[0_18px_60px_rgba(62,231,211,0.10)]">
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-brand-cyan/20 blur-2xl" />
            <p className="relative font-display text-lg font-black text-white light:text-slate-950">Why it matters</p>
            <p className="mt-2 text-sm leading-7 text-mist light:text-slate-600">{project.category || project.status}</p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <MagneticLink href={project.liveUrl || '#contact'} target={project.liveUrl ? '_blank' : undefined} rel={project.liveUrl ? 'noopener noreferrer' : undefined} className="button-primary">
              <ExternalLink className="h-4 w-4" />
              Visit Live Site
            </MagneticLink>
            <MagneticLink href={project.githubUrl || '#contact'} target={project.githubUrl ? '_blank' : undefined} rel={project.githubUrl ? 'noopener noreferrer' : undefined} className="button-secondary">
              <Github className="h-4 w-4" />
              View Source
            </MagneticLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getDisplayDomain(url: string, fallback: string) {
  try {
    return url ? new URL(url, window.location.origin).hostname : fallback;
  } catch {
    return fallback;
  }
}
