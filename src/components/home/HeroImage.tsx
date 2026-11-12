import { motion } from '../../lib/motion';

// Images live in public/images and are referenced from the site root.
// Rename "Afo tue tue.jpg" to fola.jpg (no spaces) so the path below works.
export default function HeroImage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative my-4 mb-14 h-48 p-3 sm:h-64 md:h-80"
    >
      <div className="absolute right-0 bottom-0 size-8 border-r border-b border-foreground" />
      <div className="absolute top-0 left-0 size-8 border-t border-l border-foreground" />

      {/* TODO: the "HoOPE" text should be real HTML text overlaid here, not baked into the image. */}
      <img
        src="/images/hero.jpg"
        alt="Hero banner"
        width={1200}
        height={480}
        className="h-full w-full object-cover"
      />
      <motion.img
        src="/images/fola.jpg"
        alt="Portrait of Fola"
        width={96}
        height={96}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        className="absolute bottom-0 left-8 size-24 translate-y-1/3 rounded-full border-2 border-background object-cover"
      />
    </motion.section>
  );
}
