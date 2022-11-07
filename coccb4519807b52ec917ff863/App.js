import React from "react"
import Info from "./BuisCard/Info.js"
import About from "./BuisCard/About.js"
import Footer from "./BuisCard/Footer.js"

export default function App(){
    return (
        <div className = "card-body">
            <Info />
            <About />
            <Footer />
        </div>
    )
}