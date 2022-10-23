import { useState } from "react";
import { useRouter } from "next/router";
import ExperienceSection from "../../components/ExperienceSection";
import styles from "../../styles/UserExperience.module.css";
import sendRequest from "../../utils/client/sendToBackend";

const UserExperiencePage = () => {
    const router = useRouter();
    const role = router.pathname.split("/")[1];

    const [experiencesCount, setExperiencesCount] = useState(1); 
    const [experienceFunctions, setExperienceFunctions] = useState({});

    const handleClick = async (event) => {
        event.preventDefault();
        const experiences = [];
        for (let i = 0; i < experiencesCount; i++) {
            experiences.push(experienceFunctions[i]());
        }
        await sendRequest("volunteer/initialUpdate", "PUT", { volunteer: { experiences } });
        router.push(`/${role}/dashboard`);
    }

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
                        return (<ExperienceSection key={index} index={index} experienceFunctions={experienceFunctions} setExperienceFunctions={setExperienceFunctions}/>)
                    })}
                    <button className={styles.submitButton} onClick={handleClick}>
                    Submit Experience Information
                </button>

                    </div>

            </div>
        </div>
    )
}

export default UserExperiencePage;