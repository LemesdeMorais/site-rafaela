import styles from "./App.module.scss";

import { Header } from "@/components/layout/Header";
import { PointerEffects } from "@/components/motion/PointerEffects";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Presentation } from "@/components/sections/Presentation";
import { Projects } from "@/components/sections/Projects";
import { Prologue } from "@/components/sections/Prologue";
import { Solutions } from "@/components/sections/Solutions";

function App() {
  return (
    <>
      <Header />

      <PointerEffects>
        <main className={styles.app}>
          <Prologue />
          <Presentation />
          <Solutions />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </PointerEffects>
    </>
  );
}

export default App;
