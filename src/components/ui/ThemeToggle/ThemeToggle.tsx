import { useEffect, useState } from "react";

import styles from "./ThemeToggle.module.scss";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  }

  return (
    <button
      className={styles.toggle}
      type="button"
      onClick={toggleTheme}
      aria-label={
        isLight ? "Ativar tema escuro" : "Ativar tema claro"
      }
      aria-pressed={isLight}
    >
      <span className={styles.icon} aria-hidden="true">
        ☀
      </span>

      <span
        className={`${styles.thumb} ${
          isLight ? styles.thumbLight : ""
        }`}
      />

      <span className={styles.icon} aria-hidden="true">
        ☾
      </span>
    </button>
  );
}