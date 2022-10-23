import React from 'react'
import Header from '../../components/Header'
import DashboardText from '../../components/DashboardText'
import Dashboard from '../../components/Dashboard'

const DashboardWrapper = () => {
  return (
    <div>
        <Header logoTitle="VolunteerIN"/>
        <DashboardText text="Candidates You Have Applied To:"/>
        <Dashboard role={"organization"}/>
    </div>
  )
}

export default DashboardWrapper