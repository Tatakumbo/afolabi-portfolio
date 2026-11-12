import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Post } from '../../types';
import Button from '../ui/Button';
import { TextAreaField, TextField } from '../ui/Field';

export type PostInput = Omit<Post, 'slug'>;

type PostFormProps = {
  initial: Post | null; // null means "write a new post"
  onSave: (data: PostInput) => void;
  onCancel: () => void;
};

export default function PostForm({ initial, onSave, onCancel }: PostFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? '');
  const [body, setBody] = useState(initial?.body.join('\n\n') ?? '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const paragraphs = body
      .split(/\n\s*\n/)
      .map((text) => text.trim())
      .filter(Boolean);

    const next: Record<string, string> = {};
    if (!title.trim()) next.title = 'Title is required.';
    if (!date) next.date = 'Pick a date.';
    if (!excerpt.trim()) next.excerpt = 'A short excerpt is required.';
    if (paragraphs.length === 0) next.body = 'Write at least one paragraph.';

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    onSave({ title: title.trim(), date, excerpt: excerpt.trim(), body: paragraphs });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} error={errors.title} />
      <TextField label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} error={errors.date} />
      <TextAreaField
        label="Excerpt"
        hint="Shown on the blog list and home page."
        rows={2}
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        error={errors.excerpt}
      />
      <TextAreaField
        label="Post"
        hint="Separate paragraphs with a blank line."
        rows={9}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        error={errors.body}
      />

      <div className="flex justify-end gap-3 pt-2">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="primary">
          {initial ? 'Save changes' : 'Publish post'}
        </Button>
      </div>
    </form>
  );
}
