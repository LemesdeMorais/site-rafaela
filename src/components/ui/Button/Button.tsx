import type { ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: "_blank";
  rel?: string;
}

export function Button({
  children,
  href,
  className,
  target,
  rel,
}: ButtonProps) {
  const classes = `${styles.button} ${className ?? ""}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}