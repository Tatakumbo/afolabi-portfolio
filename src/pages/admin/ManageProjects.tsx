import { useState } from 'react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import ProjectForm from '../../components/admin/ProjectForm';
import type { ProjectInput } from '../../components/admin/ProjectForm';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { seedProjects } from '../../data';
import { AnimatePresence, motion } from '../../lib/motion';
import { slugify, uniqueSlug } from '../../lib/text';
import { STORE_KEYS, useCollection } from '../../lib/useCollection';
import type { Project } from '../../types';

export default function ManageProjects() {
  const { items, save } = useCollection<Project>(STORE_KEYS.projects, seedProjects);

  // The target is kept after a dialog closes so its content doesn't vanish mid exit animation.
  const [editing, setEditing] = useState<Project | null>(null); // null while open = adding new
  const [formOpen, setFormOpen] = useState(false);
  const [deleting, setDeleting] = useState<Project | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const openNew = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (project: Project) => {
    setEditing(project);
    setFormOpen(true);
  };

  const askDelete = (project: Project) => {
    setDeleting(project);
    setDeleteOpen(true);
  };

  const handleSave = (data: ProjectInput) => {
    if (editing) {
      save(items.map((project) => (project.id === editing.id ? { id: project.id, ...data } : project)));
    } else {
      const id = uniqueSlug(
        slugify(data.title),
        items.map((project) => project.id),
      );
      save([...items, { id, ...data }]);
    }
    setFormOpen(false);
  };

  const handleDelete = () => {
    if (deleting) save(items.filter((project) => project.id !== deleting.id));
    setDeleteOpen(false);
  };

  return (
    <AdminLayout
      title="Projects"
      description="Add, edit or remove the projects shown on your site."
      actions={
        <Button variant="primary" onClick={openNew}>
          <Plus size={16} /> Add project
        </Button>
      }
    >
      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
          No projects yet. Add your first one.
        </p>
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          <AnimatePresence initial={false}>
            {items.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between gap-4 bg-card p-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">{project.title}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {project.tags.length > 0 ? project.tags.join(' · ') : 'No tags'}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    aria-label={`Edit ${project.title}`}
                    onClick={() => openEdit(project)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Delete ${project.title}`}
                    onClick={() => askDelete(project)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title={editing ? 'Edit project' : 'Add project'}
        size="lg"
      >
        <ProjectForm initial={editing} onSave={handleSave} onCancel={() => setFormOpen(false)} />
      </Modal>

      <ConfirmDialog
        open={deleteOpen}
        title="Delete project?"
        message={`"${deleting?.title ?? ''}" will be removed from your local copy. You can restore the published version from the dashboard.`}
        onConfirm={handleDelete}
        onClose={() => setDeleteOpen(false)}
      />
    </AdminLayout>
  );
}
