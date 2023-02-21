import React from 'react'
import ExperienceColumn from './ExperienceColumn'
import LanguagesAndFrameworks from './LanguagesAndFrameworks'
import '../css/LanguagesExperience.css'

export default function SkillsAndExperience() {
    return (
        <>
            {/*----------------- Skills & Experience ------------------------*/}
            <hr id="skills-experience"/>
            <div className="container">
                <div className="row">

                    {/*------------- Skills & Experience Header -------------*/}
                    <h1 id="skills-header"><code>&lt; Skills & Experience /&gt;</code></h1>
                    <hr/>

                    <div className="row" id="languages-experience">

                        {/*------------ Languages & Frameworks Column -----------*/}
                        <LanguagesAndFrameworks />

                        {/*---------------- Experience Column -------------------*/}
                        <ExperienceColumn />
                    </div>

                </div>
            </div>
        </>
    )
}
