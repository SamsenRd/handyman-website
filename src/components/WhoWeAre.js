import React from "react"
import styles from "../styles/WhoWeAre.module.css"
import handymanImg from "../assets/images/handymanShot.jpeg"
import skilled from "../assets/images/logical-thinking.png"
import quick from "../assets/images/time.png"
import tools from "../assets/images/tools.png"
import trust from "../assets/images/trust.png"

export default function WhoWeAre(){
    return(
        <>
            <div className={styles.whoWeAreContainer}>
                <div classname={styles.whoWeAreContainerTitle}>
                    <h2>Who We Are</h2>
                    <p>LeonExpress is a team of fully-trained, proficient, and experienced handymen that provide the complete range of services for home repair, installation, maintenance, and improvement.</p>
                </div>
                <div className={styles.WhoWeAreInfo}>
                    <div className={styles.WhoWeAreSkills}>
                        <div className={styles.WhoWeAreSkillsInfo}> 
                            <img src={skilled} className={styles.WhoWeAreSkillsImg} alt="skilled technician icon" />  
                            <h3>Skilled Technicians</h3>
                        </div>
                        <p>We have a team of trained and skilled handymen and they all are reliable, trustworthy, dedicated, experienced, and background checked.</p>
                    </div>

                    <div className={styles.WhoWeAreSkills}>
                        <div className={styles.WhoWeAreSkillsInfo}> 
                            <img src={quick} className={styles.WhoWeAreSkillsImg} alt="quick response icon" />  
                            <h3>Fast response</h3>
                        </div>
                        <p>We have a team of trained and skilled handymen and they all are reliable, trustworthy, dedicated, experienced, and background checked.</p>
                    </div>

                    <div className={styles.WhoWeAreSkills}>
                        <div className={styles.WhoWeAreSkillsInfo}> 
                            <img src={tools} className={styles.WhoWeAreSkillsImg} alt="Tools icon" />  
                            <h3>Well-Equipped</h3>
                        </div>
                        <p>We have a team of trained and skilled handymen and they all are reliable, trustworthy, dedicated, experienced, and background checked.</p>
                    </div>

                    <div className={styles.WhoWeAreSkills}>
                        <div className={styles.WhoWeAreSkillsInfo}> 
                            <img src={trust} className={styles.WhoWeAreSkillsImg} alt="Trusted technicians" />  
                            <h3>Experienced & Able </h3>
                        </div>
                        <p>We have a team of trained and skilled handymen and they all are reliable, trustworthy, dedicated, experienced, and background checked.</p>
                    </div>
                </div>

                <div className={styles.WhoWeAreImg}>
                    <img src={handymanImg} className={styles.handymanMainImg} alt="Tools" />
                    <h2>Reliable Handyman Team</h2>
                    <p>We are a reliable team of handymen dedicated to delivering quality services with passion.</p>
                </div>
            </div>
        </>
    )
}