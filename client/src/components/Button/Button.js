import React from "react";
import "./Button.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = props => (
  <button className="start-btn" onClick={props.onClick}>
    {props.children}
  </button>
);



export default Button;
