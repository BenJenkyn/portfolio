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
  BiLogosPython,
  BiLogosGithub,
  BiLogosLinkedin,
} from 'solid-icons/bi'
import { 
  SiStrapi, 
  SiGodotengine, 
  SiUnity, 
  SiSvelte,
  SiJupyter
} from 'solid-icons/si'

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
          <div class={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/benjamin-jenkyn/" target="linkedin" rel="noopener noreferrer" class={styles.socialLink} aria-label="LinkedIn">
              <BiLogosLinkedin size="24px" />
            </a>
            <a href="https://github.com/BenJenkyn" target="_blank" rel="noopener noreferrer" class={styles.socialLink} aria-label="GitHub">
              <BiLogosGithub size="24px" />
            </a>
          </div>
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
        <div class={styles.glass_box_section}>
          <GlassBox
            projectName='Hollow Head (Video Game)'
            projectDescription='This was the final project for my Interactive Media class where we made a video game in whatever way we wanted as long as we used Godot. If you want to play it in the browser you will need to be running it on a desktop. [DESCRIPTION HERE]'
            websiteLink='https://spetsai.itch.io/hollow-head'
            githubLink='https://github.com/BenJenkyn/interactive-media-final-project'
            techStack={[
              { icon: <SiGodotengine size="32px" />, name: "Godot" },
            ]}
          />
          <GlassBox
            projectName='Beatles Through Data'
            projectDescription='This project was for my scientific data analysis class [DESCRIPTION HERE]'
            githubLink='https://github.com/BenJenkyn/beatles-through-data/blob/main/assignment1.ipynb'
            techStack={[
              { icon: <BiLogosPython size="32px" />, name: "Python" },
              { icon: <SiJupyter size="32px" />, name: "Jupyter Notebook" },
            ]}
          />
        </div>
      </section>
      <section id="personal_projects" class={`${styles.section} ${styles.workSection}`}>
        <h2 class={styles.sectionTitle}>Personal Projects</h2>
        <div class={styles.glass_box_section}>
          <GlassBox
            projectName='Exterminathan (Video Game)'
            projectDescription='This was a project that me and a team of 2 others built for the TOJam 2025 game jam. If you want to play it in the browser you will need to be running it on a desktop. [DESCRIPTION HERE]'
            websiteLink='https://spetsai.itch.io/exterminathan'
            githubLink='https://github.com/BenJenkyn/Croissant-Crew'
            techStack={[
              { icon: <SiUnity size="32px" />, name: "Unity" },
            ]}
          />
          <GlassBox
            projectName='Wordle Assist'
            projectDescription='This was a project I built because I was having a lot of fun with Wordle at the time and wanted to try out a web framework I had heard about called Svelte, so this project combined the two interests. The basic premise of this website is that it helps you to cheat at Wordle.'
            websiteLink='https://wordle-guesser-76749.web.app/'
            githubLink='https://github.com/BenJenkyn/wordle_guesser'
            techStack={[
              { icon: <SiSvelte size="32px" />, name: "Svelte" },
              { icon: <BiLogosTypescript size="32px" />, name: "TypeScript" },
            ]}
          />
        </div>
      </section>
      <Navbar />
    </main>
  );
};

export default App;
