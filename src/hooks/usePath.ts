import { useEffect, useState } from 'react';

// Reads the route from the URL hash: "#/about" -> "/about". Empty hash means home.
function getPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export default function usePath(): string {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}
