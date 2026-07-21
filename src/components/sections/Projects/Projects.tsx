import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { copy } from "@/content/copy";

import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <Section id="projetos">
      <Container>
        <div className={styles.header}>
          <span>{copy.projects.eyebrow}</span>

          <h2>{copy.projects.title}</h2>
        </div>

        <div className={styles.grid}>
          {copy.projects.items.map((project) => (
            <article key={project.company} className={styles.card}>
              <small>{project.category}</small>

              <h3>{project.company}</h3>

              <strong>Problema</strong>

              <p>{project.problem}</p>

              <strong>Solução</strong>

              <p>{project.solution}</p>

              <a
                href={project.url}
                className={styles.link}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noreferrer" : undefined}
              >
                {project.cta}
                <span aria-hidden="true">→</span>
              </a>
                  
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}