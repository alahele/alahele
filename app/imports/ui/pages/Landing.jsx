import React from 'react';
import { Col, Container, Image, Row, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
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
                Aloha! Welcome to Alahele. Our team is comprised of UH Manoa Students who are dedicated to helping you find your alahele throught the legislative process.

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

                <p>Zak Gilbert</p>
                <p>Cathy Kim</p>
                <p>Steven Le</p>
                <p>William Liang</p>
                <p>Yong-Sung Masuda</p>
                <p>Lise Nilsen</p>
                <p>Kristine Rivera</p>
                <p>Hyunjun Song</p>
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
                <Card.Title>Ask Our Team</Card.Title>
              </ListGroupItem>
              <Card.Text>
                Under Maintenance
              </Card.Text>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </Row>
  </Container>
);

export default Landing;
