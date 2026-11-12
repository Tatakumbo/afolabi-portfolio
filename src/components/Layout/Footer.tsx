import Link from '../ui/Link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border print:hidden">
      <div className="mx-auto flex max-w-(--portfolio-content-width) flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>&copy; {new Date().getFullYear()} Fola. All rights reserved.</p>
        <ul className="flex gap-4">
          <li>
            <Link to="/projects" className="hover:text-foreground">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-foreground">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
