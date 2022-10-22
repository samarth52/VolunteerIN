import styles from '../styles/Home.module.css'
import NGODashboard from '../components/NGODashboard.js'
import Header from '../components/Header'
import DashboardText from '../components/DashboardText'

export default function Home() {
  return (
    <div className={styles.container}>
        <Header/>
        <DashboardText text="Candidates You Have Applied To:"/>
        <NGODashboard/>
    </div>
  )
}
