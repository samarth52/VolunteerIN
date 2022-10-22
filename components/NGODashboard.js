import React from 'react'
import styles from "../styles/NGODashboard.module.css";
import ProfileCard from './ProfileCard';

const NGODashboard = () => {
  return (
    <div class={[styles.flexboxContainer]}>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
    </div>
  )
}

export default NGODashboard