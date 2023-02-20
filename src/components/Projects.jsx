import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

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

                    {/*----------------------- Accordian --------------------*/}
                    <div class="accordion accordion-flush" id="accordionFlushExample">

                        {/*------------------- Project 1 --------------------*/}
                        <Project1 />

                        {/*------------------- Project 2 --------------------*/}
                        <Project2 />

                        {/*------------------ Project 3 ---------------------*/}
                        <Project3 />
                        
                    </div>

                </div>
            </div>
        </>
    )
}
