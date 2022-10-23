import React, { useEffect, useState } from 'react'
import styles from "../styles/Header.module.css";
import { useRouter } from 'next/router'

const Header = ({logoTitle}) => {
  const router = useRouter();
  const [role, setRole] = useState("volunteer");
  useEffect(() => {
    if (router.asPath.indexOf("organization") !== -1){
      setRole("organization")
    }
  })

  return (
    <div class={styles.header}>
        <div class={styles.logo}>{logoTitle}</div>
        <div class={styles.flexContainer}>
            <div class={styles.headerText} onClick={() => {
              router.push(`/${role}/dashboard`)
            }}>Dashboard</div>
            {role === "organization" && <div class={styles.headerText} onClick={() => {
              router.push(`/${role}/explore`)
            }}>Explore</div>}
            <div class={styles.headerText} onClick={() => {
              router.push(`/`)
            }}>Logout</div>
        </div>
    </div>
  )
}

export default Header