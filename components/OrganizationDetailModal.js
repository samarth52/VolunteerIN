import styles from "../styles/ProfileDetailModal.module.css";
import React, {useState} from 'react'
import { useRouter } from 'next/router'


const OrganizationDetailModal = ({ organization }) => {
    const router = useRouter();
    const profileImage = "https://media.graphassets.com/CqNntlMDRgKm9mYPIRNC";

    return (
        <div className={styles.container}>
            <div className={styles.profileDescriptionAndOverviewContainer}>
                <div className={styles.overviewContainer}>
                    <img src={profileImage} className={styles.profileImage} />
                    <div className={styles.name}>{organization.name}</div>
                    <div className={styles.overviewItem}><span className={styles.boldSubtitle}>Interests:</span> {organization.interests?.join(', ')}</div>
                    <div className={styles.overviewItem}><span className={styles.boldSubtitle}>Location:</span> {organization.location}</div>
                </div>

                <div className={styles.description}>{organization.description}</div>
            </div>

            <div className={styles.experienceContainer}>
                {organization.projects?.map((project, index) => {
                    return (
                        <div className={styles.individualExperience}>
                            <div className={styles.organizationText}>{project.name}</div>
                            <div>{project.location}</div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.buttonContainer}></div>
        </div>
    )
}

export default OrganizationDetailModal;