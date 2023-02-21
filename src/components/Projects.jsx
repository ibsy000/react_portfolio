import React from 'react'
import ProjectsAccordian from './ProjectsAccordian'
import '../css/ProjectsAccordian.css'

export default function Projects() {
    return (
        <>
            {/*----------------------- Projects -----------------------------*/}
            <hr id="projects"/>
            <div className="container">
                <div className="row">

                    {/*-------------------- Projects Header -----------------*/}
                    <h1 id="projects-header"><code>&lt; Projects /&gt;</code></h1>
                    <hr/>

                </div>
                
                    <div className="row" id="projects-accordian">

                    {/*------------------- Projects Accordian ---------------*/}
                    <ProjectsAccordian />

                    </div>

            </div>
        </>
    )
}
