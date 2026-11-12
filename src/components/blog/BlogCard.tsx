import type { Post } from '../../types';
import Link from '../ui/Link';

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="rounded-lg border border-border bg-card p-4 text-card-foreground">
      <time dateTime={post.date} className="text-xs text-muted-foreground">
        {formatDate(post.date)}
      </time>
      <h3 className="mt-1 font-semibold">
        <Link to={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
    </article>
  );
}
