import { useState } from "react";
import ExperienceSection from "../../components/ExperienceSection";
import styles from "../../styles/UserExperience.module.css";

const UserExperiencePage = () => {

    const [experiencesCount, setExperiencesCount] = useState(1);
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.inputContainer}>
                    <div className={styles.header}>
                    Let’s Talk About Your Experiences:
                    </div>

                    <div className={styles.addNew} onClick={() => {
                        setExperiencesCount(experiencesCount + 1)
                        console.log(experiencesCount)
                    }}> Add An Experience </div>
                    {[...Array(experiencesCount)].map((value, index) => {
                        return (<ExperienceSection key={index} />)
                    })}
                    <button className={styles.submitButton}>
                    Submit Experience Information
                </button>

                    </div>

            </div>
        </div>
    )
}

export default UserExperiencePage;