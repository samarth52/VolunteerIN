import React from 'react'
import styles from "../styles/Header.module.css";

const Header = ({logoTitle}) => {
  return (
    <div class={styles.header}>
        <div class={styles.logo}>{logoTitle}</div>
        <div class={styles.flexContainer}>
            <div class={styles.headerText}>Dashboard</div>
            <div class={styles.headerText}>Explore</div>
            <div class={styles.headerText}>Login</div>
        </div>
    </div>
  )
}

export default Header