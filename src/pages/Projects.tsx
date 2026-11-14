import ProjectGrid from '../components/projects/ProjectGrid';
import SectionHeading from '../components/ui/SectionHeading';
import { seedProjects } from '../data';
import { STORE_KEYS, useCollection } from '../lib/useCollection';
import type { Project } from '../types';

export default function Projects() {
  const { items } = useCollection<Project>(STORE_KEYS.projects, seedProjects);

  return (
    <div className="py-8">
      <SectionHeading as="h1" title="Projects" description="Things I've designed and built. Select one for details." />

      {items.length === 0 ? (
        <p className="text-muted-foreground">No projects yet.</p>
      ) : (
        <ProjectGrid projects={items} />
      )}
    </div>
  );
}
