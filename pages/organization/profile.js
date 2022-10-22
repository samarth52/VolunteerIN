import React from 'react'
import styles from "../../styles/OrganizationProfile.module.css";
import TextInput from '../../components/inputs/TextInput';
import DateInput from '../../components/inputs/DateInput';
import LongTextInput from '../../components/inputs/LongTextInput';
import DropdownInput from '../../components/inputs/DropdownInput';

const OrganizationProfilePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.rightContainer}>
            <div className={styles.inputContainer}>
                <div className={styles.header}>
                    Welcome Let's Get You Started:
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Organization Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Organization Name"/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Organization Website<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Organization Website"/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Volunteer Expertise Needed?<span className={styles.required}>*</span></div>
                        <DropdownInput options={["Software Engineering", "Operations","Fundraising", "General / Other","Volunteering", 
                                                "Management"]}/>
                    </div>
                </div>


                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Alternate Contact<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter an Alternate Contact Info"/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Location<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Location"/>
                    </div>
                </div>



                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Tell us a Little Bit About Your Organization<span className={styles.required}>*</span></div>
                    <LongTextInput/>
                    </div>
                </div>

                <button className={styles.submitButton}>
                    Submit Profile Information
                </button>
                


            </div>
        </div>
    </div>
  )
}

export default OrganizationProfilePage;