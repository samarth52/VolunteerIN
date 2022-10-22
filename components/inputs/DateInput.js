import React, {useState} from 'react'
import styles from "../../styles/DateInput.module.css";

const DateInput = (props) => {
  const [year, setYear] = useState((new Date()).getFullYear());
  const [month, setMonth] = useState((new Date()).getMonth());
  const [day, setDay] = useState((new Date()).getDay());

  return (
    <div className={styles.container}>
            <input maxLength="4" id="year" className={styles.year} placeholder="YYYY" onChange={(e) => {
              if (!isNaN(document.getElementById("year").value)){
                setYear(e.target.value);
              } else {
                document.getElementById("year").value = ''
              }

              props.callbackFunction(new Date(year, month - 1, day))
            }}/>
            <input maxLength="2" id="month" className={styles.month} placeholder="MM" onChange={(e) => {
              if (!isNaN(document.getElementById("month").value)){
                setMonth(e.target.value);
              } else {
                document.getElementById("month").value = ''
              }
              props.callbackFunction(new Date(year, month - 1, day))

            }}/>
            <input maxLength="2" id="day" className={styles.day} placeholder="DD" onChange={(e) => {
              if (!isNaN(document.getElementById("day").value)){
                setDay(e.target.value);
              } else {
                document.getElementById("day").value = ''
              }
              props.callbackFunction(new Date(year, month - 1, day))

            }}/>
    </div>
  )
}

export default DateInput;