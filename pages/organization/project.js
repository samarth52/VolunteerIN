import { useState } from "react";
import { useRouter } from "next/router";
import sendRequest from "../../utils/client/sendToBackend";
import ProjectSection from "../../components/ProjectSection";
import styles from "../../styles/OrganizationProjects.module.css";

const OrganizationProjectsPage = () => {
    const router = useRouter();
    const [projectsCount, setProjectsCount] = useState(1); 
    const [projectFunctions, setProjectFunctions] = useState({});

    const handleClick = async (event) => {
        event.preventDefault();
        const projects = [];
        for (let i = 0; i < projectsCount; i++) {
            projects.push(projectFunctions[i]());
        }
        await sendRequest("organization/initialUpdate", "PUT", { organization: { projects } });
        router.push(`/organization/dashboard`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.inputContainer}>
                    <div className={styles.header}>
                    Let’s Talk About Your Orgranization’s Projects:
                    </div>

                    <div className={styles.addNew} onClick={() => {
                        setProjectsCount(projectsCount + 1)
                        console.log(projectsCount)
                    }}> Add A Project </div>
                    {[...Array(projectsCount)].map((value, index) => {
                        return (<ProjectSection key={index} index={index} projectFunctions={projectFunctions} setProjectFunctions={setProjectFunctions} />)
                    })}
                    <button className={styles.submitButton} onClick={handleClick}>
                    Submit Project Information
                </button>

                    </div>

            </div>
        </div>
    )
}

export default OrganizationProjectsPage;