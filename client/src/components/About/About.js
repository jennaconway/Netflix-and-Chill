import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer/footer";
import Button from "../Button";
import Form from "../Form";
import Header from "../../components/Header";

class About extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    this.loadUsers();

  }
  loadUsers = () => {
    API.getUsers()
      .then(res => {
        console.log("res", res)
      })
  }
  //add a function that makes calls the API get user method
  handleFormSubmit = event => {
    console.log("handleFormSubmit");
    event.preventDefault();
    API.create({
      email: this.state.email,
      name: this.state.name
    })
    console.log(this.state)

  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({

      [name]: value

      // [name] will pull the input tag's name value,
    });
    console.log("inputchange state:", this.state);
    // "value" will be the value of the input
  };


  //add onClick to form


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Who Should You Chill With?</h1>
            <p>Netflix & Chill implements friend matching based on the user's responses to a eleven question survey. When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.</p>
            <Form handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
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
