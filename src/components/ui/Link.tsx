import type { ReactNode } from 'react';
import useIsCurrent from '../../hooks/useIsCurrent';

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  exact?: boolean;
  onClick?: () => void;
};

// Hash link that marks itself as the current page, so styles can use aria-[current=page]:.
// When you switch to react-router-dom, replace this with <NavLink>.
export default function Link({ to, children, className = '', exact = false, onClick }: LinkProps) {
  const isCurrent = useIsCurrent(to, exact);

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
