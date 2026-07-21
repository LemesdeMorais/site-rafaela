import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { copy } from "@/content/copy";

import styles from "./Contact.module.scss";

const whatsappUrl =
  "https://wa.me/5519999644110?text=Olá%20Rafaela,%20quero%20conversar%20sobre%20um%20projeto.";

export function Contact() {
  return (
    <Section id="contato">
      <Container>
        <div className={styles.contact}>
          <span className={styles.eyebrow}>{copy.contact.eyebrow}</span>

          <h2>{copy.contact.title}</h2>

          <p>{copy.contact.description}</p>

          <a
            className={styles.button}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.contact.button}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}