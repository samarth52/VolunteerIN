import React from 'react'
import styles from "../../styles/TextInput.module.css";

const TextInput = (props) => {
  return (
    <input className={styles.textInputStyle} placeholder={props.placeholder}/>

  )
}

export default TextInput;