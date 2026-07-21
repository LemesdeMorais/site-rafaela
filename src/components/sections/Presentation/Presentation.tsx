import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

import { copy } from "@/content/copy";

import styles from "./Presentation.module.scss";

export function Presentation() {
  return (
    <Section id="apresentacao">
      <Container>
        <ReplayOnView
          className={styles.presentation}
          threshold={0.4}
          rootMargin="-8% 0px -8% 0px"
        >
          <div className={styles.content}>
            <Reveal>
              <span className={styles.tag}>
                <span aria-hidden="true" />
                Sua presença digital
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1>
                <span>Seu negócio merece</span>
                <span>um site tão bom quanto</span>

                <span className={styles.highlight}>
                  o trabalho que você entrega.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p>{copy.hero.description}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className={styles.actions}>
                <Button href="#contato">
                  Vamos conversar
                  <span aria-hidden="true">→</span>
                </Button>

                <span className={styles.note}>
                  Atendimento personalizado
                  <br />
                  e sem compromisso.
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.15}
            className={styles.artwork}
          >
            <div
              className={styles.glow}
              aria-hidden="true"
            />

            <div
              className={styles.visual}
              aria-hidden="true"
            >
              <div className={styles.orbit}>
                <span className={styles.orbitPoint} />
              </div>

              <div className={styles.innerOrbit} />

              <span className={styles.visualIndex}>
                01
              </span>

              <span className={styles.visualLabel}>
                Design
                <br />
                Desenvolvimento
                <br />
                Estratégia
              </span>

              <span className={styles.backgroundName}>
                <span>Rafaela</span>
                <span>Lemes</span>
              </span>

              <div className={styles.signature}>
                <span className={styles.signatureRafaela}>
                  Rafaela
                </span>

                <span className={styles.signatureLemes}>
                  Lemes
                </span>

                <span className={styles.signatureFlourish} />
              </div>

              <span className={styles.coordinates}>
                22.9068° S
                <br />
                43.1729° W
              </span>
            </div>
          </Reveal>

          <span
            className={styles.scrollHint}
            aria-hidden="true"
          >
            <span>Explore</span>
            <i />
          </span>
        </ReplayOnView>
      </Container>
    </Section>
  );
}