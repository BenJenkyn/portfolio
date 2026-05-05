import { Component, JSX } from "solid-js";
import styles from './tech_stack_item.module.css';

type TechStackItemProps = {
    icon: JSX.Element;
    name: string;
}

const TechStackItem: Component<TechStackItemProps> = (props) => {
    return (
        <div class={styles.tech_stack_item}>
            <div class={styles.tech_stack_icon}>
                {props.icon}
            </div>
            <p class={styles.tech_stack_font}>{props.name}</p>
        </div>
    );
};

export default TechStackItem;
