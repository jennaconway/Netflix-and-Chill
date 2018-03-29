import React from "react";
import "./footer.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Footer = props => (
  <footer>
    <p> Copyright 2018 Jenna Conway </p>
  </footer>
);

export default Footer;
