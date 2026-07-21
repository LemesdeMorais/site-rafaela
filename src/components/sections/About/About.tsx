import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { copy } from "@/content/copy";

import styles from "./About.module.scss";

export function About() {
  return (
    <Section id="sobre">
      <Container>
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>{copy.about.eyebrow}</span>

            <h2>{copy.about.title}</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.text}>
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className={styles.highlights}>
              {copy.about.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}