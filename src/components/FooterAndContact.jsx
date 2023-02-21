import React from 'react'
import SocialIcons from './SocialIcons'
import '../css/FooterAndContact.css'
import ContactMeHeader from './ContactMeHeader'
import Copyright from './Copyright'

export default function FooterAndContact(props) {
    return (
        <>
            {/*------------------------- Footer -----------------------------*/}
            <hr/>
            <div className="container" id="contact">
                <div className="row justify-content-center align-items-center 
                    bg-body-tertiary" id="footer" data-bs-theme="dark">

                    {/*---------------- Contact Me Header -------------------*/}
                    <ContactMeHeader />

                    {/*--------------------- Social Icons -------------------*/}
                    <SocialIcons myLinkedIn={props.myLinkedIn} myGitHub={props.myGitHub}/>

                    {/*---------------------- Copyright ---------------------*/}
                    <Copyright />

                </div>
            </div>
        </>
    )
}
