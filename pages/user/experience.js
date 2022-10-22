import styles from "../../styles/UserExperience.module.css";

const UserExperiencePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.inputContainer}>
                <div className={styles.header}>
                Let’s Talk About Your Experiences:
                </div>

                <div className={styles.addNew}> Add A Project </div>
                </div>
                
            </div>
        </div>
    )
}

export default UserExperiencePage;