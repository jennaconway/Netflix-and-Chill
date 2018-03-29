import React from "react";
import { Col, Row, Container } from "../Grid";
import "./results.css";
import Footer from "../Footer";
import Button from "../Button";

const Results = () => (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <p>YOUR RESULTS ARE HERE </p>
          <Button />
          <Footer />
        </Col>
      </Row>
    </Container>
  );

  export default Results;
  