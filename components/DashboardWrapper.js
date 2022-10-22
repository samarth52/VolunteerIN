import React from 'react'
import Header from './Header'
import DashboardText from './DashboardText'
import NGODashboard from './NGODashboard'

const DashboardWrapper = () => {
  return (
    <div>
        <Header/>
        <DashboardText text="Candidates You Have Applied To:"/>
        <NGODashboard/>
    </div>
  )
}

export default DashboardWrapper