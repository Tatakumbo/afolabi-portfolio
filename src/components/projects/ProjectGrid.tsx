import { useState } from 'react';
import type { Project } from '../../types';
import { Stagger, StaggerItem } from '../ui/Stagger';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Cards plus the detail modal, shared by the Home and Projects pages.
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  // `selected` is kept after closing so the dialog's content doesn't vanish mid exit animation.
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <ProjectCard project={project} onSelect={handleSelect} />
          </StaggerItem>
        ))}
      </Stagger>
      <ProjectModal project={selected} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
