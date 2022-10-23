import React, { useState } from 'react'
import styles from "../styles/NGODashboard.module.css";
import ProfileCard from './ProfileCard';

const Dashboard = (props) => {
  const imgURL = "https://i.ibb.co/1ncn6Hh/ngoLogo3.jpg"
  const propName = "Samrat Sahoo"
  const propJob = "Software Engineer"
  const propExp = "10 Years of Experience"

  const mockData = [
    {img: imgURL, name: propName, job:propJob, exp: propExp},
    {img: imgURL, name: propName, job:propJob, exp: propExp},
    {img: imgURL, name: propName, job:propJob, exp: propExp}
  ]

  const [profiles, setProfiles] = useState([])


  return (
    <div class={[profiles.length === 0 ? styles.notSelectedContainer : styles.flexboxContainer]}>
        {profiles.length !== 0 && profiles.map((profile, index) => (
          <ProfileCard viewOnly={true} key={index} img={profile.img} name={profile.name} job={profile.job} exp={profile.exp}/>
        ))}

        {profiles.length === 0 &&
        <div className={styles.notSelectedImage}>
          <img className={styles.notSelectedImage} src="https://i.imgur.com/m2Y3bZW.png"/>
          <div>The Search is On!</div>
          {props.isUserDashboard && <div className={styles.subTextMargin}>Organizations are still searching for candidates.</div>}
        </div>} 
    </div>
  )
}

export default Dashboard