import React from 'react'

export default function NavbarLinks() {
    return (
        <>
            {/*----------------------- Navbar Links -------------------------*/}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav" id="nav-links">
                    <a className="nav-link" href="#top">Home</a>
                    <a className="nav-link" href="#about-me-hr">About</a>
                    <a className="nav-link" href="#skills-experience">Skills & Experience</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
            </div>
        </>
    )
}
