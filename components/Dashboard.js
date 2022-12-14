import React, { useState, useEffect } from 'react'
import styles from "../styles/NGODashboard.module.css";
import ProfileCard from './ProfileCard';
import sendRequest from '../utils/client/sendToBackend';
import auth from '../utils/firebase/firebaseClient';

const sleep = () => new Promise(
  resolve => setTimeout(resolve, 1000)
);

const Dashboard = ({ role, isExplore, filter, viewOnly, isUserDashboard }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (!isExplore) {
      (async () => {
        await sleep();
        const route = `${role}/get${role === "volunteer" ? "Organizations" : "Volunteers"}`
        const result = await sendRequest(route, "GET");
        setProfiles(result.payload);
      })();
    }
  }, []);

  useEffect(() => {
    if (filter) {
      (async () => {
        await sleep();
        const result = await sendRequest("volunteer/getFiltered", "POST", filter);
        setProfiles(result.payload);
      })();
    }
  }, [filter]);

  const imgURL = "https://i.ibb.co/1ncn6Hh/ngoLogo3.jpg"
  // const propName = "Samrat Sahoo"
  // const propJob = "Software Engineer"
  // const propExp = "10 Years of Experience"

  // const mockData = [
  //   {img: imgURL, name: propName, job:propJob, exp: propExp},
  //   {img: imgURL, name: propName, job:propJob, exp: propExp},
  //   {img: imgURL, name: propName, job:propJob, exp: propExp}
  // ]

  // {mockData.map((profile, index) => (
  //   <ProfileCard key={index} img={profile.img} name={profile.name} job={profile.job} exp={profile.exp}/>
  // ))}

  const lastField = role === "volunteer" ? "location" : "years";

  return (
    <div class={[profiles.length === 0 ? styles.notSelectedContainer : styles.flexboxContainer]}>
      {profiles.length !== 0 && profiles.map((profile) => (
        <ProfileCard key={profile.id} img={imgURL} name={role === "volunteer" ? profile.name : `${profile.firstName} ${profile.lastName}`}
          job={profile.interests[0]} exp={role === "volunteer" ? profile[lastField] : `${profile[lastField]} Years of Experience`} profile={profile} 
          role={role === "volunteer" ? "organization" : "volunteer"} viewOnly={viewOnly} />
      ))}

      {profiles.length === 0 &&
        <div className={styles.notSelectedImage}>
          <img className={styles.notSelectedImage} src="https://i.imgur.com/m2Y3bZW.png"/>
          <div>The Search is On!</div>
          {isUserDashboard && <div className={styles.subTextMargin}>Organizations are still searching for candidates.</div>}
      </div>} 
    </div>
  )
}

export default Dashboard