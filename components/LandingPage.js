import React from 'react'
import styles from '../styles/LandingPage.module.css'

const LandingPage = () => {
    const graphicURL = "https://i.ibb.co/6b2sJ5K/graphic-Landing-Page.png"

    return (
    <div class={styles.fContainer}>
        <div class={styles.fItem}>
            <div class={styles.logoStyle}>
                <h2 class={styles.logoFirst}>VOLUNTEER</h2>
                <h2 class={styles.logoNext}>in</h2>
            </div>
            <div class='line'>_________________________________</div>
            <div class={styles.fontOutfit}>
                REGISTER
            </div>
            <div class={styles.textDefine}>
                What defines you best?
            </div>
            <img class={styles.buttonStyle} src="https://i.ibb.co/5LqcR4T/Volunteer-Button.png" width="240.625" height="76.25" onClick={() => {
                console.log("HELLO")
            }}/>
            <div class={styles.orFlex}>
                <div>____________</div>
                <div class={styles.orStyle}>or</div>
                <div>____________</div>
            </div>
            <img class={styles.buttonStyle} src="https://i.ibb.co/wwMVZZ4/Organization-Button.png" width="250.625" height="76.25"/>
            <div class={styles.registerDefine}>
                Already registered? Sign in instead.
            </div>
        </div>
        <div class={styles.fItemRight}>
            <h3 class={styles.rightText}>Connecting for a cause.</h3>
            <img class={styles.graphicStyle} src={graphicURL} alt="None" width="483" height="419"/>
        </div>
    </div>
  )
}

export default LandingPage