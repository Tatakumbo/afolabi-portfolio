import BlogCard from '../components/blog/BlogCard';
import SectionHeading from '../components/ui/SectionHeading';
import posts from '../data/posts.json';
import type { Post } from '../types';

export default function Blog() {
  const sorted = [...(posts as Post[])].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="py-8">
      <SectionHeading as="h1" title="Blog" description="Notes on what I'm building and learning." />

      {sorted.length === 0 ? (
        <p className="text-muted-foreground">No posts yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {sorted.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
