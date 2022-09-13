import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Image, Row } from 'react-bootstrap';
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
                  <h1>About US Section</h1>
                </Col>
              </Row>
            </Container>
          </>,
        ])}
    </div>
  );
};

export default Landing;
