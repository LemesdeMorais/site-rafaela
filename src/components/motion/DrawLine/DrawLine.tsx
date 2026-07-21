import { motion } from "framer-motion";

import styles from "./DrawLine.module.scss";

interface DrawLineProps {
  className?: string;
}

export function DrawLine({ className }: DrawLineProps) {
  return (
    <svg
      className={`${styles.line} ${className ?? ""}`}
      viewBox="0 0 600 80"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 20 40 C 160 40, 180 40, 300 40 S 440 40, 580 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.8, ease: "easeInOut" },
          opacity: { duration: 0.4 },
        }}
      />
    </svg>
  );
}
