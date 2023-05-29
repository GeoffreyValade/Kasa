import React from "react";
import "./Banner.css"

export default function Banner({ bannerImg, bannerSpan }) {
    return (
        <div className="banner-container">
            <img src={bannerImg} alt="Côte en nature"/>
            <span>{bannerSpan}</span>
        </div>
    )
}