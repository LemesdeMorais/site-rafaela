import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

import styles from "./Reveal.module.scss";

interface RevealProps
  extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export function Reveal({
  children,
  delay = 0,
  className,
  style,
  ...props
}: RevealProps) {
  const combinedClassName = [
    styles.reveal,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const revealStyle = {
    ...style,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  return (
    <div
      {...props}
      className={combinedClassName}
      style={revealStyle}
    >
      {children}
    </div>
  );
}