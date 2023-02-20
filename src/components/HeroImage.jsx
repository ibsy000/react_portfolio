import React from 'react'
import '../css/HeroImage.css'

export default function HeroImage() {
    return (
        <>
            {/*----------------------- Hero Image ---------------------------*/}
            <div className="d-flex flex-column justify-content-center align-items-center" id="hero-image">
                <h1><code>&lt; Hello World /&gt;</code></h1>
                <h2>I'm Ibsy.</h2>
                <h2>Full Stack Software Engineer</h2>
                <hr id="hero-header-hr"/>
                <p>with the ability to build and deploy open-source web applications
                    <br/>from the ground up utilizing the SDLC to craft seamless &
                    functional UI.
                </p>
            </div>
        </>
    )
}
