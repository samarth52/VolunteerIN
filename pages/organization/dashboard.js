import React from 'react'
import Header from '../../components/Header'
import DashboardText from '../../components/DashboardText'
import Dashboard from '../../components/Dashboard'

const DashboardWrapper = () => {
  return (
    <div>
        <Header logoTitle="VolunteerIN"/>
        <DashboardText text="Candidates You Are Interested In:"/>
        <Dashboard role={"organization"} isUserDashboard={false} viewOnly={true} />
    </div>
  )
}

export default DashboardWrapper