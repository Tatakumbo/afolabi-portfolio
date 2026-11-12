import { useState } from 'react';
import { Download, RotateCcw } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import Button from '../../components/ui/Button';
import { Stagger, StaggerItem } from '../../components/ui/Stagger';
import { seedPosts, seedProjects } from '../../data';
import { downloadJson } from '../../lib/download';
import { STORE_KEYS, useCollection } from '../../lib/useCollection';
import type { Post, Project } from '../../types';

function StatCard({ label, value, note }: { label: string; value: string | number; note?: string }) {
  return (
    <div className="h-full rounded-xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">{value}</p>
      {note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

export default function Dashboard() {
  const projects = useCollection<Project>(STORE_KEYS.projects, seedProjects);
  const posts = useCollection<Post>(STORE_KEYS.posts, seedPosts);
  const [resetOpen, setResetOpen] = useState(false);

  const hasLocalEdits = projects.isModified || posts.isModified;

  const handleReset = () => {
    projects.reset();
    posts.reset();
    setResetOpen(false);
  };

  return (
    <AdminLayout title="Dashboard" description="Overview and publishing tools.">
      <Stagger className="grid gap-4 sm:grid-cols-3">
        <StaggerItem className="h-full">
          <StatCard label="Projects" value={projects.items.length} />
        </StaggerItem>
        <StaggerItem className="h-full">
          <StatCard label="Blog posts" value={posts.items.length} />
        </StaggerItem>
        <StaggerItem className="h-full">
          <StatCard
            label="Content status"
            value={hasLocalEdits ? 'Local edits' : 'Published'}
            note={hasLocalEdits ? 'Differs from your site files' : 'Matches your site files'}
          />
        </StaggerItem>
      </Stagger>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-semibold">Publish your changes</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Download the updated file(s) below.</li>
          <li>
            Replace <code className="rounded bg-muted px-1">src/data/projects.json</code> and/or{' '}
            <code className="rounded bg-muted px-1">src/data/posts.json</code> in your project.
          </li>
          <li>Commit and deploy. Then reset local edits so you're viewing the published data.</li>
        </ol>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => downloadJson('projects.json', projects.items)}>
            <Download size={16} /> projects.json
          </Button>
          <Button variant="primary" onClick={() => downloadJson('posts.json', posts.items)}>
            <Download size={16} /> posts.json
          </Button>
          <Button onClick={() => setResetOpen(true)} disabled={!hasLocalEdits}>
            <RotateCcw size={16} /> Reset local edits
          </Button>
        </div>
      </section>

      <ConfirmDialog
        open={resetOpen}
        title="Reset local edits?"
        message="Your browser's edits to projects and posts will be discarded and the published data restored. Export first if you want to keep them."
        confirmLabel="Reset"
        onConfirm={handleReset}
        onClose={() => setResetOpen(false)}
      />
    </AdminLayout>
  );
}
