import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { MagneticLink } from './MagneticLink';
import { ProjectVisual } from './ProjectVisual';
import { BrowserMockup } from './BrowserMockup';
import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const images = project.screenshots.map((screenshot, screenshotIndex) => ({
    src: screenshot.url,
    alt: `${project.title} screenshot ${screenshotIndex + 1}`,
    label: `${screenshot.type ?? 'Screenshot'} ${screenshotIndex + 1}`,
  }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="panel group flex h-full flex-col rounded-2xl p-4 hover:border-brand-cyan/50 hover:shadow-glow"
    >
      {images.length > 0 ? (
        <BrowserMockup images={images} alt={`${project.title} preview`} domain={project.category || project.title} title={project.title} />
      ) : (
        <ProjectVisual title={project.title} accent="#3ee7d3" />
      )}
      <div className="flex flex-1 flex-col p-2 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-cyan px-3 py-1 text-xs font-black text-ink">
            {project.status}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-mist light:text-slate-600">{project.description}</p>
        <p className="mt-3 text-sm leading-6 text-mist/90 light:text-slate-500">{project.subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/[0.07] px-3 py-1 text-xs font-semibold text-mist light:bg-slate-100 light:text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <MagneticLink href={project.liveUrl || '#contact'} target={project.liveUrl.startsWith('http') ? '_blank' : undefined} rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined} className="button-primary min-h-10 px-4">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </MagneticLink>
          <MagneticLink href={project.githubUrl || '#contact'} target={project.githubUrl ? '_blank' : undefined} rel={project.githubUrl ? 'noopener noreferrer' : undefined} className="button-secondary min-h-10 px-4">
            <Github className="h-4 w-4" />
            GitHub
          </MagneticLink>
        </div>
      </div>
    </motion.article>
  );
}
