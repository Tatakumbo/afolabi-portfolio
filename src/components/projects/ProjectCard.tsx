import { ArrowUpRight } from 'lucide-react';
import { motion } from '../../lib/motion';
import type { Project } from '../../types';

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 text-card-foreground transition-[border-color,box-shadow] hover:border-ring hover:shadow-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="leading-snug font-semibold">
          {/* The ::after stretches this button over the whole card, so the entire card is clickable. */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left outline-none after:absolute after:inset-0"
          >
            {project.title}
          </button>
        </h3>
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>

      <p className="line-clamp-3 text-sm text-muted-foreground">{project.summary}</p>

      {project.tags.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </li>
            
          ))}
        </ul>
        
        
      )}
    </motion.article>
  );
}
