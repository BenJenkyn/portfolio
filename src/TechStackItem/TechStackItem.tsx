import { Component, JSX } from "solid-js";
import styles from './tech_stack_item.module.css';

type TechStackItemProps = {
    icon: JSX.Element;
    name: string;
}

const TechStackItem: Component<TechStackItemProps> = (props) => {
    return (
        <div class={styles.techStackItem}>
            <div class={styles.techStackIcon}>
                {props.icon}
            </div>
            <p class={styles.techStackFont}>{props.name}</p>
        </div>
    );
};

export default TechStackItem;
