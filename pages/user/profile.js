import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/UserProfile.module.css";
import TextInput from '../../components/inputs/TextInput';
import DateInput from '../../components/inputs/DateInput';
import LongTextInput from '../../components/inputs/LongTextInput';
import DropdownInput from '../../components/inputs/DropdownInput';
import sendRequest from '../../utils/client/sendToBackend';

const UserProfilePage = () => {
    const router = useRouter();
    const role = router.pathname.split("/")[1];
 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [years, setYears] = useState("0");
    const [location, setLocation] = useState("");
    const [dob, setDob] = useState("");
    const [interests, setInterests] = useState([]);
    const [description, setDescription] = useState("");

    const handleClick = async (event) => {
        event.preventDefault();
        const volunteer = { firstName, lastName, years: Number.parseInt(years), location, dob, interests, description };
        await sendRequest("volunteer/initialUpdate", "PUT", { volunteer });
        router.push(`/${role}/experience`);
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
                        <div className={styles.subheaderText}>First Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your First Name" callbackFunction={setFirstName}/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Last Name<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Last Name" callbackFunction={setLastName}/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Years of Volunteer Experience<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Years of Volunteer Experience" callbackFunction={setYears}/>
                    </div>
                    <div className={styles.headerInputCombo}>
                        <div className={styles.subheaderText}>Location<span className={styles.required}>*</span></div>
                        <TextInput placeholder="Enter Your Location" callbackFunction={setLocation}/>
                    </div>
                </div>

                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>What is Your Date of Birth?<span className={styles.required}>*</span></div>
                    <DateInput callbackFunction={setDob}></DateInput></div>
                </div>

                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Interests / Expertise?<span className={styles.required}>*</span></div>
                        <DropdownInput 
                        placeHolder={"Select Your Expertise(s)"}
                        options={["Software Engineering", "Operations","Fundraising", "General / Other","Volunteering", 
                                                "Management"]} callbackFunction={setInterests}/>
                    </div>
                </div>


                <div className={styles.inputRow}>
                <div className={styles.headerInputCombo}>
                    <div className={styles.subheaderText}>Tell us a Little About Yourself?<span className={styles.required}>*</span></div>
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

export default UserProfilePage;