import React from 'react'
import HeroImage from './components/HeroImage'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <HeroImage />
            </div>
        </>
    )
}
