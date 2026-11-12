import { Code, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';
import Modal from '../ui/Modal';

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

const linkClass =
  'inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent';

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={project?.title ?? ''} size="lg">
      {project && (
        <div className="space-y-5">
          <p className="leading-relaxed text-muted-foreground">{project.summary}</p>

          {project.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {(project.link || project.repo) && (
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className={linkClass}>
                  <ExternalLink size={16} /> Live site
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className={linkClass}>
                  <Code size={16} /> Source code
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
