import { Component, JSX } from "solid-js";
import styles from './glass_box.module.css';
import { OcGlobe3, OcMarkgithub3, OcLinkexternal3 } from 'solid-icons/oc';
import TechStackItem from '../TechStackItem/TechStackItem';

type TechStack = {
    icon: JSX.Element;
    name: string;
}

type GlassBoxProps = {
    projectName: string;
    projectDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack?: TechStack[];
}

const GlassBox: Component<GlassBoxProps> = (props) => {
    return (
        <div class={styles.glassBackground}>
            <h3 class={styles.projectTitle}>{props.projectName}</h3>
            <p>{props.projectDescription}</p>
            <div>
                <div>
                    <h4 class={styles.techStackTitle}>Tech Stack</h4>
                    <div class={styles.techStackSection}>
                        {props.techStack?.map(tech => (
                            <TechStackItem icon={tech.icon} name={tech.name} />
                        ))}
                    </div>
                </div>
            </div>
            <div class={styles.linkSection}>
                {props?.websiteLink && <a href={props.websiteLink} class={styles.websiteLink} target="_blank" rel="noopener noreferrer"> <OcGlobe3/> Website <OcLinkexternal3/> </a>}
                {props?.githubLink && <a href={props.githubLink} class={styles.websiteLink} target="_blank" rel="noopener noreferrer"> <OcMarkgithub3/> GitHub <OcLinkexternal3/> </a>}
            </div>
        </div>
    );
};

export default GlassBox;
