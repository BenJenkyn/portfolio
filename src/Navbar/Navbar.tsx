import { Component } from "solid-js";
import styles from './navbar.module.css'

const Navbar: Component = () => {
    return (
        <nav class={styles.navbar}>
            <a href="#split_element" class={styles.list_item}>Split Element</a>
            <a href='#ontario_tech' class={styles.list_item}>Ontario Tech</a>
            <a href='#personal_projects' class={styles.list_item}>Personal Projects</a>
        </nav>
    )
}

export default Navbar