import React, { useState, useEffect } from 'react'
import styles from "../styles/ExperienceSection.module.css";
import DateInput from './inputs/DateInput';
import LongTextInput from './inputs/LongTextInput';
import TextInput from './inputs/TextInput';

const ExperienceSection = (props) => {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  
  useEffect(() => {
    const functionsCopy = { ...props.experienceFunctions }
    functionsCopy[props.index] = () => {
      return { title, organization, startDate, endDate, description }
    }
    props.setExperienceFunctions(functionsCopy)
  }, [title, organization, startDate, endDate, description]);

  const [currentlyWork, setCurrentlyWork] = useState(false);
  return (
    <div className={styles.container}>
                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Organization Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Organization Name" callbackFunction={setOrganization}/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Title<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Title" callbackFunction={setTitle}/>
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
                          <div>I currently work here</div>
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

export default ExperienceSection;