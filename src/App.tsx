import './app.css';
import type { Component } from 'solid-js';

const highlights = ['React', 'TypeScript', 'UI Design', 'Responsive Systems'];
const stack = ['SolidJS', 'Vite', 'Figma', 'Node'];

const App: Component = () => {
  return (
    <main class="page-shell">
      <section id="intro_screen" class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Software Developer</p>
          <h1>Benjamin Jenkyn</h1>
          <p class="lede">
            I build polished, accessible web experiences with a clean visual edge and a strong focus on usability.
          </p>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="visual-orb visual-orb-one"></div>
          <div class="visual-orb visual-orb-two"></div>
          <div class="info-card info-card-top">
            <span class="card-label">Currently focused on</span>
            <strong>Turning figma concepts into sharp, responsive interfaces.</strong>
          </div>
          <div class="info-card info-card-bottom">
            <span class="card-label">Toolkit</span>
            <div class="stack-row">
              {stack.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
