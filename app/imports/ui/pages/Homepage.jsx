import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
// import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Homepage = () => {

  function handleClick() {
    console.log('in cardClick');
  }
  return (
    <Container>
      <Row>
        <Col>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title className="text-center">View Existing Measures</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title className="text-center">Go to My Email</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title className="text-center">View My Notifications</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title className="text-center">View Hearing Schedule</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Homepage;
