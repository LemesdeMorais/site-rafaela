import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { copy } from "@/content/copy";

import styles from "./Solutions.module.scss";

export function Solutions() {
  return (
    <Section id="solucoes">
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{copy.solutions.eyebrow}</span>
          <h2>{copy.solutions.title}</h2>
        </div>

        <div className={styles.list}>
          {copy.solutions.items.map((item) => (
            <article className={styles.item} key={item.number}>
              <span className={styles.number}>{item.number}</span>

              <div className={styles.content}>
                <span className={styles.verb}>{item.verb}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}