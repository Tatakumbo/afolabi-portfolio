import { useState } from 'react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import PostForm from '../../components/admin/PostForm';
import type { PostInput } from '../../components/admin/PostForm';
import { formatDate } from '../../components/blog/BlogCard';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { seedPosts } from '../../data';
import { AnimatePresence, motion } from '../../lib/motion';
import { slugify, uniqueSlug } from '../../lib/text';
import { STORE_KEYS, useCollection } from '../../lib/useCollection';
import type { Post } from '../../types';

export default function ManageBlog() {
  const { items, save } = useCollection<Post>(STORE_KEYS.posts, seedPosts);
  const sorted = [...items].sort((a, b) => b.date.localeCompare(a.date));

  // The target is kept after a dialog closes so its content doesn't vanish mid exit animation.
  const [editing, setEditing] = useState<Post | null>(null); // null while open = writing new
  const [formOpen, setFormOpen] = useState(false);
  const [deleting, setDeleting] = useState<Post | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const openNew = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (post: Post) => {
    setEditing(post);
    setFormOpen(true);
  };

  const askDelete = (post: Post) => {
    setDeleting(post);
    setDeleteOpen(true);
  };

  const handleSave = (data: PostInput) => {
    if (editing) {
      // The slug stays the same on edit so existing links to the post keep working.
      save(items.map((post) => (post.slug === editing.slug ? { slug: post.slug, ...data } : post)));
    } else {
      const slug = uniqueSlug(
        slugify(data.title),
        items.map((post) => post.slug),
      );
      save([...items, { slug, ...data }]);
    }
    setFormOpen(false);
  };

  const handleDelete = () => {
    if (deleting) save(items.filter((post) => post.slug !== deleting.slug));
    setDeleteOpen(false);
  };

  return (
    <AdminLayout
      title="Blog"
      description="Write, edit or remove posts."
      actions={
        <Button variant="primary" onClick={openNew}>
          <Plus size={16} /> New post
        </Button>
      }
    >
      {sorted.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
          No posts yet. Write your first one.
        </p>
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          <AnimatePresence initial={false}>
            {sorted.map((post) => (
              <motion.li
                key={post.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between gap-4 bg-card p-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">{post.title}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {formatDate(post.date)} · /blog/{post.slug}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    aria-label={`Edit ${post.title}`}
                    onClick={() => openEdit(post)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Delete ${post.title}`}
                    onClick={() => askDelete(post)}
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

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title={editing ? 'Edit post' : 'New post'} size="lg">
        <PostForm initial={editing} onSave={handleSave} onCancel={() => setFormOpen(false)} />
      </Modal>

      <ConfirmDialog
        open={deleteOpen}
        title="Delete post?"
        message={`"${deleting?.title ?? ''}" will be removed from your local copy. You can restore the published version from the dashboard.`}
        onConfirm={handleDelete}
        onClose={() => setDeleteOpen(false)}
      />
    </AdminLayout>
  );
}
