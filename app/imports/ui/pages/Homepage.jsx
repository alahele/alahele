import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Homepage = () => {

  function handleClick() {
    console.log('Redirecting...');
  }
  return (
    <Container className="card-container">
      <Row>
        <Col>
          <Card className="bg-primary text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '30rem' }}>
            <Card.Body>
              <Card.Title>View Existing Measures</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-danger text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '30rem' }}>
            <Card.Body>
              <Card.Title>Go to My Email</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card className="bg-success text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '30rem' }}>
            <Card.Body>
              <Card.Title>View My Notifications</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-warning text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '30rem' }}>
            <Card.Body>
              <Card.Title>View Hearing Schedule</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Homepage;
