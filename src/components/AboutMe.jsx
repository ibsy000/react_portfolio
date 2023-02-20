import React from 'react'
import AboutMeHeader from './AboutMeHeader'
import CareerPathColumn from './CareerPathColumn'
import '../css/AboutMe.css'
import MyBackgroundColumn from './MyBackgroundColumn'

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

                {/*-------------------- About Me Columns --------------------*/}
                <div className="d-flex" id="about-me-columns">

                    {/*---------------- Career Path Column ------------------*/}
                    <CareerPathColumn />

                    {/*--------------- My Background Column -----------------*/}
                    <MyBackgroundColumn />

                    {/*------------------ Personal Column -------------------*/}
                    

                </div>

            </div>
        </>
    )
}
