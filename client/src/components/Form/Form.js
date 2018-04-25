import React from "react";
import "./Form.css";
import Button from "../../components/Button";
import About from "../../components/About"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

// class About extends Component {
//   state = {
//     name: "",
//     email: ""
//   };

const Form = props => {
  console.log("props", props);
  return(
  <div>
    <form>
      <h2>Login</h2>
      <label>Name:</label>
      <input onChange={props.handleInputChange} type="text" name="name" id="nameInput" value={props.name} />

      <label>Email:</label>
      <input onChange={props.handleInputChange} type="text" name="email" id="emailInput" value={props.email} />
    </form>
    <Button onClick={props.handleFormSubmit}>Submit</Button>
  </div>
);}



export default Form;
