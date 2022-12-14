import React, { useState } from 'react'
import styles from '../styles/LandingPage.module.css'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';
import auth from './../utils/firebase/firebaseClient';
import sendRequest from "../utils/client/sendToBackend";

const LandingPage = () => {
    const graphicURL = "https://i.ibb.co/6b2sJ5K/graphic-Landing-Page.png";
    const [role, setRole] = useState("");
    const router = useRouter();

    const createUser = async () => {
        const result = await sendRequest(`${role}/add`, "POST");
        router.push(`/${role}/${result.payload.new ? "profile" : "dashboard"}`);
    }
    return (
    <div class={styles.fContainer}>
        {!role && <div class={styles.fItem}>
            <div class={styles.logoStyle}>
                <h2 class={styles.logoFirst}>VOLUNTEER</h2>
                <h2 class={styles.logoNext}>in</h2>
            </div>
            <div class='line'>_________________________________</div>
            <div class={styles.fontOutfit}>
                REGISTER / LOGIN
            </div>
            <div class={styles.textDefine}>
                What defines you best?
            </div>
            <img class={styles.buttonStyle} src="https://i.ibb.co/5LqcR4T/Volunteer-Button.png" width="240.625" height="76.25" onClick={() => {
                setRole("volunteer");
            }}/>
            <div class={styles.orFlex}>
                <div>____________</div>
                <div class={styles.orStyle}>or</div>
                <div>____________</div>
            </div>
            <img class={styles.buttonStyle} src="https://i.ibb.co/wwMVZZ4/Organization-Button.png" width="250.625" height="76.25" onClick={() => {
                setRole("organization");
            }}/>
            <div class={styles.registerDefine}>
                
            </div>
        </div>}

        {role && <div class={styles.fItemTwo}>
            <div class={styles.logoStyle}>
                <h2 class={styles.logoFirst}>VOLUNTEER</h2>
                <h2 class={styles.logoNext}>in</h2>
            </div>
            <div class='line'>_________________________________</div>
            <div class={styles.fontOutfit}>
                REGISTER / LOGIN
            </div>
            <div class={styles.textDefine}>
            </div>
            <button className={styles.signInWithGoogle} onClick={async () => {
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider).then(() => {
                    createUser()
                })

            }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" className={styles.googleLogo}/>
                <div>Sign in With Google</div>
            </button>
            <div></div>
            <div></div>

        </div>}
        <div class={styles.fItemRight}>
            <h3 class={styles.rightText}>Connecting for a cause.</h3>
            <img class={styles.graphicStyle} src={graphicURL} alt="None" width="483" height="419"/>
        </div>
    </div>
  )
}

export default LandingPage