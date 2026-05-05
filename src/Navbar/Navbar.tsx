import { Component, createSignal, onMount, onCleanup, createEffect, For } from "solid-js";
import { BiSolidHome } from "solid-icons/bi";
import styles from './navbar.module.css'

type Section = 'work' | 'school' | 'personal';

interface SectionConfig {
  id: Section;
  label: string;
  targetId: string;
}

const sections: SectionConfig[] = [
  { id: 'work', label: 'Work', targetId: 'work_projects' },
  { id: 'school', label: 'School', targetId: 'school_projects' },
  { id: 'personal', label: 'Personal', targetId: 'personal_projects' },
];

const homeTargetId = 'intro_screen';

const Navbar: Component = () => {
  const [activeSection, setActiveSection] = createSignal<Section | null>(null);
  const [indicatorStyle, setIndicatorStyle] = createSignal({ left: '0px', width: '0px' });
  let isProgrammaticScroll = false;
  let navRef: HTMLElement | undefined;
  let itemRefs: Record<Section, HTMLElement> = {} as Record<Section, HTMLElement>;
  let homeRef: HTMLElement | undefined;
  let scrollTimeoutId: ReturnType<typeof setTimeout> | null = null;

  const beginProgrammaticScroll = () => {
    isProgrammaticScroll = true;
    if (scrollTimeoutId) clearTimeout(scrollTimeoutId);
    scrollTimeoutId = setTimeout(() => {
      isProgrammaticScroll = false;
    }, 1000);
  };

  const scrollToSection = (targetId: string, sectionId: Section) => {
    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(sectionId);
      beginProgrammaticScroll();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

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

    sections.forEach((section) => {
      const element = document.getElementById(section.targetId);
      if (element) observer.observe(element);
    });

    const homeElement = document.getElementById(homeTargetId);
    if (homeElement) observer.observe(homeElement);

    onCleanup(() => {
      window.removeEventListener('resize', updateIndicator);
      observer.disconnect();
    });
  });

  createEffect(updateIndicator);

  return (
    <nav class={styles.navbar} ref={navRef}>
      <div class={styles.indicatorBackground} style={{
        left: indicatorStyle().left,
        width: indicatorStyle().width,
        opacity: indicatorStyle().width !== '0px' ? '1' : '0',
      }} />
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