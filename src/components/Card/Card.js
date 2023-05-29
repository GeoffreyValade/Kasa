import React from "react";
import "./Card.css"

export default function Card({ imgSrc, imgAlt, title, link }) {
    return (
        <div className="card-container">
            <a className="card-link" href={link}>
                <img src={imgSrc} alt={imgAlt} className="card-img" />
                <div className="title-container">
                    <h1 className="card-title">{title}</h1>
                </div>
            </a>
        </div>
    );
};