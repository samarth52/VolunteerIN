import React from 'react'
import styles from "../../styles/LongTextInput.module.css";

const LongTextInput = (props) => {
  return (
    <textarea className={styles.textInputStyle} name="Text1" cols="40" rows="5" onChange={() =>{
      if (props.callbackFunction){
        props.callbackFunction(e.target.value)
      }
    }
    }></textarea>

  )
}

export default LongTextInput;