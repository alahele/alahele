import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Image, Row, FloatingLabel, Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Landing = () => {

  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <div>
      {currentUser ? ([null]) :
        ([
          <>
            <Image id="home-img" className="d-block w-100" fluid src="../images/state-capitol.jpg" />
            <Container id={PAGE_IDS.LANDING} className="py-3">
              <Row className="align-middle text-center">
                <Col className="d-flex flex-column justify-content-center">
                  <Row xs={1} md={2} className="g-4">
                    <div>
                      <Card>
                        <Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroupItem>
                              <Card.Title>About Us</Card.Title>
                            </ListGroupItem>
                            <Card.Text>

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

                              <p>[ala hele] noun</p>

                              <p>1. Pathway, route, road, way to go, itinerary, trail, highway, means of transportation.
                                ʻO ka pono koʻu ala hele, my course is righteousness.
                              </p>

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
                              <ul>
                                <li>Zak Gilbert</li>
                                <li>Cathy Kim</li>
                                <li>Steven Le</li>
                                <li>William Liang</li>
                                <li>Lise Nilsen</li>
                                <li>Kristine Rivera</li>
                                <li>Hyunjun Song</li>
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
                </Col>
              </Row>
            </Container>
          </>,
        ])}
    </div>
  );
};

export default Landing;
