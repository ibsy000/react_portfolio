import React from 'react'
import ProjectsAccordian from './ProjectsAccordian'

export default function Projects() {
    return (
        <>
            {/*----------------------- Projects -----------------------------*/}
            <hr id="projects"/>
            <div class="container">
                <div class="row">

                    {/*-------------------- Projects Header -----------------*/}
                    <h1 id="projects-header"><code>&lt; Projects /&gt;</code></h1>
                    <hr/>

                    {/*------------------- Projects Accordian ---------------*/}
                    <ProjectsAccordian />

                </div>
            </div>
        </>
    )
}
