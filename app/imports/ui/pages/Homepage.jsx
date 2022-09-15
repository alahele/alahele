import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Homepage = () => {

  function handleClick() {
    window.location.pathname = '/';
  }
  return (
    <div className="homepage-background">
      <Container className="text-background">
        <h1 className="homepage-text">View Measures</h1>
        <h3 className="homepage-subtext">Explore existing measures, hearings, and testimonies here</h3>
      </Container>
      <div className="buttons-background">
        <Container className="card-container">
          <Row>
            <Col>
              <a className="no-style" href="bill-list">
                <Card className="bg-warning text-black" border="warning" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '20rem' }}>
                  <Card.Body>
                    <Card.Title>View Measures</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a className="no-style" href="hearing-list">
                <Card className="bg-warning text-black" border="warning" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '20rem' }}>
                  <Card.Body>
                    <Card.Title>View Hearings</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a className="no-style" href="testimony-list">
                <Card className="bg-warning text-black" border="warning" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '20rem' }}>
                  <Card.Body>
                    <Card.Title>View Testimonies</Card.Title>
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
