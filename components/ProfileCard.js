import React from 'react'
import styles from "../styles/ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div class={styles.flexboxCandidate}>
        <img src="https://i.ibb.co/1ncn6Hh/ngoLogo3.jpg" class={styles.imageStyle} width="100" height="100"/>
        <h2 class={styles.profileText}>Samrat Sahoo</h2>
        <h3 class={styles.profileText2}>Software Engineer</h3>
        <h3 class={styles.profileText3}>10 Years of Experience</h3>
    </div>
  )
}

export default ProfileCard

// "https://i.ibb.co/Y3QvCYc/ngoLogo2.jpg"