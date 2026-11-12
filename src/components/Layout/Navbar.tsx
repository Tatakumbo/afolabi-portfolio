import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import useIsCurrent from '../../hooks/useIsCurrent';
import { AnimatePresence, motion } from '../../lib/motion';
import ThemeToggle from '../ThemeToggle';
import Link from '../ui/Link';
import MoreDropdown from './MoreDropdown';

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
];

const moreLinks = [
  { label: 'Achievements', to: '/achievements' },
  { label: 'Resume', to: '/resume' },
];

// The underline is one shared element: when the page changes it slides to the new link.
function NavItem({ to, label }: { to: string; label: string }) {
  const current = useIsCurrent(to);

  return (
    <li className="relative">
      <Link
        to={to}
        className="text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
      >
        {label}
      </Link>
      {current && (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-0 -bottom-1 h-px bg-foreground"
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        />
      )}
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur print:hidden">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-(--portfolio-content-width) items-center justify-between px-4 py-3 text-foreground sm:px-6"
      >
        <Link to="/" className="font-semibold tracking-tight">
          AF
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {mainLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
          <MoreDropdown items={moreLinks} />
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="rounded-md p-2 hover:bg-accent md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
          >
            <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-border px-4 py-2">
              {[...mainLinks, ...moreLinks].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2 hover:bg-accent aria-[current=page]:font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
