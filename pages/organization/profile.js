import React, { useState } from 'react'
import { useRouter } from 'next/router';
import sendRequest from '../../utils/client/sendToBackend';
import styles from "../../styles/OrganizationProfile.module.css";
import TextInput from '../../components/inputs/TextInput';
import DateInput from '../../components/inputs/DateInput';
import LongTextInput from '../../components/inputs/LongTextInput';
import DropdownInput from '../../components/inputs/DropdownInput';

const OrganizationProfilePage = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [hrEmail, setHrEmail] = useState("");
    const [location, setLocation] = useState("");
    const [interests, setInterests] = useState([]);
    const [description, setDescription] = useState("");

    const handleClick = async (event) => {
        event.preventDefault();
        const organization = { name, website, hrEmail, location, interests, description };
        await sendRequest("organization/initialUpdate", "PUT", { organization });
        router.push(`/organization/project`);
    }

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
                        <TextInput placeholder="Enter Your Organization Name" callbackFunction={setName}/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Organization Website<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Organization Website" callbackFunction={setWebsite}/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Volunteer Expertise Needed?<span className={styles.required}>*</span></div>
                        <DropdownInput 
                        placeHolder="Select The Types of Volunteers You Need"
                        options={["Software Engineering", "Operations","Fundraising", "General / Other","Volunteering", 
                                                "Management"]} callbackFunction={setInterests}/>
                    </div>
                </div>


                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Human Resources Email<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter a HR Email" callbackFunction={setHrEmail}/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Location<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Location" callbackFunction={setLocation}/>
                    </div>
                </div>



                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Tell us a Little Bit About Your Organization<span className={styles.required}>*</span></div>
                    <LongTextInput callbackFunction={setDescription}/>
                    </div>
                </div>

                <button className={styles.submitButton} onClick={handleClick}>
                    Submit Profile Information
                </button>
                


            </div>
        </div>
    </div>
  )
}

export default OrganizationProfilePage;