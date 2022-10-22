import React, { useState, useEffect } from 'react'
import styles from "../../styles/DropdownInput.module.css";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";

const DropDownInput = (props) => {

  const [open, setOpen] = useState(false); 
  const [fieldValue, setFieldValue] = useState("");
  const [selectedOptions, setSelectedOptions] = React.useState(
    new Set()
  );
  useEffect(() => {
    setFieldValue(props.placeHolder)
    
  }, [])
  

  return (
    <div className={styles.container}>
  <div className={styles.fieldContainer} onClick={() => {
    setOpen(!open)
  }}>
    {props.placeHolder === fieldValue ? <div className={styles.notSelected}>{fieldValue}</div> : <div className={styles.selected}>{fieldValue}</div>}
    <IoIosArrowDown style={{color: 'black', fontSize: "1.4em", marginLeft: "auto"}} />
    </div>

    {open && <div className={styles.dropDownContainer}>
      {open && props.options.map((option, index) => {
        return (<div key={index} className={styles.optionContainer} onClick={() => {
          const selectedOptionsCopy = selectedOptions;
          if (selectedOptions.has(option)){
            selectedOptionsCopy.delete(option);
            setSelectedOptions(new Set([...selectedOptionsCopy]));
          }else {
            selectedOptionsCopy.add(option);
            setSelectedOptions(new Set([...selectedOptionsCopy]));
          }
          if (selectedOptionsCopy.size === 1){
            setFieldValue([...selectedOptionsCopy][0]);
          } else if (selectedOptionsCopy.size === 0) {
            setFieldValue(props.placeHolder);
          } else {
            setFieldValue("Many Options Selected");
          }
          if (props.callbackFunction){
            props.callbackFunction([...selectedOptionsCopy])
          }
        }}>
          <div>{option}</div>
          {selectedOptions.has(option) && <IoMdCheckmark style={{color: 'black', fontSize: "1.4em", marginLeft: "auto"}}/>}
        </div>)
      })}
    </div>}
  </div>)
}

export default DropDownInput;