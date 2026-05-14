import type { Project } from '@/lib/portfolio-data';

export function ProjectCard({ project }: { project: Project }) {
  const isInternalLink = project.href?.startsWith('/');
  const imageClassName = [
    'projectImage',
    project.image?.includes('botezien') ? 'packagePreview' : '',
    project.image?.includes('today-haedal') ? 'haedalPreview' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className="projectCard motionCard detailedProjectCard" data-reveal>
      {project.image ? (
        <div className={imageClassName}>
          <img src={project.image} alt={`${project.title} 이미지`} />
        </div>
      ) : null}
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
        <a href={project.href} target={isInternalLink ? undefined : '_blank'} rel={isInternalLink ? undefined : 'noreferrer'}>
          {isInternalLink ? 'Case Study View' : 'View Site'}
        </a>
      ) : null}
    </article>
  );
}
