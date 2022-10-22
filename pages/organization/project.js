import { useState } from "react";
import ProjectSection from "../../components/ProjectSection";
import styles from "../../styles/OrganizationProjects.module.css";

const OrganizationProjectsPage = () => {

    const [experiencesCount, setExperiencesCount] = useState(1);
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.inputContainer}>
                    <div className={styles.header}>
                    Let’s Talk About Your Orgranization’s Projects:
                    </div>

                    <div className={styles.addNew} onClick={() => {
                        setExperiencesCount(experiencesCount + 1)
                        console.log(experiencesCount)
                    }}> Add A Project </div>
                    {[...Array(experiencesCount)].map((value, index) => {
                        return (<ProjectSection key={index} />)
                    })}
                    <button className={styles.submitButton}>
                    Submit Project Information
                </button>

                    </div>

            </div>
        </div>
    )
}

export default OrganizationProjectsPage;