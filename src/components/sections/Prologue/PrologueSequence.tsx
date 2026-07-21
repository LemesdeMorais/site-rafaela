import { DrawLine } from "@/components/motion/DrawLine";
import { RevealText } from "@/components/motion/RevealText";

import styles from "./Prologue.module.scss";

export function PrologueSequence() {
  return (
    <div className={styles.sequence}>
      <DrawLine />

      <RevealText firstLine="Toda grande ideia" secondLine="começa pequena." />
    </div>
  );
}
