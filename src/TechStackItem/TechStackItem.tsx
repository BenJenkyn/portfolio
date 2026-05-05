/**
 * TechStackItem Component
 * 
 * Small card displaying a single technology with its icon and label.
 * Used within the tech stack grid of each project card.
 * 
 * @param icon - SVG icon element representing the technology
 * @param name - Human-readable name of the technology
 */

import { Component, JSX } from "solid-js";
import styles from './tech_stack_item.module.css';

/**
 * Props for the TechStackItem component.
 */
type TechStackItemProps = {
    icon: JSX.Element;
    name: string;
}

const TechStackItem: Component<TechStackItemProps> = (props) => {
    return (
        <div class={styles.techStackItem}>
            {/* Technology icon */}
            <div class={styles.techStackIcon}>
                {props.icon}
            </div>
            {/* Technology name label */}
            <p class={styles.techStackFont}>{props.name}</p>
        </div>
    );
};

export default TechStackItem;
