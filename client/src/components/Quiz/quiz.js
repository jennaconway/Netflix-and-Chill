import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import Questions from "../../components/Questions";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./quiz.css";
import Link from "../../components/Link";


class Quiz extends Component {

  // Create an array of questions/answers
state = {
  score: 0
}
  handleInputChange = event => {
        const score = event.target.value;          // you will always need to reference input name
        const value = parseInt(event.target.value)      // and values
       this.setState({
          score: this.state.score = this.state.score + value
                                           // [name] will pull the input tag's name value,
       });  
       console.log(this.state.score)                                   // "value" will be the value of the input
     };

     handleFormSubmit = event => {             // User clicks submit with search input
           event.preventDefault();                 // prevents page refresh
           //<validations>
           this.setState({                         //** If OnChange is being used, no need to use setState
             score: event.target.value
           })
      
          };
          

render(){
  return (
    <div>
      <h1>QUIZ PAGE</h1>
      <Questions score={this.handleInputChange}>
        </Questions>          {/* pass the this.HandleInputChange to Questions */}
        <Button>Submit</Button>        {/* pass the this.handleFormSubmit to Questions */}
        <Link to="/results">
        </Link>

      <Footer />
      </div>
    )  
  }
};


export default Quiz;