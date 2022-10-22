import React from 'react'
import styles from "../../styles/ExploreInput.module.css";

const ExploreInput = (props) => {
  return (
    <div>
        <input className={styles.textInputStyle} placeholder={props.placeholder} />
    </div>
  )
}

export default ExploreInput