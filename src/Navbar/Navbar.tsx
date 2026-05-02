import { Component } from "solid-js";
import styles from './navbar.module.css'

const Navbar: Component = () => {
    return (
        <nav class={styles.navbar}>
            <a href="#work_projects" class={styles.list_item}>Work</a>
            <a href='#school_projects' class={styles.list_item}>School</a>
            <a href='#personal_projects' class={styles.list_item}>Personal</a>
        </nav>
    )
}

export default Navbar