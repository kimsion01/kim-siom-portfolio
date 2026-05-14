
import type { Project } from '@/lib/portfolio-data';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="projectCard motionCard detailedProjectCard" data-reveal>
      <span className="label">{project.label}</span>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>

      <dl className="projectMeta">
        {project.role ? (
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        ) : null}
        {project.contribution ? (
          <div>
            <dt>Contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
        ) : null}
        {project.tools ? (
          <div>
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
        ) : null}
        {project.platform ? (
          <div>
            <dt>Platform</dt>
            <dd>{project.platform}</dd>
          </div>
        ) : null}
      </dl>

      {project.href ? (
        <a href={project.href} target="_blank" rel="noreferrer">
          View Site
        </a>
      ) : null}
    </article>
  );
}
