import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServicesSneakPeak from "../components/ServicesSneakPeak"
import WhoWeAre from "../components/WhoWeAre"
import Footer from "../components/Footer"



export default function Home(){
    return(
        <div className="home-container">
            <Navbar />
            <Hero />
            <ServicesSneakPeak />
            <WhoWeAre />
            <Footer />
        </div>
    )
}