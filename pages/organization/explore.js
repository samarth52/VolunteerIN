import React, { useState } from 'react'
import DashboardText from '../../components/DashboardText'
import FilterExplore from '../../components/FilterExplore'
import Header from '../../components/Header'
import Dashboard from '../../components/Dashboard'

const ExplorePage = () => {
  const [filter, setFilter] = useState({});
  return (
    <div>
        <Header logoTitle="Explore Candidates"/>
        <FilterExplore setFilter={setFilter}/>
        <DashboardText text="Potential Candidates:"/>
        <Dashboard role={"organization"} isExplore={true} filter={filter} />
    </div>
  )
}

export default ExplorePage