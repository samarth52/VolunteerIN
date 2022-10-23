import React, { useContext } from 'react'
import RoleContext from "../../contexts/role";
import Header from '../../components/Header'
import DashboardText from '../../components/DashboardText'
import Dashboard from '../../components/Dashboard'

const DashboardWrapper = () => {
  const [role, useRole] = useContext(RoleContext);
  console.log(role);
  return (
    <div>
        <Header logoTitle="VolunteerIN"/>
        <DashboardText text="Candidates You Have Applied To:"/>
        <Dashboard/>
    </div>
  )
}

export default DashboardWrapper