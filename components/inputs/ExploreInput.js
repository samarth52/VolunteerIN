import React from 'react'
import styles from "../../styles/ExploreInput.module.css";

const ExploreInput = (props) => {
  return (
    <div>
        <input className={styles.textInputStyle} placeholder={props.placeholder} onChange={(e) => {
          if (props.callbackFunction){
            props.callbackFunction(e.target.event)
          }
        }} />
    </div>
  )
}

export default ExploreInput