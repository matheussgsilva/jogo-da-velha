import React, { Fragment } from "react";
import "./styles.css";

import Input from "../Input";
import Label from "../Label";

const Checkbox = ({ id, value, content }) => {
    return (
        <Fragment>
        <Input id={id} value={value} type="checkbox" />
        <Label htmlFor={id} content={content} />
        </Fragment>
    ) 
}

export default Checkbox