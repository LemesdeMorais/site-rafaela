import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";

import { PrologueSequence } from "./PrologueSequence";

import styles from "./Prologue.module.scss";

export function Prologue() {
  return (
    <Section>
      <Container>
        <ReplayOnView className={styles.prologue}>
          <span className={styles.eyebrow}>O primeiro traço</span>

          <PrologueSequence />

          <p className={styles.description}>
            Antes de virar site, sistema ou presença digital, tudo começa com uma ideia que merece
            sair do papel.
          </p>
        </ReplayOnView>
      </Container>
    </Section>
  );
}
