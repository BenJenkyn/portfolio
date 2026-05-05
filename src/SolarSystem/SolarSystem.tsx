import { Component, createSignal } from 'solid-js';
import styles from './solar_system.module.css';

const solarFacts = [
  'The Sun contains 99.86% of the solar system\'s mass.',
  'Sunlight takes about 8 minutes to reach Earth.',
  'Mercury is the smallest planet in our solar system',
  'Venus orbits backwards compared to the other planets',
  'Earth is where we are',
  'Mars has the tallest volcano in the solar system, 3 times larger than Mt. Everest',
  'Jupiter is the largest planet and the fastest spinning, doing 1 full rotation in 10 hours',
  'The density of Saturn is so low that it could theoretically float on water',
  'Uranus orbits sideways compared to other planets',
  'Neptune was discovered with math before telescopes'
];

const SolarSystem: Component = () => {
  const [sunFlare, setSunFlare] = createSignal(false);
  const [sunClickCount, setSunClickCount] = createSignal(0);
  const [showFact, setShowFact] = createSignal(false);
  let flareTimer: ReturnType<typeof setTimeout> | undefined;
  let factTimer: ReturnType<typeof setTimeout> | undefined;

  const handleSunClick = () => {
    setSunClickCount((count) => count + 1);
    
    // Reset and retrigger the fact animation
    setShowFact(false);
    
    // Trigger flare
    setSunFlare(true);
    if (flareTimer) clearTimeout(flareTimer);
    flareTimer = setTimeout(() => {
      setSunFlare(false);
    }, 1100);
    
    // Show fact with a tiny delay to ensure animation resets
    if (factTimer) clearTimeout(factTimer);
    setTimeout(() => {
      setShowFact(true);
      factTimer = setTimeout(() => {
        setShowFact(false);
      }, 3500);
    }, 10);
  };

  return (
    <div class={styles.heroVisual}>
      <div class={styles.solarSystem}>
        <div class={styles.solarGlow} />
        <div class={styles.sunBurst} classList={{ [styles.sunBurstActive]: sunFlare() }} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <button
          type="button"
          class={styles.sunButton}
          classList={{ [styles.sunActive]: sunFlare() }}
          aria-label="Trigger a solar flare"
          aria-pressed={sunFlare()}
          onClick={handleSunClick}
        >
          <span class={styles.sun} />
        </button>
        <div class={styles.sunFact} classList={{ [styles.sunFactVisible]: showFact() }} aria-live="polite">
          <div class={styles.funFactHeader}>Fun Fact</div>
          <p class={styles.funFactText}>
            {solarFacts[sunClickCount() % solarFacts.length]}
          </p>
        </div>
        <div class={styles.orbitOne}>
          <span class={`${styles.planet} ${styles.planetOne}`} />
        </div>
        <div class={styles.orbitTwo}>
          <span class={`${styles.planet} ${styles.planetTwo}`} />
        </div>
        <div class={styles.orbitThree}>
          <span class={`${styles.planet} ${styles.planetThree}`} />
        </div>
        <div class={styles.orbitFour}>
          <span class={`${styles.planet} ${styles.planetFour}`} />
        </div>
        <div class={styles.orbitFive}>
          <span class={`${styles.planet} ${styles.planetFive}`} />
        </div>
        <div class={styles.orbitSix}>
          <span class={`${styles.planet} ${styles.planetSix}`} />
        </div>
        <div class={styles.orbitSeven}>
          <span class={`${styles.planet} ${styles.planetSeven}`} />
        </div>
        <div class={styles.orbitEight}>
          <span class={`${styles.planet} ${styles.planetEight}`} />
        </div>
        <div class={styles.stars}>
          <span class={styles.starA} />
          <span class={styles.starB} />
          <span class={styles.starC} />
          <span class={styles.starD} />
          <span class={styles.starE} />
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
