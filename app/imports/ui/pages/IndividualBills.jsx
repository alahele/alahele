import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Row, Container, Accordion, Tab, ListGroup } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { Stuffs } from '../../api/stuff/StuffCollection';
import LoadingSpinner from '../components/LoadingSpinner';

const IndividualBill = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker

  const { stuffs, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Stuffs.subscribeStuffAdmin();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const items = Stuffs.find({}).fetch();
    return {
      stuffs: items,
      ready: rdy,
    };

  }, []);
  return (ready ? (
  // Measure Number & Measure Title
    <Container md className="my-4">

      <Row>
        <Col md="auto"><h3>HB1941</h3></Col>
        <Col md="auto"><h3>RELATING TO EDUCATION.</h3></Col>
        <Col md="auto"><h3>2022</h3></Col>
      </Row>

      <Row>
        <Col md className="text-secondary">
          <ListGroup horizontal style={{ height: '25px', fontSize: '12px' }}>
            <h6 className="mx-3">Status:</h6>
            <ListGroup.Item>
              <p style={{ marginTop: '-0.3rem' }}>Introduced</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p style={{ marginTop: '-0.3rem' }}>Reviewed</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p style={{ marginTop: '-0.3rem' }}>Testimonies Submitted</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p style={{ marginTop: '-0.3rem' }}>Final Review</p>
            </ListGroup.Item>
            <ListGroup.Item variant="danger">
              <p style={{ marginTop: '-0.3rem' }}>Sent to Capital</p>
            </ListGroup.Item>
          </ListGroup>

        </Col>
      </Row>

      <Row className="my-4">
        <Col md>

          <Accordion defaultActiveKey="0" style={{ width: '50rem' }}>
            <Accordion.Item eventKey="0" className="border-0">
              <Accordion.Button style={{ width: '15rem', height: '5px', fontWeight: 'bolder' }}>Measure Overview</Accordion.Button>

              <Accordion.Body style={{ backgroundColor: 'whitesmoke' }}>
                <dl className="row">
                  <dt className="col-sm-3">Description lists</dt>
                  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                  <dt className="col-sm-3">Term</dt>
                  <dd className="col-sm-9">
                    <p>Definition for the term.</p>
                    <p>And some more placeholder definition text.</p>
                  </dd>

                  <dt className="col-sm-3">Another term</dt>
                  <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

                  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                  <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                  <dt className="col-sm-3">Nesting</dt>
                  <dd className="col-sm-9">
                    <dl className="row">
                      <dt className="col-sm-4">Nested definition list</dt>
                      <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside
                        your definition list.
                      </dd>
                    </dl>
                  </dd>
                </dl>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md>
          <Tabs
            defaultActiveKey="summary"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="summary" title="Summary">
              <dl className="row">
                <dt className="col-sm-3">Description lists</dt>
                <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                <dt className="col-sm-3">Term</dt>
                <dd className="col-sm-9">
                  <p>Definition for the term.</p>
                  <p>And some more placeholder definition text.</p>
                </dd>

                <dt className="col-sm-3">Another term</dt>
                <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

                <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                <dt className="col-sm-3">Nesting</dt>
                <dd className="col-sm-9">
                  <dl className="row">
                    <dt className="col-sm-4">Nested definition list</dt>
                    <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside
                      your definition list.
                    </dd>
                  </dl>
                </dd>
              </dl>
            </Tab>
            <Tab eventKey="hearings" title="Hearings" />
            <Tab eventKey="relatedbills" title="Related Bills" disabled />
          </Tabs>
        </Col>
      </Row>

    </Container>

  ) : <LoadingSpinner />);
};

export default IndividualBill;
