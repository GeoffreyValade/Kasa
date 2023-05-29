import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import KasaLogo from "../../assets/Image/Kasa_Logo_img.jpg"

export default function Navbar() {
    return (
        <nav>
            <div>
                <img src={KasaLogo} className="nav-logo" alt="Logo de Kasa"></img>
            </div>

            <div className="nav-links">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </nav>
    )
}