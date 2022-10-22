import React from 'react'
import styles from "../../styles/DateInput.module.css";

const DateInput = (props) => {
  return (
    <div className={styles.container}>
            <input id="year" className={styles.year} placeholder="YYYY"/>
            <input id="month" className={styles.month} placeholder="MM"/>
            <input id="day" className={styles.day} placeholder="DD"/>
    </div>

  )
}

export default DateInput;