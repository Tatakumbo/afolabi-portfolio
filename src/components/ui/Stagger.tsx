import type { ReactNode } from 'react';
import { fadeUp, motion, stagger } from '../../lib/motion';

type Props = { children: ReactNode; className?: string };

// Wrap a grid/list in <Stagger> and each child in <StaggerItem>:
// the children fade up one after another the first time they scroll into view.
export function Stagger({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Props) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
