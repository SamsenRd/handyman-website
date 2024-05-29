import React from "react"
import styles from "../styles/AccentBar.module.css"

export default function AccentBar(){
    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.accentTitle}>Count on us to get the job done!</h1>
                <button className={styles.accentButton}>Get in touch today</button>
            </div>
        </>
    )
}