import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
/* A simple static component to render some text for the landing page. */
const Homepage = () => {

  function handleClick() {
    window.location.pathname = '/';
  }
  return (
    <div className="homepage-background">
      <Container className="text-background">
        <h2 className="homepage-text">Welcome to Ala Hele</h2>
        <h4 className="homepage-subtext">The Latest Legislative Tracking System</h4>
      </Container>
      <div className="buttons-background">
        <Container className="card-container">
          <Row>
            <Col>
              <a className="no-style" href="bill-list">
                <Card className="bg-light text-black" border="" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '20rem', opacity: 0.9,}}>
                  <Card.Body>
                    <Card.Title className ="card-items">View Measures <ArrowRight className="ml-4" /></Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a className="no-style" href="hearing-list">
                <Card className="bg-light text-black" border="" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '20rem', opacity: 0.9,}}>
                  <Card.Body>
                    <Card.Title className ="card-items">View Hearings <ArrowRight className="ml-4" /></Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a className="no-style" href="testimony-list">
                <Card className="bg-light text-black" border="" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '20rem', opacity: 0.9,}}>
                  <Card.Body>
                    <Card.Title className ="card-items">View Testimonies <ArrowRight className="ml-4" /></Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Homepage;
