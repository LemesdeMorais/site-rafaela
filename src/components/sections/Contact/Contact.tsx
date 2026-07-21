import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";
import { copy } from "@/content/copy";

import styles from "./Contact.module.scss";

const whatsappUrl =
  "https://wa.me/5519999644110?text=Olá%20Rafaela,%20quero%20conversar%20sobre%20um%20projeto.";

export function Contact() {
  return (
    <Section id="contato">
      <Container>
        <ReplayOnView threshold={0.12}>
          <div className={styles.contact}>
            <Reveal>
              <span className={styles.eyebrow}>{copy.contact.eyebrow}</span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2>{copy.contact.title}</h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p>{copy.contact.description}</p>
            </Reveal>

            <Reveal delay={0.24}>
              <a className={styles.button} href={whatsappUrl} target="_blank" rel="noreferrer">
                {copy.contact.button}
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </ReplayOnView>
      </Container>
    </Section>
  );
}
