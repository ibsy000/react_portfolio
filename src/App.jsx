import React from 'react'
import AboutMe from './components/AboutMe'
import HeroImage from './components/HeroImage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkillsAndExperience from './components/SkillsAndExperience'

export default function App() {
    return (
        <>
            {/* ---------------------- Main Container -----------------------*/}
            <div className="container">
                <Navbar />
                <HeroImage />
                <AboutMe />
                <SkillsAndExperience />
                <Projects />
            </div>
        </>
    )
}
