import { Component, JSX } from "solid-js";
import styles from './glass_box.module.css';
import { OcGlobe3, OcMarkgithub3, OcLinkexternal3 } from 'solid-icons/oc';
import TechStackItem from './TechStackItem';

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
        <div class={styles.glass_background}>
            <h3 class={styles.project_title}>{props.projectName}</h3>
            <p>{props.projectDescription}</p>
            <div>
                <div>
                    <h4 class={styles.tech_stack_title}>Tech Stack</h4>
                    <div class={styles.tech_stack_section}>
                        {props.techStack?.map(tech => (
                            <TechStackItem icon={tech.icon} name={tech.name} />
                        ))}
                    </div>
                </div>
            </div>
            <div class={styles.link_section}>
                {props?.websiteLink && <a href={props.websiteLink} class={styles.website_link}> <OcGlobe3/> Website <OcLinkexternal3/> </a>}
                {props?.githubLink && <a href={props.githubLink} class={styles.website_link}> <OcMarkgithub3/> GitHub <OcLinkexternal3/> </a>}
            </div>
        </div>
    );
};

export default GlassBox;
