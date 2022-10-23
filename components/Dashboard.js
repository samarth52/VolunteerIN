import React, { useState } from 'react'
import styles from "../styles/NGODashboard.module.css";
import ProfileCard from './ProfileCard';

const Dashboard = () => {

  const [profiles, setProfiles] = useState([])

  const imgURL = "https://i.ibb.co/1ncn6Hh/ngoLogo3.jpg"
  const propName = "Samrat Sahoo"
  const propJob = "Software Engineer"
  const propExp = "10 Years of Experience"

  const mockData = [
    {img: imgURL, name: propName, job:propJob, exp: propExp},
    {img: imgURL, name: propName, job:propJob, exp: propExp},
    {img: imgURL, name: propName, job:propJob, exp: propExp}
  ]

  return (
    <div class={[styles.flexboxContainer]}>
        {mockData.map((profile, index) => (
          <ProfileCard key={index} img={profile.img} name={profile.name} job={profile.job} exp={profile.exp}/>
        ))}
    </div>
  )
}

export default Dashboard