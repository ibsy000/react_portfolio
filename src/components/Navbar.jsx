import React from 'react'
import logo from '../assets/im.png'
import '../css/Navbar.css'
import NavbarLinks from './NavbarLinks'
import NavHamburger from './NavHamburger'

export default function Navbar() {
    return (
        <>
            {/*------------------------ Navbar ------------------------------*/}
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid p-3">

                    {/*------------------- Nav Logo -------------------------*/}
                    <img src={logo} alt="im-logo" id="nav-logo" />

                    {/*---------------- Hamburger Menu Button ---------------*/}
                    <NavHamburger />

                    {/*-------------------- Navbar Links --------------------*/}
                    <NavbarLinks />
                </div>
            </nav>
        </>
    )
}
