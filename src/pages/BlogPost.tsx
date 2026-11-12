import BlogContent from '../components/blog/BlogContent';
import { formatDate } from '../components/blog/BlogCard';
import Link from '../components/ui/Link';
import posts from '../data/posts.json';
import type { Post } from '../types';
import NotFound from './NotFound';

export default function BlogPost({ slug }: { slug: string }) {
  const post = (posts as Post[]).find((item) => item.slug === slug);

  if (!post) return <NotFound />;

  return (
    <article className="max-w-prose py-8">
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
        ← All posts
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{post.title}</h1>
      <time dateTime={post.date} className="mt-1 block text-sm text-muted-foreground">
        {formatDate(post.date)}
      </time>
      <div className="mt-6">
        <BlogContent paragraphs={post.body} />
      </div>
    </article>
  );
}
