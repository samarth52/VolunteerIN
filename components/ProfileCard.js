import React from 'react'
import styles from "../styles/ProfileCard.module.css";

const ProfileCard = ({img, name, job, exp}) => {
  return (
    <div class={styles.flexboxCandidate}>
        <img src={img} class={styles.imageStyle} width="100" height="100"/>
        <h2 class={styles.profileText}>{name}</h2>
        <h3 class={styles.profileText2}>{job}</h3>
        <h3 class={styles.profileText3}>{exp}</h3>
    </div>
  )
}

export default ProfileCard

// "https://i.ibb.co/Y3QvCYc/ngoLogo2.jpg"