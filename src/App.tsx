import styles from './app.module.css';
import type { Component } from 'solid-js';
import Navbar from './Navbar/Navbar';
import GlassBox from './GlassBox/GlassBox';

const sections = ['Split Element', 'Ontario Tech', 'Personal Projects'];

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

        {/* <div class="hero-visual" aria-hidden="true">
          <div class="visual-orb visual-orb-one"></div>
          <div class="visual-orb visual-orb-two"></div>
          <div class="info-card info-card-top">
            <span class="card-label">Currently focused on</span>
            <strong>Turning figma concepts into sharp, responsive interfaces.</strong>
          </div>
          <div class="info-card info-card-bottom">
            <span class="card-label">Sections</span>
            <div class="stack-row">
              {sections.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        </div> */}
      </section>
        <section id="split_element" class={`${styles.section} ${styles.workSection}`}>
          <h2 class={styles.sectionTitle}>Split Element Inc.</h2>
          <GlassBox 
            projectName='Lunach-a-Build Adventure'
            projectDescription='The project has been taken down so please see this wayback machine link for reference. [MORE DESCRIPTION HERE]'
            websiteLink='https://web.archive.org/web/20240812174437/https://www.lunchabuildadventure.com/'
          />
      </section>
        <section id="ontario_tech" class={`${styles.section} ${styles.workSection}`}>
          <h2 class={styles.sectionTitle}>Ontario Tech University</h2>
      </section>
        <section id="personal_projects" class={`${styles.section} ${styles.workSection}`}>
          <h2 class={styles.sectionTitle}>Personal Projects</h2>
      </section>
      <Navbar/>
    </main>
  );
};

export default App;
