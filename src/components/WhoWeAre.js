import React from "react"
import styles from "../styles/WhoWeAre.module.css"
import handymanImg from "../assets/images/handymanShot.jpeg"
import skilled from "../assets/images/logical-thinking.png"

export default function WhoWeAre(){
    return(
        <>
            <div className={styles.whoWeAreContainer}>
                <div className={styles.WhoWeAreInfo}>
                    <h2>Who We Are</h2>
                    <p>LeonExpress is a team of fully-trained, proficient, and experienced handymen that provide the complete range of services for home repair, installation, maintenance, and improvement.</p>
                    <div className={styles.WhoWeAreSkills}>
                        <div className={styles.WhoWeAreSkillsInfo}> 
                            <img src={skilled} className={styles.WhoWeAreSkillsImg} alt="skilled technician icon" />  
                            <h3>Skilled Technicians</h3>
                        </div>
                        <p>We have a team of trained and skilled handymen and they all are reliable, trustworthy, dedicated, experienced, and background checked.</p>
                    </div>
                </div>

                <div className={styles.WhoWeAreImg}>
                    <img src={handymanImg} className={styles.handymanMainImg} alt="Tools" />
                </div>
            </div>
        </>
    )
}