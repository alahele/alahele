import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Row, Container, Accordion, Badge } from 'react-bootstrap';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { Measures } from '../../api/measure/MeasureCollection';

const IndividualBill = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { _id } = useParams();

  const { ready, measures } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Measures.subscribeMeasures();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    const measureItems = Measures.find({ _id: _id }, { sort: { name: 1 } }).fetch();
    const measureDoc = measureItems[0];
    return {
      measures: measureDoc,
      ready: rdy,
    };

  }, [_id]);

  return (ready ? (
  // Measure Number & Measure Title
    <Container id={PAGE_IDS.INDIVIDUAL_BILL}>
      <a className="btn btn-primary btn-sm mb-2" href="/bill-list">back to bill list</a>

      <Row className="individual-bill-header">
        <Col className="display-1" md="auto" key="secondary"><h5>{measures.code}  &nbsp; | &nbsp;  {measures.measureTitle}  &nbsp; | &nbsp; {measures.year}</h5></Col>
        <Col>
          <Badge bg="danger">PDF</Badge>{' '}
          <Badge bg="info">Archive</Badge>{' '}
        </Col>
        <Col md="auto"><Badge bg="primary">Track This Bill</Badge>{' '}</Col>
      </Row>

      <Row className="my-4">
        <Col md="auto">

          <Accordion defaultActiveKey="0" className="accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Body className="individual-bill">
                <dl className="row">
                  <dt className="col-sm-2">Measure:</dt>
                  <dd className="col-sm-9">{measures.code}</dd>

                  <dt className="col-sm-2">Status:</dt>
                  <dd className="col-sm-9">{measures.status}</dd>

                  <dt className="col-sm-2">Report Title:</dt>
                  <dd className="col-sm-9">{measures.reportTitle}</dd>

                  <dt className="col-sm-2">Description:</dt>
                  <dd className="col-sm-9">{measures.description}</dd>

                  <dt className="col-sm-2">Introducer:</dt>
                  <dd className="col-sm-9">{measures.introducer}</dd>

                  <dt className="col-sm-2">Current Referral:</dt>
                  <dd className="col-sm-9">{measures.currentReferral}</dd>

                </dl>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="individual-bill">
              <dt className="col-sm-3"><a href={measures.measurePdfUrl}>View Official Measure</a></dt>
            </Accordion.Item>

          </Accordion>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default IndividualBill;
