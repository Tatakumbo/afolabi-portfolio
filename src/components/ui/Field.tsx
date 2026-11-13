import { useId } from 'react';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseProps = { label: string; hint?: string; error?: string };

const controlClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground aria-invalid:border-destructive';

function Message({ id, error, hint }: { id: string; error?: string; hint?: string }) {
  if (error) {
    return (
      <p id={`${id}-error`} className="text-xs text-destructive">
        {error}
      </p>
    );
  }
  if (hint) {
    return (
      <p id={`${id}-hint`} className="text-xs text-muted-foreground">
        {hint}
      </p>
    );
  }
  return null;
}

export function TextField({
  label,
  hint,
  error,
  className = '',
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`${controlClass} ${className}`}
        {...rest}
      />
      <Message id={id} error={error} hint={hint} />
    </div>
  );
}

export function TextAreaField({
  label,
  hint,
  error,
  className = '',
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`${controlClass} resize-y ${className}`}
        {...rest}
      />
      <Message id={id} error={error} hint={hint} />
    </div>
  );
}
