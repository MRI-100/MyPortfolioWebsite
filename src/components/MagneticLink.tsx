import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type MagneticLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
};

export function MagneticLink({ children, className = '', ...props }: MagneticLinkProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.25 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.25 });

  return (
    <motion.a
      {...props}
      className={className}
      style={{ x, y }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        event.currentTarget.blur();
      }}
    >
      {children}
    </motion.a>
  );
}
