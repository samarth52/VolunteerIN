import React, { useState } from 'react'
import styles from "../styles/FilterExplore.module.css";
import TextInput from './inputs/TextInput';
import ExploreInput from './inputs/ExploreInput';

const FilterExplore = ({ setFilter }) => {
    const [ageMin, setAgeMin] = useState(null);
    const [ageMax, setAgeMax] = useState(null);
    const [location, setLocation] = useState(null);
    const [yearsMin, setYearsMin] = useState(null);
    const [yearsMax, setYearsMax] = useState(null);

    const handleClick = (event) => {
        event.preventDefault();
        const filter = {};
        if (ageMin) {
            filter.ageMin = Number.parseInt(ageMin);
        }
        if (ageMax) {
            filter.ageMax = Number.parseInt(ageMax);
        }
        if (location) {
            filter.location = location;
        }
        if (yearsMin) {
            filter.yearsMin = Number.parseInt(yearsMin);
        }
        if (yearsMax) {
            filter.yearsMax = Number.parseInt(yearsMax);
        }
        setFilter(filter);
    }

  return (
    <div className={styles.outerContainer}>
    <div class={styles.flexContainer}>
        <div class={styles.ageContainer}>
            <div>Age</div>
            <div>
                <ExploreInput placeholder="Min Age" callbackFunction={setAgeMin}/>
            </div>
            <div>to</div>
            <div >
                <ExploreInput placeholder="Max Age" callbackFunction={setAgeMax}/>
            </div>
        </div>

        <div className={styles.locationContainer}>
            <div>Location:</div>
            <div >
                <TextInput placeholder="Enter City / Town" callbackFunction={setLocation}/>
            </div>
        </div>
        <div className={styles.yoeContainer}>
            <div>Yrs. of experience</div>
            <div >
                <ExploreInput placeholder="Min YOE" callbackFunction={setYearsMin}/>
            </div>
            <div>to</div>
            <div >
                <ExploreInput placeholder="Max YOE" callbackFunction={setYearsMax}/>
            </div>
        </div>

        <button className={styles.submitButton} onClick={handleClick}>
                    Apply Filter
                </button>
                </div>
    </div>
  )
}

export default FilterExplore