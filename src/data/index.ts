import projectsJson from './projects.json';
import postsJson from './posts.json';
import type { Post, Project } from '../types';

// The published content, typed. Pages read these through useCollection so admin edits can preview.
export const seedProjects = projectsJson as Project[];
export const seedPosts = postsJson as Post[];
147428496