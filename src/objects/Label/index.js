import React from "react";
import './styles.css';

const Label = ({ content, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="label">{content}</label>
    )
}

export default Label