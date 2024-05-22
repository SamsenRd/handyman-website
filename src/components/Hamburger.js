import React from "react"
import styles from "../styles/Hamburger.module.css"

export default function Hamburger(){
    return (
        <div>
            <div className={styles.hamburger}>
                <div className={styles.burger.burger1} />
                <div className={styles.burger.burger2} />
                <div className={styles.burger.burger3} />
            </div>
        </div>
    )
}