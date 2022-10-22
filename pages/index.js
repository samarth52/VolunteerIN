import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'
import DashboardWrapper from '../components/DashboardWrapper'

export default function Home() {
  return (
    <div className={styles.container}>
        {/* <DashboardWrapper/> */}
        <LandingPage/>
    </div>
  )
}
