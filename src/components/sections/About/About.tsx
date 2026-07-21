import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";
import { copy } from "@/content/copy";

import styles from "./About.module.scss";

export function About() {
  return (
    <Section id="sobre">
      <Container>
        <ReplayOnView threshold={0.12}>
          <div className={styles.layout}>
            <Reveal>
              <div className={styles.header}>
                <span className={styles.eyebrow}>{copy.about.eyebrow}</span>

                <h2>{copy.about.title}</h2>
              </div>
            </Reveal>

            <div className={styles.content}>
              <div className={styles.text}>
                {copy.about.paragraphs.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={0.08 + index * 0.1}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>

              <ul className={styles.highlights}>
                {copy.about.highlights.map((highlight, index) => (
                  <li key={highlight}>
                    <Reveal delay={0.35 + index * 0.08}>{highlight}</Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ReplayOnView>
      </Container>
    </Section>
  );
}
