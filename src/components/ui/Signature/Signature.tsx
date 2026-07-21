import styles from "./Signature.module.scss";

interface SignatureProps {
  className?: string;
}

export function Signature({ className = "" }: SignatureProps) {
  return (
    <svg
      className={`${styles.signature} ${className}`}
      viewBox="0 0 640 360"
      role="img"
      aria-label="Assinatura RL"
    >
      <path
        className={styles.stroke}
        d="
          M92 242
          C126 178, 144 92, 214 86
          C266 82, 286 124, 263 164
          C242 200, 191 218, 135 211
          C183 208, 231 221, 270 258

          M278 257
          C319 194, 338 118, 389 92
          C421 76, 455 88, 462 116
          C471 151, 434 184, 383 188
          C424 190, 474 201, 520 232
          C548 251, 567 271, 581 292
        "
      />

      <path
        className={styles.accent}
        d="
          M186 287
          C292 306, 398 305, 515 279
        "
      />
    </svg>
  );
}
