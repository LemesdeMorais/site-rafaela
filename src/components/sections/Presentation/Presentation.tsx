import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

import { copy } from "@/content/copy";

import styles from "./Presentation.module.scss";

export function Presentation() {
  const { hero } = copy;

  return (
    <Section id="apresentacao">
      <Container>
        <ReplayOnView className={styles.presentation} threshold={0.4} rootMargin="-8% 0px -8% 0px">
          <div className={styles.content}>
            <Reveal>
              <span className={styles.tag}>
                <span aria-hidden="true" />
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1>
                {hero.heading.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}

                <span className={styles.highlight}>{hero.heading.highlight}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p>{hero.description}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className={styles.actions}>
                <Button href="#contato">
                  {hero.primaryButton}
                  <span aria-hidden="true">→</span>
                </Button>

                <span className={styles.note}>
                  {hero.note[0]}
                  <br />
                  {hero.note[1]}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className={styles.artwork}>
            <div className={styles.glow} aria-hidden="true" />

            <div className={styles.visual} aria-hidden="true">
              <div className={styles.orbit}>
                <span className={styles.orbitPoint} />
              </div>

              <div className={styles.innerOrbit} />

              <span className={styles.visualIndex}>{hero.artwork.index}</span>

              <span className={styles.visualLabel}>
                {hero.artwork.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </span>

              <span className={styles.backgroundName}>
                {hero.artwork.name.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </span>

              <div className={styles.signature}>
                <span className={styles.signatureRafaela}>{hero.artwork.name[0]}</span>

                <span className={styles.signatureLemes}>{hero.artwork.name[1]}</span>

                <span className={styles.signatureFlourish} />
              </div>

              <span className={styles.coordinates}>
                {hero.artwork.coordinates[0]}
                <br />
                {hero.artwork.coordinates[1]}
              </span>
            </div>
          </Reveal>

          <span className={styles.scrollHint} aria-hidden="true">
            <span>{hero.scrollHint}</span>
            <i />
          </span>
        </ReplayOnView>
      </Container>
    </Section>
  );
}
