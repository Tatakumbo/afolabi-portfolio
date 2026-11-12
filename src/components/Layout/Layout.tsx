import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

// Single source of truth for page width, side padding and the grid background.
export default function Layout({ children }: LayoutProps) {
  return (
    // `isolate` keeps the grid (z -10) inside this wrapper, behind the content but above the page colour.
    <div className="relative isolate flex min-h-screen flex-col">
      <div aria-hidden="true" className="page-grid pointer-events-none fixed inset-0 -z-10 print:hidden" />
      <Navbar />
      <main className="mx-auto w-full max-w-(--portfolio-content-width) flex-1 px-4 sm:px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
