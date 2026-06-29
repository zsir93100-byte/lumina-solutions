'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export default function AnimatedSection({ children, className, delay = 0, direction = 'up' }: Props) {
  const xOffset = direction === 'left' ? -30 : direction === 'right' ? 30 : 0;
  const yOffset = direction === 'up' ? 30 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
