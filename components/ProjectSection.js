import React, {useState} from 'react'
import styles from "../styles/ProjectSection.module.css";
import DateInput from './inputs/DateInput';
import LongTextInput from './inputs/LongTextInput';
import TextInput from './inputs/TextInput';

const ProjectSection = (props) => {

  const [currentlyWork, setCurrentlyWork] = useState(false);
  return (
    <div className={styles.container}>
                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Project Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Project Name"/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Location<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Project Location"/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Start Date<span className={styles.required}>*</span></div>
                        <DateInput/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                      <div className={styles.endDateContainer}>
                        <div className={styles.subheaderText}>End Date<span className={styles.required}>*</span></div>
                        
                        <div className={styles.endBoxContainer}>
                          <input className={styles.endCheckBox} type="checkbox" onChange={() => {
                            if (currentlyWork){
                              setCurrentlyWork(false)
                            } else {
                              setCurrentlyWork(true);
                            }
                          }}/>
                          <div>This Project is Ongoing</div>
                        </div>
                        </div>
                        {!currentlyWork && <DateInput/>}
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Description<span className={styles.required}>*</span></div>
                        <LongTextInput/>
                    </div>
                </div>



    </div>
  )
}

export default ProjectSection;