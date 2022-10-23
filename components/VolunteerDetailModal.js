import styles from "../styles/ProfileDetailModal.module.css";
import React, {useState} from 'react'
import { useRouter } from 'next/router'


const VolunteerDetailModal = ({ volunteer }) => {
    const router = useRouter();
    const profileImage = "https://media.graphassets.com/CqNntlMDRgKm9mYPIRNC";

    return (
        <div className={styles.container}>
            <div className={styles.profileDescriptionAndOverviewContainer}>
                <div className={styles.overviewContainer}>
                    <img src={profileImage} className={styles.profileImage} />
                    <div className={styles.name}>{`${volunteer.firstName} ${volunteer.lastName}`}</div>
                    <div className={styles.overviewItem}><span className={styles.boldSubtitle}>Interests:</span> {volunteer.interests?.join(', ')}</div>
                    <div className={styles.overviewItem}><span className={styles.boldSubtitle}>Years of Experience:</span> {volunteer.years}</div>
                </div>

                <div className={styles.description}>{volunteer.description}</div>
            </div>

            <div className={styles.experienceContainer}>
                {volunteer.experiences?.map((experience, index) => {
                    return (
                        <div className={styles.individualExperience}>
                            <div className={styles.organizationText}>{experience.organization}</div>
                            <div>{experience.title}</div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.buttonContainer}>
            <button className={styles.button}>
                Connect
            </button>
            </div>
        </div>
    )
}

export default VolunteerDetailModal;