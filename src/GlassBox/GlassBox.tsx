/**
 * GlassBox Component
 * 
 * Reusable project card component that displays:
 * - Project name and description
 * - Technology stack with icons
 * - Links to website and GitHub repository
 * 
 * Used across all project showcase sections (work, school, personal).
 */

import { Component, JSX } from "solid-js";
import styles from './glass_box.module.css';
import { OcGlobe3, OcMarkgithub3, OcLinkexternal3 } from 'solid-icons/oc';
import TechStackItem from '../TechStackItem/TechStackItem';

/**
 * Represents a single technology used in a project.
 */
type TechStack = {
    icon: JSX.Element;
    name: string;
}

/**
 * Props for the GlassBox component.
 * @param projectName - Title of the project
 * @param projectDescription - Detailed description of the project and its purpose
 * @param websiteLink - Optional URL to the live project or demo
 * @param githubLink - Optional URL to the GitHub repository
 * @param techStack - Optional array of technologies used in the project
 */
type GlassBoxProps = {
    projectName: string;
    projectDescription: string | JSX.Element;
    websiteLink?: string;
    githubLink?: string;
    techStack?: TechStack[];
}

const GlassBox: Component<GlassBoxProps> = (props) => {
    return (
        <div class={styles.glassBackground}>
            {/* Project title */}
            <h3 class={styles.projectTitle}>{props.projectName}</h3>
            {/* Project description and context */}
            <p>{props.projectDescription}</p>
            <div>
                {/* Technology stack display */}
                <div>
                    <h4 class={styles.techStackTitle}>Tech Stack</h4>
                    <div class={styles.techStackSection}>
                        {props.techStack?.map(tech => (
                            <TechStackItem icon={tech.icon} name={tech.name} />
                        ))}
                    </div>
                </div>
            </div>
            {/* External links: Live website and GitHub repository */}
            <div class={styles.linkSection}>
                {props?.websiteLink && <a href={props.websiteLink} class={styles.websiteLink} target="_blank" rel="noopener noreferrer"> <OcGlobe3/> Website <OcLinkexternal3/> </a>}
                {props?.githubLink && <a href={props.githubLink} class={styles.websiteLink} target="_blank" rel="noopener noreferrer"> <OcMarkgithub3/> GitHub <OcLinkexternal3/> </a>}
            </div>
        </div>
    );
};

export default GlassBox;
