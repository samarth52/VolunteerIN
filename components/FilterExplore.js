import React from 'react'
import styles from "../styles/FilterExplore.module.css";
import TextInput from './inputs/TextInput';
import ExploreInput from './inputs/ExploreInput';

const FilterExplore = () => {
  return (
    <div class={styles.flexContainer}>
        <div class={styles.ageStyle}>
            <div>Age</div>
            <div >
                <ExploreInput />
            </div>
            <div>to</div>
            <div >
                <ExploreInput />
            </div>
        </div>

        <div>Location</div>
        <div >
            <TextInput />
        </div>
        <div>Yrs. of experience</div>
        <div >
            <ExploreInput />
        </div>
        <div>to</div>
        <div >
            <ExploreInput />
        </div>
    </div>
  )
}

export default FilterExplore