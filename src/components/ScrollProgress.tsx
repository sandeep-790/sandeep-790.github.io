"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left"
      style={{
        scaleX,
        height: "2px",
        background: "linear-gradient(to right, #00d4aa, #818cf8)",
      }}
    />
  );
}
