import usePath from './usePath';

// True when `to` is the current page. By default a parent path also matches its children
// (/blog is current on /blog/my-post); pass exact for sections like /admin that contain others.
export default function useIsCurrent(to: string, exact = false): boolean {
  const path = usePath();
  if (to === '/' || exact) return path === to;
  return path === to || path.startsWith(`${to}/`);
}
