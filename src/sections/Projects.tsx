import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProjectVisual } from '../components/ProjectVisual';
import { SectionHeading } from '../components/SectionHeading';
import { projectFilters, projects } from '../data/site';
import type { ProjectCategory } from '../types';

export function Projects() {
  const [active, setActive] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const visibleProjects = useMemo(
    () => projects.filter((project) => active === 'All' || project.tags.includes(active)),
    [active],
  );

  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Project work that shows product thinking, not just screens."
            copy="Each build is framed around a real skill signal: UI polish, APIs, responsiveness, business value, or full stack structure."
          />
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active === filter
                    ? 'bg-brand-cyan text-ink'
                    : 'border border-white/10 text-mist hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04 }}
              className="panel group rounded-2xl p-4 transition hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-glow"
            >
              <ProjectVisual title={project.title} accent={project.accent} />
              <div className="p-2 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full px-3 py-1 text-xs font-black text-ink" style={{ backgroundColor: project.accent }}>
                    {project.status}
                  </span>
                  {project.tags.filter((tag) => tag !== 'All').map((tag) => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-[0.18em] text-mist">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist light:text-slate-600">{project.description}</p>
                <p className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-mist light:border-slate-200 light:bg-slate-50 light:text-slate-600">
                  <span className="font-bold text-white light:text-slate-950">Why it matters: </span>
                  {project.relevance}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs font-semibold text-mist light:bg-slate-100 light:text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-mist light:text-slate-600 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.demoUrl} className="button-primary min-h-10 px-4">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="button-secondary min-h-10 px-4">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="button-secondary min-h-10 px-4"
                  >
                    Preview Details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="panel mt-10 rounded-2xl p-6 sm:p-8">
          <p className="eyebrow">Selected project</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ProjectVisual title={selectedProject.title} accent={selectedProject.accent} />
            <div>
              <h3 className="font-display text-3xl font-black text-white light:text-slate-950">{selectedProject.title}</h3>
              <p className="mt-4 leading-8 text-mist light:text-slate-600">{selectedProject.description}</p>
              <p className="mt-4 leading-8 text-mist light:text-slate-600">{selectedProject.relevance}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.features.map((feature) => (
                  <span key={feature} className="rounded-full border border-white/10 px-3 py-1 text-sm text-mist light:border-slate-200">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
