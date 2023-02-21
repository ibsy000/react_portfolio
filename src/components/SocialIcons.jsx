import React from 'react'
import emailIcon from '../assets/email (1).png'
import linkedInIcon from '../assets/linkedin (1).png'
import gitHubIcon from '../assets/github (1).png'
import { Link } from 'react-router-dom'

export default function SocialIcons() {
    
    // Functions used to open a new window/tab when clicking on my LinkedIn or
    // GitHub icons
    // const myLinkedIn = () => {
    //     window.open("https://www.linkedin.com/in/ibsy-matute/")
    // }
    
    // const myGitHub = () => {
    //     window.open("https://github.com/ibsy000")
    // }

    return (
        <>
            {/*----------------------- Social Icons -------------------------*/}
            <div className="d-flex justify-content-center align-items-center">
                <a className="email" href="mailto:ibsy00@gmail.com">
                    <img src={emailIcon} alt="email" id="email-button"/>
                </a>
                <Link >
                    <img src={linkedInIcon} alt="linkedin" id="linkedin-button" 
                        onclick={() => window.open("https://www.linkedin.com/in/ibsy-matute/", "_blank")}/>
                </Link>
                
                <img src={gitHubIcon} alt="github" id="github-button" 
                    onclick={() => window.open("https://github.com/ibsy000", "_blank")}/>
            </div>
        </>
    )
}
