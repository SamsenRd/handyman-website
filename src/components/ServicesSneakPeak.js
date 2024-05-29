import React from "react"
import furnitureAssembly from "../assets/images/furniture-assembly.jpeg"
import handyman from "../assets/images/handyman.jpeg"
import homeImprovement from "../assets/images/home-improvement.jpeg"
import styles from "../styles/Services.module.css"



export default function ServicesSneakPeak(){
    return(
        <>
            <h2 className={styles.servicesHeading}>Services</h2>
            <div className={styles.servicesContainer}>
                <div className={styles.service}>
                    <img src={furnitureAssembly} className={styles.servicesImg} alt="furniture assembly" />
                    <h3 className={styles.servicesTitle}>Furniture Assembly</h3>
                    <p className={styles.servicesParagraph}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className={styles.service}>
                    <img src={handyman} className={styles.servicesImg} alt="handyman" />
                    <h3 className={styles.servicesTitle}>Handyman Services</h3>
                    <p className={styles.servicesParagraph}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className={styles.service}>
                    <img src={homeImprovement} className={styles.servicesImg} alt="Home Improvement" />
                    <h3 className={styles.servicesTitle}>Home Improvement</h3>
                    <p className={styles.servicesParagraph}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </> 
    )
}