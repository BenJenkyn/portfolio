import styles from './app.module.css';
import solarStyles from './solar_system.module.css';
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
  SiJupyter,
  SiSolid
} from 'solid-icons/si'

const App: Component = () => {
  return (
    <main class={styles.pageShell}>
      <section id="intro_screen" class={`${styles.section} ${styles.hero}`}>
        <div class={styles.heroCopy}>
          <h1 class={styles.heroTitle}>Ben Jenkyn</h1>
          <p class={styles.eyebrow}>Software Developer</p>
          <p class={styles.lede}>
            Turning ideas into usable, well-built web apps from front-end to back-end
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
        <div class={solarStyles.heroVisual} aria-hidden="true">
          <div class={solarStyles.solarSystem}>
            <div class={solarStyles.solarGlow} />
            <div class={solarStyles.sun} />
            <div class={solarStyles.orbitOne}>
              <span class={`${solarStyles.planet} ${solarStyles.planetOne}`} />
            </div>
            <div class={solarStyles.orbitTwo}>
              <span class={`${solarStyles.planet} ${solarStyles.planetTwo}`} />
            </div>
            <div class={solarStyles.orbitThree}>
              <span class={`${solarStyles.planet} ${solarStyles.planetThree}`} />
            </div>
            <div class={solarStyles.orbitFour}>
              <span class={`${solarStyles.planet} ${solarStyles.planetFour}`} />
            </div>
            <div class={solarStyles.orbitFive}>
              <span class={`${solarStyles.planet} ${solarStyles.planetFive}`} />
            </div>
            <div class={solarStyles.orbitSix}>
              <span class={`${solarStyles.planet} ${solarStyles.planetSix}`} />
            </div>
            <div class={solarStyles.orbitSeven}>
              <span class={`${solarStyles.planet} ${solarStyles.planetSeven}`} />
            </div>
            <div class={solarStyles.stars}>
              <span class={solarStyles.starA} />
              <span class={solarStyles.starB} />
              <span class={solarStyles.starC} />
              <span class={solarStyles.starD} />
              <span class={solarStyles.starE} />
            </div>
          </div>
        </div>
      </section>
      <section id="work_projects" class={`${styles.section} ${styles.workSection}`}>
        <h2 class={styles.sectionTitle}>Work Projects</h2>
        <div class={styles.glass_box_section}>
          <GlassBox
            projectName='Lunch-a-Build Adventure'
            projectDescription='This website was a campaign by lunchables where kids could make their own lunchable creation, scan it, and then put it in the game where they could play against others to try and get a high score. I worked on the website and the tool to scan the Lunchable’s creation. Unfortunately the site has been taken down as the campaign is over but I have provided a link to the wayback machine so you can see what the home page looked like when it was running.'
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
            projectDescription='For this project we experimented with using React Native Web on the explore page. The idea was that the client already had a working mobile app in React Native and that if we could just take that and scale it up for the web it would save us a lot of time and money. It was not without its hurdles, such as styles being much more difficult to debug, but overall it was a good learning experience.'
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
            projectDescription='This was the final project for my Interactive Media class where me and my groupmate were given free range to make any type of video game we wanted in Godot. The requirements were that it needed a core loop, three distinct mechanics, a clear progression, a win/lose state and some level of UI polish. The art for the game was made using free asset packs, the links for which can be found in the GitHub. (Please note that if you want to play the game that you will need to use a browser on the desktop as it will not work properly on mobile.)'
            websiteLink='https://spetsai.itch.io/hollow-head'
            githubLink='https://github.com/BenJenkyn/interactive-media-final-project'
            techStack={[
              { icon: <SiGodotengine size="32px" />, name: "Godot" },
            ]}
          />
          <GlassBox
            projectName='Beatles Through Data'
            projectDescription='This project was for my scientific data analysis class and required the use of several Python data libraries such as numpy, pandas and matplot lib. The project involved us finding a dataset and seeing what kind of conclusions you can interpolate from the data. I am a big Beatles fan and I found a dataset that fit the assignment perfectly, so I decided to see if you could see the breakup of the Beatles happening through their music.'
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
            projectDescription='This was a game made during a game jam that a team of 2 others and I worked on for TOJam 2025. We had 3 days to work on the game and the theme was “The more there is the worse it gets”. It was a lot of fun working on the team and trying to get the game working within the time limit. (Please note that if you want to play the game that you will need to use a browser on the desktop as it will not work properly on mobile.)'
            websiteLink='https://spetsai.itch.io/exterminathan'
            githubLink='https://github.com/BenJenkyn/Croissant-Crew'
            techStack={[
              { icon: <SiUnity size="32px" />, name: "Unity" },
            ]}
          />
          <GlassBox
            projectName='Wordle Assist'
            projectDescription='This was a project I built because I was having a lot of fun with Wordle at the time and thought it would be fun to make a website to assist people in solving the daily challenge. At the same time I wanted to try out a web framework I had heard about called Svelte. This project combined those two interests will help you get the word of the day very easily.'
            websiteLink='https://wordle-guesser-76749.web.app/'
            githubLink='https://github.com/BenJenkyn/wordle_guesser'
            techStack={[
              { icon: <SiSvelte size="32px" />, name: "Svelte" },
              { icon: <BiLogosTypescript size="32px" />, name: "TypeScript" },
            ]}
          />
          <GlassBox
            projectName='This Portfolio'
            projectDescription='I built this portfolio in part to show off some of the many projects I have worked on both in and out of my career but also as a fun challenge to myself to try and build something interesting. I wanted to use solid js because it seems like it offers the same type of performance benefits as Svelete while using JSX and being similar to React. I hope you liked it!'
            githubLink='https://github.com/BenJenkyn/portfolio'
            techStack={[
              { icon: <SiSolid size="32px" />, name: "SolidJS" },
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
