import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./PointerEffects.module.scss";

type PointerVariables = CSSProperties & {
  "--pointer-x": string;
  "--pointer-y": string;
};

interface PointerEffectsProps {
  children: ReactNode;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  size: number;
}

export function PointerEffects({ children }: PointerEffectsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sparkIdRef = useRef(0);
  const lastSparkAtRef = useRef(0);

  const [isPointerActive, setIsPointerActive] = useState(false);

  const [pointerPosition, setPointerPosition] = useState({
    x: 0,
    y: 0,
  });

  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    if (sparks.length === 0) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setSparks((current) => current.slice(1));
    }, 700);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [sparks]);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      return;
    }

    setPointerPosition({
      x: event.clientX,
      y: event.clientY,
    });

    setIsPointerActive(true);

    const now = performance.now();

    if (now - lastSparkAtRef.current < 70) {
      return;
    }

    lastSparkAtRef.current = now;
    sparkIdRef.current += 1;

    const spark: Spark = {
      id: sparkIdRef.current,
      x: event.clientX,
      y: event.clientY,
      offsetX: Math.random() * 26 - 13,
      offsetY: 18 + Math.random() * 24,
      size: 2 + Math.random() * 3,
    };

    setSparks((current) => [...current.slice(-10), spark]);
  }

  function handlePointerEnter(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      return;
    }

    setPointerPosition({
      x: event.clientX,
      y: event.clientY,
    });

    setIsPointerActive(true);
  }

  function handlePointerLeave() {
    setIsPointerActive(false);
  }

  const pointerStyle: PointerVariables = {
    "--pointer-x": `${pointerPosition.x}px`,
    "--pointer-y": `${pointerPosition.y}px`,
  };

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${isPointerActive ? styles.pointerActive : ""}`}
      style={pointerStyle}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.pointerGlow} aria-hidden="true" />

      <div className={styles.sparkLayer} aria-hidden="true">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className={styles.spark}
            style={
              {
                left: `${spark.x}px`,
                top: `${spark.y}px`,
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                "--spark-x": `${spark.offsetX}px`,
                "--spark-y": `${spark.offsetY}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {children}
    </div>
  );
}
