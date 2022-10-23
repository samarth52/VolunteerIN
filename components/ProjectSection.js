import React, { useState, useEffect } from 'react'
import styles from "../styles/ProjectSection.module.css";
import DateInput from './inputs/DateInput';
import LongTextInput from './inputs/LongTextInput';
import TextInput from './inputs/TextInput';

const ProjectSection = (props) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  
  useEffect(() => {
    const functionsCopy = { ...props.projectFunctions }
    functionsCopy[props.index] = () => {
      return { name, location, startDate, endDate, description }
    }
    props.setProjectFunctions(functionsCopy)
  }, [name, location, startDate, endDate, description]);

  const [currentlyWork, setCurrentlyWork] = useState(false);
  return (
    <div className={styles.container}>
                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Project Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Project Name" callbackFunction={setName}/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Location<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Project Location" callbackFunction={setLocation}/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Start Date<span className={styles.required}>*</span></div>
                        <DateInput callbackFunction={setStartDate}/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                      <div className={styles.endDateContainer}>
                        <div className={styles.subheaderText}>End Date<span className={styles.required}>*</span></div>
                        
                        <div className={styles.endBoxContainer}>
                          <input className={styles.endCheckBox} type="checkbox" onChange={() => {
                            if (currentlyWork){
                              setCurrentlyWork(false);
                              setEndDate("");
                            } else {
                              setCurrentlyWork(true);
                              setEndDate("Present");
                            }
                          }}/>
                          <div>This Project is Ongoing</div>
                        </div>
                        </div>
                        {!currentlyWork && <DateInput callbackFunction={setEndDate}/>}
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Description<span className={styles.required}>*</span></div>
                        <LongTextInput callbackFunction={setDescription}/>
                    </div>
                </div>



    </div>
  )
}

export default ProjectSection;