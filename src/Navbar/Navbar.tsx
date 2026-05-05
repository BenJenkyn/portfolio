/**
 * Navbar Component
 * 
 * Sticky navigation bar that enables smooth scrolling to different portfolio sections.
 * Features:
 * - Smooth scroll animation to section targets
 * - Active section indicator line that follows the current section
 * - Intersection Observer to detect which section is in viewport
 * - Home button to return to intro screen
 * - Mobile-friendly design
 * 
 * The active section is determined by which section is visible in the viewport center,
 * or can be manually set by clicking navigation links.
 */

import { Component, createSignal, onMount, onCleanup, createEffect, For } from "solid-js";
import { BiSolidHome } from "solid-icons/bi";
import styles from './navbar.module.css'

/**
 * Represents the available portfolio sections.
 */
type Section = 'work' | 'school' | 'personal';

/**
 * Configuration for each navigable section.
 */
interface SectionConfig {
  id: Section;
  label: string;
  targetId: string;
}

/**
 * Navigation section definitions with their display labels and target element IDs.
 */
const sections: SectionConfig[] = [
  { id: 'work', label: 'Work', targetId: 'work_projects' },
  { id: 'school', label: 'School', targetId: 'school_projects' },
  { id: 'personal', label: 'Personal', targetId: 'personal_projects' },
];

/**
 * ID of the intro section used when home button is clicked.
 */
const homeTargetId = 'intro_screen';

const Navbar: Component = () => {
  // State: Currently active section (or null for intro screen)
  const [activeSection, setActiveSection] = createSignal<Section | null>(null);
  // State: CSS positioning for the active section indicator line
  const [indicatorStyle, setIndicatorStyle] = createSignal({ left: '0px', width: '0px' });
  // Flag to distinguish user scroll from programmatic scroll (prevents double-triggering)
  let isProgrammaticScroll = false;
  // DOM references for the navbar and navigation items
  let navRef: HTMLElement | undefined;
  let itemRefs: Record<Section, HTMLElement> = {} as Record<Section, HTMLElement>;
  let homeRef: HTMLElement | undefined;
  let scrollTimeoutId: ReturnType<typeof setTimeout> | null = null;

  /**
   * Marks the scroll as programmatic (user clicked a nav link).
   * Sets a timeout to reset the flag so Intersection Observer takes over again.
   */
  const beginProgrammaticScroll = () => {
    isProgrammaticScroll = true;
    if (scrollTimeoutId) clearTimeout(scrollTimeoutId);
    scrollTimeoutId = setTimeout(() => {
      isProgrammaticScroll = false;
    }, 1000);
  };

  /**
   * Scrolls to a target section with smooth animation.
   * Marks scroll as programmatic to prevent Intersection Observer from interfering.
   * 
   * @param targetId - ID of the section element to scroll to
   * @param sectionId - ID of the section (work, school, or personal)
   */
  const scrollToSection = (targetId: string, sectionId: Section) => {
    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(sectionId);
      beginProgrammaticScroll();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Updates the position and width of the active section indicator line.
   * The indicator follows the currently active nav item horizontally.
   * Falls back to home indicator if no section is active.
   */
  const updateIndicator = () => {
    const active = activeSection();
    const nav = navRef;
    if (nav) {
      if (active) {
        const activeElement = itemRefs[active];
        if (activeElement) {
          const itemRect = activeElement.getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          setIndicatorStyle({
            left: `${itemRect.left - navRect.left}px`,
            width: `${itemRect.width}px`,
          });
          return;
        }
      }

      if (homeRef) {
        const itemRect = homeRef.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        setIndicatorStyle({
          left: `${itemRect.left - navRect.left}px`,
          width: `${itemRect.width}px`,
        });
        return;
      }
    }

    setIndicatorStyle({ left: '0px', width: '0px' });
  };

  onMount(() => {
    // Initialize indicator position on mount
    updateIndicator();
    // Recalculate indicator on window resize
    window.addEventListener('resize', updateIndicator);

    /**
     * Intersection Observer Configuration:
     * - root: viewport (null = use default)
     * - rootMargin: -50% top/bottom means trigger when section is in center of viewport
     * - threshold: 0 means any visibility triggers the observer
     */
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    /**
     * Observer callback: Updates active section when one enters the viewport center.
     * Only processes changes if scroll is user-initiated (not programmatic).
     */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isProgrammaticScroll) {
          if (entry.target.id === homeTargetId) {
            setActiveSection(null);
            return;
          }

          const sectionConfig = sections.find(s => s.targetId === entry.target.id);
          if (sectionConfig) {
            setActiveSection(sectionConfig.id);
          }
        }
      });
    }, observerOptions);

    // Observe all project sections for intersection changes
    sections.forEach((section) => {
      const element = document.getElementById(section.targetId);
      if (element) observer.observe(element);
    });

    // Observe home section (intro screen)
    const homeElement = document.getElementById(homeTargetId);
    if (homeElement) observer.observe(homeElement);

    // Cleanup: Remove listeners and stop observing on component unmount
    onCleanup(() => {
      window.removeEventListener('resize', updateIndicator);
      observer.disconnect();
    });
  });

  createEffect(updateIndicator);

  return (
    <nav class={styles.navbar} ref={navRef}>
      {/* Animated indicator line that follows the active nav item */}
      <div class={styles.indicatorBackground} style={{
        left: indicatorStyle().left,
        width: indicatorStyle().width,
        opacity: indicatorStyle().width !== '0px' ? '1' : '0',
      }} />
      {/* Home button: Scrolls to intro screen and resets active section */}
      <button
        ref={(el) => (homeRef = el)}
        class={`${styles.listItem} ${activeSection() === null ? styles.active : ''}`}
        onClick={() => {
          setActiveSection(null);
          beginProgrammaticScroll();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Go to home"
      >
        <BiSolidHome style={{ width: '18px', height: '18px' }} aria-hidden="true" />
      </button>
      {/* Project section navigation links */}
      <For each={sections}>
        {(section) => (
          <button
            ref={(el) => (itemRefs[section.id] = el)}
            class={`${styles.listItem} ${activeSection() === section.id ? styles.active : ''}`}
            onClick={() => scrollToSection(section.targetId, section.id)}
            aria-label={`Scroll to ${section.label}`}
          >
            {section.label}
          </button>
        )}
      </For>
    </nav>
  );
};

export default Navbar;