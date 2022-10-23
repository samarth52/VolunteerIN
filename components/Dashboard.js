import React, { useState, useEffect } from 'react'
import styles from "../styles/NGODashboard.module.css";
import ProfileCard from './ProfileCard';
import sendRequest from '../utils/client/sendToBackend';
import auth from '../utils/firebase/firebaseClient';

const sleep = () => new Promise(
  resolve => setTimeout(resolve, 1000)
);

const Dashboard = ({ role, isExplore, filter }) => {

  const [profiles, setProfiles] = useState([]);
  const lastField = role === "volunteer" ? "location" : "years";

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
  const propName = "Samrat Sahoo"
  const propJob = "Software Engineer"
  const propExp = "10 Years of Experience"

  const mockData = [
    {img: imgURL, name: propName, job:propJob, exp: propExp},
    {img: imgURL, name: propName, job:propJob, exp: propExp},
    {img: imgURL, name: propName, job:propJob, exp: propExp}
  ]

  // {mockData.map((profile, index) => (
  //   <ProfileCard key={index} img={profile.img} name={profile.name} job={profile.job} exp={profile.exp}/>
  // ))}
  

  return (
    <div class={[styles.flexboxContainer]}>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} img={imgURL} name={`${profile.firstName} ${profile.lastName}`} job={profile.interests[0]} exp={profile[lastField]}
          profile={profile} role={role === "volunteer" ? "organization" : "volunteer"} />
      ))}
    </div>
  )
}

export default Dashboard