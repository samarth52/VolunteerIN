import React from 'react'
import styles from "../../styles/UserProfile.module.css";
import TextInput from '../../components/inputs/TextInput';
import DateInput from '../../components/inputs/DateInput';
import LongTextInput from '../../components/inputs/LongTextInput';
import DropdownInput from '../../components/inputs/DropdownInput';

const UserProfilePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.rightContainer}>
            <div className={styles.inputContainer}>
                <div className={styles.header}>
                    Welcome Let's Get You Started:
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>First Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your First Name"/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Last Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Last Name"/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Years of Volunteer Experience<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Years of Volunteer Experience"/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Location<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Location"/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>What is Your Date of Birth?<span className={styles.required}>*</span></div>
                    <DateInput></DateInput></div>
                </div>

                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Interests / Expertise?<span className={styles.required}>*</span></div>
                        <DropdownInput 
                        placeHolder={"Select Your Expertise(s)"}
                        options={["Software Engineering", "Operations","Fundraising", "General / Other","Volunteering", 
                                                "Management"]}/>
                    </div>
                </div>


                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Tell us a Little About Yourself?<span className={styles.required}>*</span></div>
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

export default UserProfilePage;