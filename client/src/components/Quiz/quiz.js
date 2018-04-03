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
 
}

render(){
  return (
    <div>
      <h1>QUIZ PAGE</h1>
      <Questions></Questions>
      <Link to="/results">
        <Button />
      </Link>
      <Footer />
      </div>
    )  
  }
}


export default Quiz;