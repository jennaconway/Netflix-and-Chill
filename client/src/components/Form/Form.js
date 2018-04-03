import React from "react";
import "./Form.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Form = props => (
    <div>
      <form>TEST FORM
      <h2>Login</h2>
        <label>Name:</label>
        <input type="text" name="name" id="nameInput" />
        
        <label>Email:</label>
        <input type="text" name="email" id="emailInput" />
      </form>
    </div>
);



export default Form;
