import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ReplayOnView } from "@/components/motion/ReplayOnView";
import { Reveal } from "@/components/motion/Reveal";
import { copy } from "@/content/copy";

import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <Section id="projetos">
      <Container>
        <ReplayOnView threshold={0.08}>
          <Reveal>
            <div className={styles.header}>
              <span>{copy.projects.eyebrow}</span>

              <h2>{copy.projects.title}</h2>
            </div>
          </Reveal>

          <div className={styles.grid}>
            {copy.projects.items.map((project, index) => (
              <Reveal key={project.company} delay={0.08 + index * 0.12}>
                <article className={styles.card}>
                  <div className={styles.top}>
                    <div>
                      <small>{project.category}</small>

                      <h3>{project.company}</h3>

                      <p className={styles.summary}>{project.summary}</p>
                    </div>

                    <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className={styles.details}>
                    <section>
                      <strong>Problema</strong>

                      <p>{project.problem}</p>
                    </section>

                    <section>
                      <strong>Solução</strong>

                      <p>{project.solution}</p>
                    </section>
                  </div>

                  <ul className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <div className={styles.actions}>
                    <a href={project.url} className={styles.link} target="_blank" rel="noreferrer">
                      {project.cta}
                      <span aria-hidden="true">→</span>
                    </a>

                    {"demo" in project && project.demo && (
                      <a
                        href={project.demo}
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Assistir demonstração
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
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
