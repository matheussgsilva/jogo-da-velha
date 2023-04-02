import React, { Fragment } from "react";
import Label from "../Label";

const Input = ({ value, id, content, type = "text"}) => {
    return (
        <Fragment>
        <input id={id} className="input" type={type} value={value} />
        <Label htmlFor={id} content={content} />
        </Fragment>
    )
}

export default Input