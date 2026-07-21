import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./RevealText.module.scss";

interface RevealTextProps {
  firstLine: string;
  secondLine?: string;
  delay?: number;
}

export function RevealText({ firstLine, secondLine, delay = 1.6 }: RevealTextProps) {
  const maskRef = useRef<SVGRectElement>(null);
  const penRef = useRef<SVGCircleElement>(null);

  const generatedId = useId();
  const clipId = `text-reveal-${generatedId.replace(/:/g, "")}`;

  useLayoutEffect(() => {
    if (!maskRef.current || !penRef.current) return;

    const context = gsap.context(() => {
      gsap.set(maskRef.current, {
        attr: { width: 0 },
      });

      gsap.set(penRef.current, {
        x: 0,
        opacity: 0,
      });

      const timeline = gsap.timeline({
        delay,
      });

      timeline
        .to(penRef.current, {
          opacity: 1,
          duration: 0.2,
        })
        .to(
          maskRef.current,
          {
            attr: { width: 1060 },
            duration: 2.8,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          penRef.current,
          {
            x: 1060,
            duration: 2.8,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(penRef.current, {
          opacity: 0,
          duration: 0.35,
        });
    });

    return () => context.revert();
  }, [delay]);

  return (
    <svg
      className={styles.reveal}
      viewBox="0 0 1200 250"
      role="img"
      aria-label={`${firstLine} ${secondLine ?? ""}`}
    >
      <defs>
        <clipPath id={clipId}>
          <rect ref={maskRef} x="70" y="20" width="0" height="210" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <text className={styles.text} x="70" y={secondLine ? "105" : "145"}>
          {firstLine}
        </text>

        {secondLine && (
          <text className={styles.text} x="70" y="190">
            {secondLine}
          </text>
        )}
      </g>

      <circle ref={penRef} className={styles.pen} cx="70" cy={secondLine ? "190" : "145"} r="7" />
    </svg>
  );
}
