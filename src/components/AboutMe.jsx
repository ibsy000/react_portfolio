import React from 'react'
import AboutMeHeader from './AboutMeHeader'

export default function AboutMe() {
    return (
        <>
            {/*--------------------------- About Me -------------------------*/}
            <hr id="about-me-hr"/>
            <div className="container">
                <div className="row" id="about-me">

                    {/*------------------ About Me Header -------------------*/}
                    <AboutMeHeader />

                </div>
            </div>
        </>
    )
}
