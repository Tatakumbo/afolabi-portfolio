import { Code, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';

type ProjectLinksProps = {
  project: Pick<Project, 'title' | 'link' | 'repo'>;
  className?: string;
};

const base =
  'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors';

// "View site" and "Repository" buttons. Each one only appears if the project has that link.
export default function ProjectLinks({ project, className = '' }: ProjectLinksProps) {
  if (!project.link && !project.repo) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={`${base} bg-primary text-primary-foreground hover:opacity-90`}
        >
          <ExternalLink size={14} aria-hidden="true" />
          View site<span className="sr-only"> for {project.title}</span>
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className={`${base} border border-border bg-background hover:bg-accent`}
        >
          <Code size={14} aria-hidden="true" />
          Repository<span className="sr-only"> for {project.title}</span>
        </a>
      )}
    </div>
  );
}
