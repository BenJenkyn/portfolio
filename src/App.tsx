import styles from './app.module.css';
import type { Component } from 'solid-js';
import Navbar from './Navbar/Navbar';
import GlassBox from './GlassBox/GlassBox';
import { BiLogosTypescript, BiLogosHtml5, BiLogosCss3 } from 'solid-icons/bi'
import { SiJquery } from 'solid-icons/si'

const App: Component = () => {
  return (
    <main class={styles.pageShell}>
      <section id="intro_screen" class={`${styles.section} ${styles.hero}`}>
        <div class={styles.heroCopy}>
          <h1 class={styles.heroTitle}>Ben Jenkyn</h1>
          <p class={styles.eyebrow}>Software Developer</p>
          <p class={styles.lede}>
            I build polished, accessible web experiences with a clean visual edge and a strong focus on usability.
          </p>
        </div>
      </section>
      <section id="work_projects" class={`${styles.section} ${styles.workSection}`}>
        <h2 class={styles.sectionTitle}>Work Projects</h2>
        <GlassBox
          projectName='Lunch-a-Build Adventure'
          projectDescription='The project has been taken down so please see this wayback machine link for reference. [MORE DESCRIPTION HERE]'
          websiteLink='https://web.archive.org/web/20240812174437/https://www.lunchabuildadventure.com/'
          techStack={[
            { icon: <BiLogosTypescript size="32px" />, name: "TypeScript" },
            { icon: <SiJquery size="32px" />, name: "jQuery" },
            { icon: <BiLogosHtml5 size="32px" />, name: "HTML" },
            { icon: <BiLogosCss3 size="32px" />, name: "CSS" },
          ]}
        />
      </section>
      <section id="school_projects" class={`${styles.section} ${styles.workSection}`}>
        <h2 class={styles.sectionTitle}>School Projects</h2>
      </section>
      <section id="personal_projects" class={`${styles.section} ${styles.workSection}`}>
        <h2 class={styles.sectionTitle}>Personal Projects</h2>
      </section>
      <Navbar />
    </main>
  );
};

export default App;
