import React from 'react'
import emailIcon from '../assets/email (1).png'
import linkedInIcon from '../assets/linkedin (1).png'
import gitHubIcon from '../assets/github (1).png'

export default function SocialIcons(props) {

    return (
        <>
            {/*----------------------- Social Icons -------------------------*/}
            <div className="d-flex justify-content-center align-items-center">
                <a className="email" href="mailto:ibsy00@gmail.com">
                    <img src={emailIcon} alt="email" id="email-button"/>
                </a>
                <img src={linkedInIcon} alt="linkedin" id="linkedin-button" 
                    onClick={props.myLinkedIn}/>
                <img src={gitHubIcon} alt="github" id="github-button" 
                    onClick={props.myGitHub}/>
            </div>
        </>
    )
}
