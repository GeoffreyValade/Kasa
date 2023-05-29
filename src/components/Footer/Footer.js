import React from 'react'
import './Footer.css'
import KasaLogoFooter from "../../assets/Image/Kasa logo footer.jpg"

export default function Footer() {

    return (
        <div className="footer-container">
            <footer>
                <img src={KasaLogoFooter} className="nav-logo" alt="Logo de Kasa"></img>
                <span>© 2020 Kasa. All rights reserved</span>
            </footer>
        </div>

    )
}