import { useState } from 'react';
import type { FormEvent } from 'react';
import { isHttpUrl, parseTags } from '../../lib/text';
import type { Project } from '../../types';
import Button from '../ui/Button';
import { TextAreaField, TextField } from '../ui/Field';

export type ProjectInput = Omit<Project, 'id'>;

type ProjectFormProps = {
  initial: Project | null; // null means "add a new project"
  onSave: (data: ProjectInput) => void;
  onCancel: () => void;
};

export default function ProjectForm({ initial, onSave, onCancel }: ProjectFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [summary, setSummary] = useState(initial?.summary ?? '');
  const [tags, setTags] = useState(initial?.tags.join(', ') ?? '');
  const [link, setLink] = useState(initial?.link ?? '');
  const [repo, setRepo] = useState(initial?.repo ?? '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const next: Record<string, string> = {};
    if (!title.trim()) next.title = 'Title is required.';
    if (!summary.trim()) next.summary = 'Summary is required.';
    if (link.trim() && !isHttpUrl(link.trim())) next.link = 'Must start with http:// or https://';
    if (repo.trim() && !isHttpUrl(repo.trim())) next.repo = 'Must start with http:// or https://';

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    onSave({
      title: title.trim(),
      summary: summary.trim(),
      tags: parseTags(tags),
      ...(link.trim() ? { link: link.trim() } : {}),
      ...(repo.trim() ? { repo: repo.trim() } : {}),
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} error={errors.title} />
      <TextAreaField
        label="Summary"
        rows={3}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        error={errors.summary}
      />
      <TextField
        label="Tags"
        hint="Separate with commas, e.g. PHP, MySQL"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Live link (optional)"
          type="url"
          placeholder="https://"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          error={errors.link}
        />
        <TextField
          label="Code link (optional)"
          type="url"
          placeholder="https://"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          error={errors.repo}
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="primary">
          {initial ? 'Save changes' : 'Add project'}
        </Button>
      </div>
    </form>
  );
}
