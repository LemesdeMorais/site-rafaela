import { copy } from "@/content/copy";

import styles from "./Footer.module.scss";

export function Footer() {
  const { footer } = copy;

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <span className={styles.eyebrow}>{footer.eyebrow}</span>

            <strong>{footer.name}</strong>

            <p>{footer.role}</p>
          </div>

          <nav className={styles.navigation} aria-label="Navegação do rodapé">
            <span>Navegação</span>

            <div>
              {footer.navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className={styles.social}>
            <span>Conecte-se</span>

            <div>
              <a href={footer.github.url} target="_blank" rel="noreferrer">
                {footer.github.label}
                <span aria-hidden="true">↗</span>
              </a>

              <a href={footer.linkedin.url} target="_blank" rel="noreferrer">
                {footer.linkedin.label}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <small>{footer.copyright}</small>

          <span className={styles.signature}>
            {footer.signature.split("{heart}")[0]}

            <span aria-hidden="true">♥</span>

            {footer.signature.split("{heart}")[1]}
          </span>

          <a className={styles.backToTop} href="#apresentacao">
            Voltar ao topo
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
