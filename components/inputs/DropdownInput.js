import React from 'react'
import styles from "../../styles/DropdownInput.module.css";

const DropDownInput = (props) => {
  return (
    <select className={styles.container} multiple={props.isMultiple}>
        {props.options.map((option, index) => {
            return(<option key={index} value={option}>{option}</option>)
        })}
        
    </select> 
  )
}

export default DropDownInput;