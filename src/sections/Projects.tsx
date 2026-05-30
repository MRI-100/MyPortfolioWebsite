import { FeaturedProject } from '../components/FeaturedProject';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { useFeaturedProject } from '../hooks/useFeaturedProject';
import { useProjects } from '../hooks/useProjects';

export function Projects() {
  const { project: featuredProject, loading: featuredLoading, error: featuredError } = useFeaturedProject();
  const { projects, loading, error } = useProjects();
  const remainingProjects = projects.filter((project) => project.id !== featuredProject?.id);
  const isLoading = loading || featuredLoading;
  const currentError = error ?? featuredError;

  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          copy="A collection of products, business websites, and applications focused on usability, responsiveness, and real-world execution."
        />

        {isLoading && (
          <div className="panel mt-12 rounded-2xl p-8 text-center text-mist">Loading projects...</div>
        )}

        {!isLoading && currentError && (
          <div className="panel mt-12 rounded-2xl p-8 text-center text-brand-coral">{currentError}</div>
        )}

        {!isLoading && !currentError && !featuredProject && projects.length === 0 && (
          <div className="panel mt-12 rounded-2xl p-8 text-center text-mist">No projects have been published yet.</div>
        )}

        {!isLoading && !currentError && featuredProject && <FeaturedProject project={featuredProject} />}

        {!isLoading && !currentError && remainingProjects.length > 0 && <div className="mt-14">
          <p className="eyebrow">More work</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>}
      </div>
    </section>
  );
}
