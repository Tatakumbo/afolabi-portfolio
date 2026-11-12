import type { ReactNode } from 'react';
import { Info } from 'lucide-react';
import Link from '../ui/Link';
import SectionHeading from '../ui/SectionHeading';

const tabs = [
  { label: 'Dashboard', to: '/admin', exact: true },
  { label: 'Projects', to: '/admin/projects', exact: false },
  { label: 'Blog', to: '/admin/blog', exact: false },
];

type AdminLayoutProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export default function AdminLayout({ title, description, actions, children }: AdminLayoutProps) {
  return (
    <div className="py-8">
      <div className="mb-6 flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-3 text-sm text-muted-foreground">
        <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
        <p>
          This is a content editor. Changes are saved in <strong className="text-foreground">this browser only</strong>,
          so you can preview them and visitors never see them. Export the JSON from the dashboard and commit it to
          publish.
        </p>
      </div>

      <nav aria-label="Admin" className="mb-8 flex gap-6 border-b border-border">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            exact={tab.exact}
            className="-mb-px border-b-2 border-transparent pb-3 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:border-foreground aria-[current=page]:text-foreground"
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-start justify-between gap-4">
        <SectionHeading as="h1" title={title} description={description} />
        {actions}
      </div>

      {children}
    </div>
  );
}
