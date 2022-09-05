import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
// import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Homepage = () => {

  function handleClick() {
    console.log('in cardClick');
  }
  return (
    <Container>
      <div className="mt-5">
        <Row>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title>View Existing Bills</Card.Title>
              <Card.Text>
                Description of View Exisiting Bills
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <div className="mt-5">
        <Row>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title>Go to My Email</Card.Title>
              <Card.Text>
                Description of Go to My Email
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <div className="mt-5">
        <Row>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title>View Archived Bills</Card.Title>
              <Card.Text>
                Description of View Archieved Bills
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <div className="mt-5">
        <Row>
          <Card className="bg-dark text-white" onClick={() => handleClick()} style={{ cursor: 'pointer', height: '15rem' }} border="primary">
            <Card.Body>
              <Card.Title>Add a Testimony</Card.Title>
              <Card.Text>
                Description of Add a Testimony
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </Container>
  );
};
export default Homepage;
