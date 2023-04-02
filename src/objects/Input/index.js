import React, { Fragment } from "react";
import Label from "../Label";

const Input = ({ value, id, content }) => {
    return (
        <Fragment>
        <input id={id} className="input" type="checkbox" value={value} />
        <Label htmlFor={id} content={content} />
        </Fragment>
    )
}

export default Input