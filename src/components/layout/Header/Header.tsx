import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

import styles from "./Header.module.scss";

const links = [
  { label: "Início", href: "#apresentacao" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("apresentacao");

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    function handleResize() {
      if (window.innerWidth > 760) {
        setIsOpen(false);
      }
    }

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <a
        className={styles.logo}
        href="#apresentacao"
        aria-label="Ir para o início"
        onClick={closeMenu}
      >
        RL
      </a>

      <nav
        id="main-navigation"
        className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
        aria-label="Navegação principal"
      >
        {links.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? styles.active : undefined}
              aria-current={isActive ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <div className={styles.actions}>
        <ThemeToggle />

        <button
          className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
