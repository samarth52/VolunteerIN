import React from 'react'
import DashboardText from '../../components/DashboardText'
import FilterExplore from '../../components/FilterExplore'
import Header from '../../components/Header'
import Dashboard from '../../components/Dashboard'

const ExplorePage = () => {
  return (
    <div>
        <Header logoTitle="Explore Candidates"/>
        <FilterExplore />
        <DashboardText text="Potential Candidates:"/>
        <Dashboard />
    </div>
  )
}

export default ExplorePage