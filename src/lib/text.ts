export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// "my-post" -> "my-post-2" -> "my-post-3" until it doesn't clash with an existing id.
export function uniqueSlug(base: string, existing: string[]): string {
  const root = base || 'item';
  if (!existing.includes(root)) return root;
  let n = 2;
  while (existing.includes(`${root}-${n}`)) n += 1;
  return `${root}-${n}`;
}

export function parseTags(input: string): string[] {
  return Array.from(new Set(input.split(',').map((tag) => tag.trim()).filter(Boolean)));
}

// Only http(s) links are allowed, which blocks javascript: URLs in href attributes.
export function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}
