import React from "react"
import Hero from "../components/Hero"
import ServicesSneakPeak from "../components/ServicesSneakPeak"
import WhoWeAre from "../components/WhoWeAre"
import AccentBar from "../components/AccentBar"



export default function Home(){
    return(
        <div className="home-container">
            <Hero />
            <ServicesSneakPeak />
            <AccentBar />
            <WhoWeAre />
        </div>
    )
}