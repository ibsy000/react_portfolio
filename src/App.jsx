import React from 'react'
import AboutMe from './components/AboutMe'
import FooterAndContact from './components/FooterAndContact'
import HeroImage from './components/HeroImage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkillsAndExperience from './components/SkillsAndExperience'

export default function App() {
    
    // Functions used to open a new window/tab when clicking on my LinkedIn or
    // GitHub icons

    const myLinkedIn = () => {
        window.open("https://www.linkedin.com/in/ibsy-matute/")
    }
    
    const myGitHub = () => {
        window.open("https://github.com/ibsy000")
    }

    return (
        <>
            {/* ---------------------- Main Container -----------------------*/}
            <div className="container">
                <Navbar />
                <HeroImage />
                <AboutMe />
                <SkillsAndExperience />
                <Projects />
                <FooterAndContact myLinkedIn={myLinkedIn} myGitHub={myGitHub}/>
            </div>
        </>
    )
}
