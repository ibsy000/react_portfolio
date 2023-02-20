import React from 'react'
import AboutMe from './components/AboutMe'
import HeroImage from './components/HeroImage'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <>
            {/* ---------------------- Main Container -----------------------*/}
            <div className="container">
                <Navbar />
                <HeroImage />
                <AboutMe />
            </div>
        </>
    )
}
