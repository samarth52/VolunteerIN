import React from 'react'
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div class={styles.header}>
        <div class={styles.logo}>VolunteerIN</div>
        <div class={styles.flexContainer}>
            <div class={styles.headerText}>Dashboard</div>
            <div class={styles.headerText}>Explore</div>
            <div class={styles.headerText}>Login</div>
        </div>
    </div>
  )
}

export default Header