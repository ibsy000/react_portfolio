import React from 'react'

export default function Project3() {
    return (
        <>
            {/*------------------------ Project 3 ---------------------------*/}
            <div className="accordion-item">

                {/*-------------------- Project3 Header ---------------------*/}
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed bg-success" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" 
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        Project #3
                    </button>
                </h2>

                {/*--------------------- Project3 Content -------------------*/}
                <div id="flush-collapseThree" className="accordion-collapse collapse" 
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body d-flex">

                        {/*------------------ Project3 Image ----------------*/}
                        <img src="https://picsum.photos/500/300" className="rounded" alt="..."/>

                        {/*---------------- Project3 Desciption -------------*/}
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
