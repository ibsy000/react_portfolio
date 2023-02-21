import React from 'react'
import SocialIcons from './SocialIcons'
import '../css/FooterAndContact.css'

export default function FooterAndContact(props) {
    return (
        <>
            {/*------------------------- Footer -----------------------------*/}
            <div className="container" id="contact">
                <div className="row bg-dark justify-content-center align-items-center" id="footer">

                    {/*---------------- Contact Me Header -------------------*/}
                    <div className="d-flex justify-content-center align-items-center">
                        <h4 id="contact-header"><code>&lt; <b>Contact Me</b> /&gt;</code></h4>
                    </div>
                    <hr id="contact-hr"></hr>

                    {/*--------------------- Social Icons -------------------*/}
                    <SocialIcons myLinkedIn={props.myLinkedIn} myGitHub={props.myGitHub}/>

                    {/*---------------------- Copyright ---------------------*/}
                    <div class="d-flex justify-content-center align-items-center">
                        <p class="m-0"><code>&lt; &copy; Ibsy Matute /&gt;</code></p> 
                    </div>

                </div>
            </div>
        </>
    )
}
