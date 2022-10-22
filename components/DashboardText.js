import React from 'react'
import styles from "../styles/Home.module.css";

const DashboardText = (props) => {
  return (
    <div class={styles.fontOutfit}>{props.text}</div>
  )
}

export default DashboardText