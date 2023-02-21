import React from 'react'

export default function NavHamburger() {
    return (
        <>
            {/*---------------- Navbar Hamburger Menu -----------------------*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    )
}
