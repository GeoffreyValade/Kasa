import React from 'react'
import { Link } from "react-router-dom"
import './NotFound.css'

export default function NotFound() {

    return (
        <div className="container">
            <div className="error-container">
                <div className="texts-error-container">
                <h1>404</h1>
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                </div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}