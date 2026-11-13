import ProjectCard from '../components/projects/ProjectCard';
import SectionHeading from '../components/ui/SectionHeading';
import projects from '../data/projects.json';
import type { Project } from '../types';

export default function Projects() {
  const items = projects as Project[];

  return (
    <div className="py-8">
      <SectionHeading as="h1" title="My Projects" description="Things I've designed and built." />

      {items.length === 0 ? (
        <p className="text-muted-foreground">No projects yet. Add some in src/data/projects.json.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
