import React from 'react'
import DashboardText from '../../components/DashboardText'
import FilterExplore from '../../components/FilterExplore'
import Header from '../../components/Header'
import NGODashboard from '../../components/NGODashboard'

const ExplorePage = () => {
  return (
    <div>
        <Header logoTitle="Explore Candidates"/>
        <FilterExplore />
        <DashboardText text="Potential Candidates:"/>
        <NGODashboard />
    </div>
  )
}

export default ExplorePage