import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const HomePage = () => (
  <Container
    fluid
    style={{
      height: "100vh",
      color: "white",
      background: "linear-gradient(to right, #692022, #1b1819)"
    }}
  >
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col 
        xs={12} 
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
      <h1
          style={{
            fontSize: 65,
            lineHeight: "5rem"
          }}
        >
           VIRTUAL STARTUP
        </h1>
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h1
          style={{
            lineHeight: "3rem"
          }}
        >
          BECOME AN ENTREPRENEUR!
        </h1>
        <br />
        <div className="text-center">
          <Link
            to="/signup"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#9c0b0e",
              border: "none"
            }}
          >
            JOIN US!
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
