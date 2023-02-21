import React from 'react'

export default function ExperienceColumn() {
    return (
        <>
            {/*------------------ Experience Column -------------------------*/}
            <div className="col-lg-8">
                <h3>Experience</h3>
                <div className="d-flex flex-column">
                    <h6>Full Stack Software Engineer | <i>Coding Temple</i></h6>
                    <p><b>-</b> Constructed API routes that incorporated 
                        the HTTP methods allowing the client to Fetch a 
                        jsonified response.</p>
                    <p><b>-</b> Modeled ERDs passed down to relational databases 
                        using PostgreSQL withDBeaver to query, analyze, and 
                        manipulate data.</p>
                    <a className="align-self-end" href="../assets/Ibsy_Matute_Resume.pdf">
                        <button type="button" className="btn btn-dark mb-3">
                            Read more...
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
