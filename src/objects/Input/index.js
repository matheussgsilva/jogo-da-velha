import React from "react";

const Input = ({ value, id, type = "text"}) => {
    return (
        <input id={id} className="input" type={type} value={value} />
    )
}

export default Input