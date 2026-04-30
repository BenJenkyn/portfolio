import './app.css';
import type { Component } from 'solid-js';
import Navbar from './Navbar/Navbar';

const sections = ['Split Element', 'Ontario Tech', 'Personal Projects'];

const App: Component = () => {
  return (
    <main class="page-shell">
      <section id="intro_screen" class="hero">
        <div class="hero-copy">
          <h1>Ben Jenkyn</h1>
          <p class="eyebrow">Software Developer</p>
          <p class="lede">
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
      <section id="split_element">
          <h2>Split Element Inc.</h2>
      </section>
      <section id="ontario_tech">
          <h2>Ontario Tech University</h2>
      </section>
      <section id="personal_projects">
          <h2>Personal Projects</h2>
      </section>
      <Navbar/>
    </main>
  );
};

export default App;
