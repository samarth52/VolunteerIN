import styles from "../styles/ProfileDetailModal.module.css";
import React, {useState} from 'react'
import { useRouter } from 'next/router'


const ProfileDetailModal = (props) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.profileDescriptionAndOverviewContainer}>
                <div className={styles.overviewContainer}>
                    <img src={props.profileImage} className={styles.profileImage} />
                    <div className={styles.name}>{props.firstName}{" "}{props.lastName}</div>
                    <div className={styles.overviewItem}><span className={styles.boldSubtitle}>Interests:</span> {props.interests?.join(', ')}</div>
                    <div className={styles.overviewItem}><span className={styles.boldSubtitle}>Years of Experience:</span> {props.yearsOfExperience}</div>
                </div>

                <div className={styles.description}>{props.description}</div>
            </div>

            <div className={styles.experienceContainer}>
                {props.experiences?.map((experience, index) => {
                    return (
                        <div className={styles.individualExperience}>
                            <div className={styles.organizationText}>{experience.organization}</div>
                            <div>{experience.title}</div>
                            <div>{experience.years} Years of Experience</div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.buttonContainer}>
            <button className={styles.backButton} onClick={() => {
                if (props.modalCallback){
                    props.modalCallback(false);
                }
            }}>
                Go Back
            </button>

            <button className={styles.button} onClick={() => {
                if (props.modalCallback){
                    props.modalCallback(false);
                }
            }}>
                Connect
            </button>
            </div>
        </div>
    )
}

export default ProfileDetailModal;