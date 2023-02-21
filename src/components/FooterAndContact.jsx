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
                <div className="row bg-dark justify-content-center align-items-center" id="footer">

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
