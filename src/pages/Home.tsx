import HeroImage from '../components/home/HeroImage';
import BlogCard from '../components/blog/BlogCard';
import ProjectGrid from '../components/projects/ProjectGrid';
import SectionHeading from '../components/ui/SectionHeading';
import Link from '../components/ui/Link';
import { Stagger, StaggerItem } from '../components/ui/Stagger';
import { seedPosts, seedProjects } from '../data';
import { STORE_KEYS, useCollection } from '../lib/useCollection';
import type { Post, Project } from '../types';
import {motion} from 'motion/react';

export default function Home() {
  const { items: projects } = useCollection<Project>(STORE_KEYS.projects, seedProjects);
  const { items: posts } = useCollection<Post>(STORE_KEYS.posts, seedPosts);

  const featured = projects.slice(0, 3);
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <>
      <HeroImage />

      <Stagger className="py-6">
        <StaggerItem>
          <motion.h1 className="text-3xl font-semibold tracking-tight" drag>Hi, I'm Afolabi Fajana </motion.h1>
        </StaggerItem>
        {/* TODO: replace with your one-line pitch. */}
        <StaggerItem>
          <p className="mt-2 max-w-prose text-muted-foreground">
            I build web applications and systems. Take a look at my work below.
          </p>
        </StaggerItem>
        <StaggerItem className="mt-4 flex gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            View projects
          </Link>
          <Link to="/about" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
            About me
          </Link>
        </StaggerItem>
      </Stagger>

      <section className="py-6">
        <SectionHeading title="Featured projects" />
        <ProjectGrid projects={featured} />
      </section>

      {latestPosts.length > 0 && (
        <section className="py-6">
          <SectionHeading title="Latest posts" />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}
    </>
  );
}
