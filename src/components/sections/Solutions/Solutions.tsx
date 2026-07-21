import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";
import { copy } from "@/content/copy";

import styles from "./Solutions.module.scss";

export function Solutions() {
  return (
    <Section id="solucoes">
      <Container>
        <ReplayOnView>
          <Reveal>
            <div className={styles.header}>
              <span className={styles.eyebrow}>
                {copy.solutions.eyebrow}
              </span>

              <h2>{copy.solutions.title}</h2>
            </div>
          </Reveal>

          <div className={styles.list}>
            {copy.solutions.items.map((item, index) => (
              <Reveal
                key={item.number}
                delay={0.08 + index * 0.12}
              >
                <article className={styles.item}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div className={styles.content}>
                    <span className={styles.verb}>
                      {item.verb}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </ReplayOnView>
      </Container>
    </Section>
  );
}