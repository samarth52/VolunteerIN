import React from 'react'
import Header from '../../components/Header'
import DashboardText from '../../components/DashboardText'
import NGODashboard from '../../components/NGODashboard'

const DashboardWrapper = () => {
  return (
    <div>
        <Header logoTitle="VolunteerIN"/>
        <DashboardText text="Candidates You Have Applied To:"/>
        <NGODashboard/>
    </div>
  )
}

export default DashboardWrapper