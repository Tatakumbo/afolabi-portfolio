import type { Project } from '../../types';
import Modal from '../ui/Modal';
import ProjectImage from './ProjectImage';
import ProjectLinks from './ProjectLinks';

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={project?.title ?? ''} size="lg">
      {project && (
        <div className="space-y-5">
          <ProjectImage
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fallbackLabel={project.title}
            className="rounded-lg border border-border"
          />

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

          <ProjectLinks project={project} />
        </div>
      )}
    </Modal>
  );
}
