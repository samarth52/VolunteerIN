import React from 'react'
import Header from '../../components/Header'
import DashboardText from '../../components/DashboardText'
import Dashboard from '../../components/Dashboard'

const DashboardWrapper = () => {
  return (
    <div>
        <Header logoTitle="VolunteerIN"/>
        <DashboardText text="Organizations Interested In You:"/>
        <Dashboard role={"volunteer"} isUserDashboard={true} viewOnly={true} />
    </div>
  )
}

export default DashboardWrapper