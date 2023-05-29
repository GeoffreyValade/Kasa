import React, { useState, useRef } from "react";
import './Collapsible.css'
import '../About/About.js'

export default function Collapsible (props) {
    const [open, setOPen] = useState(false);

    const contentRef = useRef();

    const toggle = () => {
        setOPen(!open)
    }

    return (
        <div className="collapse-container">
            <button className="toggle" onClick={toggle}>{props.label}</button>

            <div className="content-parent"
                ref={contentRef}
                style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
                <div className="content">{props.children}</div>
            </div>
        </div>
    )
}