export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
  repo?: string;
  onSelect: (project: Project) => void;
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. 2026-11-08
  excerpt: string;
  body: string[]; // one string per paragraph
}
