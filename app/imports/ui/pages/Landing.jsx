import React from 'react';
import { Col, Container, Image, Row, Card, ListGroup, ListGroupItem, Form, FloatingLabel, Button} from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Image roundedCircle src="/images/meteor-logo.png" width="150px" />
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Welcome to this template</h1>
        <p>Now get to work and modify this app!</p>
      </Col>

    </Row>

    <Row xs={1} md={2} className="g-4">
      <div>
        <Card>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Title>About Us</Card.Title>
              </ListGroupItem>
              <Card.Text>
                <p></p>
                Aloha! Welcome to Alahele. Our team is comprised of UH Manoa Students who are dedicated to helping you find your alahele through the legislative process.

              </Card.Text>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Title>Alahele Defined</Card.Title>
              </ListGroupItem>
              <Card.Text>
                <p></p>
                <p>[ala hele] noun</p>

                <p>1. Pathway, route, road, way to go, itinerary, trail, highway, means of transportation.
                  ʻO ka pono koʻu ala hele, my course is righteousness.</p>

              </Card.Text>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>


      <div>
        <Card>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Title>Get To Know Our Team</Card.Title>
              </ListGroupItem>
              <Card.Text>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Zak Gilbert</li>
                  <li className="list-group-item">Cathy Kim</li>
                  <li className="list-group-item">Steven Le</li>
                  <li className="list-group-item">William Liang</li>
                  <li className="list-group-item">Yon-Sung Masuda</li>
                  <li className="list-group-item">Lise Nilsen</li>
                  <li className="list-group-item">Kristine Rivera</li>
                  <li className="list-group-item">Hyunjun Song</li>
                </ul>
              </Card.Text>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Card.Title>Contact Us</Card.Title>
              </ListGroupItem>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="name@example.com" disabled />
            </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                />
              </FloatingLabel>

              <Button variant="outline-secondary" size="sm">Submit</Button>{' '}


          </ListGroup>

          </Card.Body>
        </Card>
      </div>
    </Row>
  </Container>
);

export default Landing;
