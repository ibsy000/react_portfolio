import React from 'react'

export default function Project1() {
    return (
        <>
            {/*------------------------ Project 1 ---------------------------*/}
            <div class="accordion-item">

                {/*-------------------- Project1 Header ---------------------*/}
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed bg-warning " type="button" 
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" 
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        Project #1
                    </button>
                </h2>

                {/*--------------------- Project1 Content -------------------*/}
                <div id="flush-collapseOne" class="accordion-collapse collapse" 
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body d-flex">

                        {/*------------------ Project1 Image ----------------*/}
                        <img src="https://picsum.photos/500/300" class="rounded" alt="..."/>

                        {/*---------------- Project1 Desciption -------------*/}
                        <ul>
                            <p><b>Tech Stack:</b> Python, Flask, SQLAlchemy,
                                JavaScript, React, Node.js
                            </p>
                            <li>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Consectetur nulla 
                                deserunt accusamus a voluptates, 
                                fugit at dicta perferendis rem libero 
                                magni eos voluptatem totam facere? 
                                Id quo autem accusantium tempora?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Reiciendis exercitationem 
                                quod quos vitae totam unde, minus 
                                deleniti quasi dolorum quibusdam aut 
                                porro fugit neque pariatur mollitia 
                                sunt sapiente temporibus ab.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Odit ipsam mollitia 
                                iusto esse pariatur laudantium! 
                                Temporibus iusto ex, facere vitae 
                                pariatur consectetur incidunt assumenda 
                                et nam quam, maxime obcaecati reprehenderit.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
