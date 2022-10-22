import React from 'react'
import styles from "../styles/FilterExplore.module.css";
import TextInput from './inputs/TextInput';
import ExploreInput from './inputs/ExploreInput';

const FilterExplore = () => {
  return (
    <div className={styles.outerContainer}>
    <div class={styles.flexContainer}>
        <div class={styles.ageContainer}>
            <div>Age</div>
            <div>
                <ExploreInput placeholder="Min Age"/>
            </div>
            <div>to</div>
            <div >
                <ExploreInput placeholder="Max Age"/>
            </div>
        </div>

        <div className={styles.locationContainer}>
            <div>Location:</div>
            <div >
                <TextInput placeholder="Enter City / Town"/>
            </div>
        </div>
        <div className={styles.yoeContainer}>
            <div>Yrs. of experience</div>
            <div >
                <ExploreInput placeholder="Min YOE"/>
            </div>
            <div>to</div>
            <div >
                <ExploreInput placeholder="Max YOE"/>
            </div>
        </div>

        <button className={styles.submitButton}>
                    Apply Filter
                </button>
                </div>
    </div>
  )
}

export default FilterExplore