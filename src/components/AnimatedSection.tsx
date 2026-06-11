"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const hidden = {
    opacity: 0,
    y: direction === "up" ? 16 : 0,
    x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
