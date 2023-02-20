import React from 'react'
import ExperienceColumn from './ExperienceColumn'
import FrameworksColumn from './FrameworksColumn'
import LanguagesColumn from './LanguagesColumn'

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

                    {/*------------ Languages & Frameworks Column -----------*/}
                    <div class="col-4" id="languages-frameworks">
                        <h3>Languages & Frameworks</h3>
                        <div class="row">

                            {/*-------------- Languages Column --------------*/}
                            <LanguagesColumn />

                            {/*-------------- Frameworks Column -------------*/}
                            <FrameworksColumn />

                        </div>
                    </div>

                    {/*---------------- Experience Column -------------------*/}
                    <ExperienceColumn />

                </div>
            </div>
        </>
    )
}
