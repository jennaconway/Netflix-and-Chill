import React, { Component } from "react";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer/footer";
import Button from "../Button"; 
import Form from "../Form";
import Header from "../../components/Header";

class About extends Component {
  state = {
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1>Who Should You Chill With?</h1>
              <p>About this quiz etc etc etc etc etc etc</p>
              <Form />
            <Link to="/quiz">
              <Button>Start Quiz</Button> 
            </Link>       
            <Footer />
          </Col>         
        </Row>
      </Container>
    );
  }
}

export default About;
