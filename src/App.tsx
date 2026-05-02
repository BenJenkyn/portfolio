import styles from './app.module.css';
import type { Component } from 'solid-js';
import Navbar from './Navbar/Navbar';
import GlassBox from './GlassBox/GlassBox';
import {
  BiLogosTypescript,
  BiLogosHtml5,
  BiLogosCss3,
  BiLogosJavascript,
  BiLogosReact,
  BiLogosNodejs,
  BiLogosFirebase,
  BiLogosJquery,
} from 'solid-icons/bi'
import { SiStrapi } from 'solid-icons/si'

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
        <div class={styles.glass_box_section}>
          <GlassBox
            projectName='Lunch-a-Build Adventure'
            projectDescription='The project has been taken down so please see this wayback machine link for reference. [MORE DESCRIPTION HERE]'
            websiteLink='https://web.archive.org/web/20240812174437/https://www.lunchabuildadventure.com/'
            techStack={[
              { icon: <BiLogosTypescript size="32px" />, name: "TypeScript" },
              { icon: <BiLogosJquery size="32px" />, name: "jQuery" },
              { icon: <BiLogosHtml5 size="32px" />, name: "HTML" },
              { icon: <BiLogosCss3 size="32px" />, name: "CSS" },
              { icon: <BiLogosFirebase size="32px" />, name: "Firebase" },
            ]}
          />
          <GlassBox
            projectName='Zonetail Home'
            projectDescription='For this project we experimented with using React Native Web for the explore page. [DESCRIPTION HERE]'
            websiteLink='https://www.zonetailhome.com/'
            techStack={[
              { icon: <BiLogosTypescript size="32px" />, name: "TypeScript" },
              { icon: <BiLogosReact size="32px" />, name: "React/React Native" },
              { icon: <BiLogosNodejs size="32px" />, name: "NodeJS" },
              { icon: <BiLogosJavascript size="32px" />, name: "JavaScript" },
              { icon: <SiStrapi size="32px" />, name: "Strapi" },
            ]}
          />
        </div>
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
