import React from 'react'
import logo from '../assets/im.png'
import '../css/Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid p-3">

                    <img src={logo} alt="im-logo" id="nav-logo" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav" id="nav-links">
                            <a className="nav-link" href="#top">Home</a>
                            <a className="nav-link" href="#about-me-hr">About</a>
                            <a className="nav-link" href="#skills-experience">Skills & Experience</a>
                            <a className="nav-link" href="#projects">Projects</a>
                            <a className="nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
