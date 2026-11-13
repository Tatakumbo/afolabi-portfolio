import type { ReactNode } from 'react';
import usePath from '../../hooks/usePath';

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

// Hash link that marks itself as the current page, so styles can use aria-[current=page]:.
// When you switch to react-router-dom, replace this with <NavLink>.
export default function Link({ to, children, className = '', onClick }: LinkProps) {
  const path = usePath();
  const isCurrent = to === '/' ? path === '/' : path === to || path.startsWith(`${to}/`);

  return (
    <a
      href={`#${to}`}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
