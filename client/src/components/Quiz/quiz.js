import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
import Footer from "../Footer";
import "./quiz.css";

const Quiz = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <p>This is the quiz modal</p>
        <form method="post">
           <label>Name:</label>
           <input type='text' placeholder="Name"/>
           <button type="submit">submit form</button>
        </form>
        <Button />
      </Col>
    </Row>
  </Container>
);

export default Quiz;