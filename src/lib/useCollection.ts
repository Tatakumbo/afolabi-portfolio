import { useCallback, useMemo, useSyncExternalStore } from 'react';

export const STORE_KEYS = { projects: 'projects', posts: 'posts' } as const;

const PREFIX = 'portfolio:';
const CHANGE_EVENT = 'portfolio-store-change';

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange); // edits made in another tab
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function readRaw(key: string): string | null {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null; // storage blocked: behave as if there are no local edits
  }
}

// Returns the published data (the seed from src/data) unless this browser has local edits.
// The raw string is the snapshot because it is a primitive: React can compare it safely.
export function useCollection<T>(key: string, seed: T[]) {
  const getSnapshot = useCallback(() => readRaw(key), [key]);
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const items = useMemo<T[]>(() => {
    if (raw === null) return seed;
    try {
      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as T[]) : seed;
    } catch {
      return seed;
    }
  }, [raw, seed]);

  const save = useCallback(
    (next: T[]) => {
      try {
        localStorage.setItem(PREFIX + key, JSON.stringify(next));
      } catch {
        // storage full or blocked: the edit simply won't persist
      }
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    [key],
  );

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch {
      // nothing to clear if storage is blocked
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, [key]);

  return { items, save, reset, isModified: raw !== null };
}
