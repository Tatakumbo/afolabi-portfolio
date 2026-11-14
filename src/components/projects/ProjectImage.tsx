import { useState } from 'react';

type ProjectImageProps = {
  src?: string;
  alt: string;
  fallbackLabel: string; // the first letter is shown when there is no image or it fails to load
  className?: string;
};

// 16:9 image frame. When the parent has the Tailwind `group` class (the project card does),
// the image zooms in slightly on hover. A missing or broken image falls back to a plain block
// instead of showing the browser's broken-image icon.
export default function ProjectImage({ src, alt, fallbackLabel, className = '' }: ProjectImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | undefined>();
  const showImage = Boolean(src) && src !== failedSrc;

  return (
    <div className={`relative aspect-video overflow-hidden bg-muted ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex size-full items-center justify-center text-4xl font-semibold text-muted-foreground/50"
        >
          {fallbackLabel.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
