import {
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./ReplayOnView.module.scss";

interface ReplayOnViewProps
  extends HTMLAttributes<HTMLDivElement> {
  threshold?: number;
  rootMargin?: string;
  replayOnThemeChange?: boolean;
}

export function ReplayOnView({
  threshold = 0.4,
  rootMargin = "-8% 0px -8% 0px",
  replayOnThemeChange = true,
  children,
  className,
  ...props
}: ReplayOnViewProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const wasVisibleRef = useRef(false);

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    function restartAnimations() {
      setAnimationKey((current) => current + 1);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting &&
          entry.intersectionRatio >= threshold;

        if (isVisible && !wasVisibleRef.current) {
          restartAnimations();
        }

        wasVisibleRef.current = isVisible;
      },
      {
        threshold: [0, threshold, 0.7],
        rootMargin,
      },
    );

    observer.observe(element);

    let themeObserver: MutationObserver | undefined;

    if (replayOnThemeChange) {
      themeObserver = new MutationObserver((mutations) => {
        const themeChanged = mutations.some(
          (mutation) =>
            mutation.type === "attributes" &&
            mutation.attributeName === "data-theme",
        );

        if (themeChanged) {
          restartAnimations();
        }
      });

      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }

    return () => {
      observer.disconnect();
      themeObserver?.disconnect();
    };
  }, [replayOnThemeChange, rootMargin, threshold]);

  const combinedClassName = [
    styles.replay,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      {...props}
      ref={elementRef}
      className={combinedClassName}
    >
      <div
        key={animationKey}
        className={styles.content}
      >
        {children}
      </div>
    </div>
  );
}