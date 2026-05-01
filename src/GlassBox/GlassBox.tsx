import { Component } from "solid-js";
import styles from './glass_box.module.css';
import { OcGlobe3, OcMarkgithub3, OcLinkexternal3 } from 'solid-icons/oc'

type GlassBoxProps = {
    projectName: string;
    projectDescription: string;
    websiteLink?: string;
    githubLink?: string;
}

const GlassBox: Component<GlassBoxProps> = (props) => {
    return (
        <div class={styles.glass_background}>
            <h3>{props.projectName}</h3>
            <p>{props.projectDescription}</p>
            <nav class={styles.link_section}>
                {props?.websiteLink && <a href={props.websiteLink} class={styles.website_link}> <OcGlobe3/> Website <OcLinkexternal3/> </a>}
                {props?.githubLink && <a href={props.githubLink} class={styles.website_link}> <OcMarkgithub3/> GitHub <OcLinkexternal3/> </a>}
            </nav>
        </div>
    );
};

export default GlassBox;
