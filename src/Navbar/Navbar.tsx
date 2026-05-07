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

import { Component, createSignal, onMount, onCleanup, createEffect, For } from 'solid-js';
import { BiSolidHome } from "solid-icons/bi";
import styles from './navbar.module.css'

/**
 * Represents the available portfolio sections.
 */
type Section = 'home' | 'work' | 'school' | 'personal';

/**
 * Configuration for each navigable section.
 */
interface SectionConfig {
  id: Section;
  label: string;
  targetId: string;
}

interface NavbarProps {
  footerTopInViewport: number | null;
}

/**
 * Navigation section definitions with their display labels and target element IDs.
 */
const sections: SectionConfig[] = [
  { id: 'home', label: 'Home', targetId: 'intro_screen' },
  { id: 'work', label: 'Work', targetId: 'work_projects' },
  { id: 'school', label: 'School', targetId: 'school_projects' },
  { id: 'personal', label: 'Personal', targetId: 'personal_projects' },
];

const Navbar: Component<NavbarProps> = (props) => {
  // State: Currently active section
  const [activeSection, setActiveSection] = createSignal<Section>('home');
  // State: CSS positioning for the active section indicator line
  const [indicatorStyle, setIndicatorStyle] = createSignal({ left: '0px', width: '0px' });
  // State: Fixed bottom offset that expands upward when the footer reaches the navbar.
  const [bottomOffset, setBottomOffset] = createSignal('0.25rem');
  // Flag to distinguish user scroll from programmatic scroll (prevents double-triggering)
  let isProgrammaticScroll = false;
  // DOM references for the navbar and navigation items
  let navRef: HTMLElement | undefined;
  let itemRefs: Record<Section, HTMLElement> = {} as Record<Section, HTMLElement>;
  let scrollTimeoutId: ReturnType<typeof setTimeout> | null = null;

  const getBaseBottomOffset = () =>
    window.matchMedia('(min-width: 381px)').matches ? 8 : 4;

  const updateBottomOffset = () => {
    const footerTop = props.footerTopInViewport;
    const baseBottomOffset = getBaseBottomOffset();

    if (footerTop === null) {
      setBottomOffset(`${baseBottomOffset}px`);
      return;
    }

    // Convert 0.5rem to pixels so we can add a consistent gap above the footer.
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const gapPx = rootFontSize * 0.5; // 0.5rem in px

    const distanceFromFooterTopToViewportBottom = window.innerHeight - footerTop;
    const desiredOffset = distanceFromFooterTopToViewportBottom + gapPx;

    const footerAwareBottomOffset = Math.max(baseBottomOffset, Math.round(desiredOffset));

    setBottomOffset(`${footerAwareBottomOffset}px`);
  };

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
   * @param sectionId - ID of the section (home, work, school, or personal)
   */
  const scrollToSection = (targetId: string, sectionId: Section) => {
    if (sectionId === 'home') {
      setActiveSection('home');
      beginProgrammaticScroll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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

    setIndicatorStyle({ left: '0px', width: '0px' });
  };

  onMount(() => {
    // Initialize indicator position on mount
    updateIndicator();
    updateBottomOffset();
    // Recalculate indicator on window resize
    window.addEventListener('resize', updateIndicator);
    window.addEventListener('resize', updateBottomOffset);

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
          const sectionConfig = sections.find(s => s.targetId === entry.target.id);
          if (sectionConfig) {
            setActiveSection(sectionConfig.id);
          }
        }
      });
    }, observerOptions);

    // Observe all sections for intersection changes
    sections.forEach((section) => {
      const element = document.getElementById(section.targetId);
      if (element) observer.observe(element);
    });

    // Cleanup: Remove listeners and stop observing on component unmount
    onCleanup(() => {
      window.removeEventListener('resize', updateIndicator);
      window.removeEventListener('resize', updateBottomOffset);
      observer.disconnect();
    });
  });

  createEffect(updateIndicator);
  createEffect(updateBottomOffset);

  return (
    <nav class={styles.navbar} ref={navRef} style={{ bottom: bottomOffset() }}>
      {/* Animated indicator line that follows the active nav item */}
      <div class={styles.indicatorBackground} style={{
        left: indicatorStyle().left,
        width: indicatorStyle().width,
        opacity: indicatorStyle().width !== '0px' ? '1' : '0',
      }} />
      {/* Section navigation links */}
      <For each={sections}>
        {(section) => (
          <button
            ref={(el) => (itemRefs[section.id] = el)}
            class={`${styles.listItem} ${activeSection() === section.id ? styles.active : ''}`}
            onClick={() => scrollToSection(section.targetId, section.id)}
            aria-label={section.id === 'home' ? 'Go to home' : `Scroll to ${section.label}`}
          >
            {section.id === 'home'
              ? <BiSolidHome style={{ width: '18px', height: '18px' }} aria-hidden="true" />
              : section.label}
          </button>
        )}
      </For>
    </nav>
  );
};

export default Navbar;