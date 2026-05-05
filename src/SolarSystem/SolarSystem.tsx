/**
 * SolarSystem Component
 * 
 * Interactive animated visualization of a solar system.
 * Features:
 * - Clickable sun button that triggers a flare animation
 * - Displays a random fun fact about space each time the sun is clicked
 * - Orbiting planets for visual interest
 * - Smooth animations and responsive design
 * 
 * The component uses Intersection Observer to track user interaction
 * and manages animation timers for the flare effect and fact display.
 */

import { Component, createSignal } from 'solid-js';
import styles from './solar_system.module.css';

/**
 * Array of educational facts about our solar system.
 * A random fact is displayed each time the sun button is clicked.
 */
const solarFacts = [
  'The Sun contains 99.86% of the solar system\'s mass.',
  'Sunlight takes about 8 minutes to reach Earth.',
  'Mercury is the smallest planet in our solar system',
  'Venus orbits backwards compared to the other planets.',
  'Earth is where we are.',
  'Mars has the tallest volcano in the solar system, 3 times larger than Mt. Everest.',
  'Jupiter is the largest planet and the fastest spinning, doing 1 full rotation in 10 hours.',
  'The density of Saturn is so low that it could theoretically float on water.',
  'Uranus orbits sideways compared to other planets.',
  'Neptune was discovered with math before telescopes.'
];

const SolarSystem: Component = () => {
  // State: Controls whether the sun flare animation is active
  const [sunFlare, setSunFlare] = createSignal(false);
  // State: Tracks the number of times the sun has been clicked (used to select fact)
  const [sunClickCount, setSunClickCount] = createSignal(0);
  // State: Controls whether the fun fact tooltip is visible
  const [showFact, setShowFact] = createSignal(false);
  // Timer IDs for cleanup
  let flareTimer: ReturnType<typeof setTimeout> | undefined;
  let factTimer: ReturnType<typeof setTimeout> | undefined;

  /**
   * Handles sun button clicks:
   * 1. Increments click counter (used for fact rotation)
   * 2. Triggers the sun flare animation (1100ms)
   * 3. Displays a fun fact for 3.5 seconds
   * Clears previous timers to allow rapid re-triggering.
   */
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
        {/* Background glow effect for the sun */}
        <div class={styles.solarGlow} />
        {/* Sun flare animation that plays when the button is clicked */}
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
        {/* Interactive sun button: Triggers flare animation and displays facts */}
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
        {/* Fun fact tooltip: Appears when sun is clicked, uses aria-live for accessibility */}
        <div class={styles.sunFact} classList={{ [styles.sunFactVisible]: showFact() }} aria-live="polite">
          <div class={styles.funFactHeader}>Fun Fact</div>
          <p class={styles.funFactText}>
            {solarFacts[sunClickCount() % solarFacts.length]}
          </p>
        </div>
        {/* Orbiting planets: Eight animated orbits representing planets in our solar system */}
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
