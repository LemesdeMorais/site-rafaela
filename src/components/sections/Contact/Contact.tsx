import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";

import { copy } from "@/content/copy";

import styles from "./Contact.module.scss";

export function Contact() {
  const { contact } = copy;

  const whatsappUrl = `https://wa.me/${contact.whatsapp.phone}?text=${encodeURIComponent(
    contact.whatsapp.message
  )}`;

  return (
    <Section id="contato">
      <Container>
        <ReplayOnView threshold={0.12}>
          <div className={styles.contact}>
            <Reveal>
              <span className={styles.eyebrow}>{contact.eyebrow}</span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2>{contact.title}</h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p>{contact.description}</p>
            </Reveal>

            <Reveal delay={0.24}>
              <a className={styles.button} href={whatsappUrl} target="_blank" rel="noreferrer">
                {contact.button}
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </ReplayOnView>
      </Container>
    </Section>
  );
}
