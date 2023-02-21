import React from 'react'

export default function Project2() {
    return (
        <>
            {/*------------------------ Project 2 ---------------------------*/}
            <div className="accordion-item">

                {/*-------------------- Project2 Header ---------------------*/}
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed bg-danger " type="button" 
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" 
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        Project #2
                    </button>
                </h2>

                {/*--------------------- Project2 Content -------------------*/}
                <div id="flush-collapseTwo" className="accordion-collapse collapse" 
                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body d-flex">

                        {/*------------------ Project2 Image ----------------*/}
                        <img src="https://picsum.photos/500/300" className="rounded" alt="..."/>

                        {/*---------------- Project2 Desciption -------------*/}
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
