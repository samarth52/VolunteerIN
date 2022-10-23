import React, { useState, useEffect } from 'react'
import styles from "../styles/NGODashboard.module.css";
import ProfileCard from './ProfileCard';
import sendRequest from '../utils/client/sendToBackend';
import auth from '../utils/firebase/firebaseClient';

const sleep = () => new Promise(
  resolve => setTimeout(resolve, 1000)
);

const Dashboard = ({ role }) => {

  const [profiles, setProfiles] = useState([])

  console.log(profiles);
  useEffect(() => {
    (async () => {
      await sleep();
      const route = `${role}/get${role === "volunteer" ? "Organizations" : "Volunteers"}`
      const records = await sendRequest(route, "GET");
      console.log("Records:", records);
      setProfiles(records);
    })();
  }, []);

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