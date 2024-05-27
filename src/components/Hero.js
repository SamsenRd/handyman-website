import React from "react"
import styles from "../styles/Hero.module.css"
import heroImage from "../assets/images/hero3.jpeg"

export default function Hero(){
    return(
        <>
            <div className={styles.heroContainer}>
                <img src={heroImage} className={styles.img} alt="hero-img" />
                <h1 className={styles.heroTitle}>Professional Handyman Services</h1>
                <button className={styles.heroButton}>Get a Quote!</button>
            </div>
        </>
    )
}