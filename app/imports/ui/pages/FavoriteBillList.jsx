import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row, Nav } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable } from 'mdb-react-ui-kit';
import { SortNumericUp, SortNumericDown } from 'react-bootstrap-icons';
import { PAGE_IDS } from '../utilities/PageIDs';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import MeasurePagination from '../components/MeasurePagination';
import { SavedMeasure } from '../../api/measure/SavedMeasureCollection';

/* A simple static component to render some text for the BillList page. */
const FavoriteBillList = () => {
  let sortedMeasures;
  const { ready, measures } = useTracker(
    () => {
      const subscription = SavedMeasure.subscribeMeasures();
      const rdy = subscription.ready();
      const measureItems = SavedMeasure.find({}).fetch();

      return {
        measures: measureItems,
        ready: rdy,
      };
    },

    [],
  );
  const [sort, setSort] = useState(1);

  switch (sort) {
  case 1:
    sortedMeasures = measures.sort(function (a, b) {
      return a.measureNumber - b.measureNumber;
    });
    break;
  case 2:
    sortedMeasures = measures.sort(function (a, b) {
      return b.measureNumber - a.measureNumber;
    });
    break;
  case 3:
    sortedMeasures = measures.sort(function (a, b) {
      return b.bitAppropriation - a.bitAppropriation;
    });
    break;
  case 4:
    sortedMeasures = measures.sort(function (a, b) {
      return a.bitAppropriation - b.bitAppropriation;
    });
    break;
  default:
    break;
  }
  return (ready ? (
    <Container id={PAGE_IDS.BILL_LIST}>
      <SearchBar id={COMPONENT_IDS.SEARCH_BAR} />
      <Row>
        <Col xs={3}>
          <Card className="filter">
            <Card.Header>Filter</Card.Header>
            <Card.Body>
              <Form>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" />

                <Form.Label>Number</Form.Label>
                <Form.Control type="number" placeholder="Number" />

                <Form.Label>Code</Form.Label>
                <Form.Control type="text" placeholder="code" />

                <Form.Label inline>Office</Form.Label>
                <br />
                <Form.Check inline label="OSIP" />
                <Form.Check inline label="OFS" />
                <Form.Check inline label="OCID" />
                <Form.Check inline label="OSSS" />
                <Form.Check inline label="OTM" />
                <Form.Check inline label="DEPUTY" />
                <Button className="mt-4 float-end" type="submit">Filter</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={9}>
          <Row className="float-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSort(1)}>Bill # <SortNumericUp /> </Dropdown.Item>
                <Dropdown.Item onClick={() => setSort(2)}>Bill # <SortNumericDown /> </Dropdown.Item>
                <Dropdown.Item onClick={() => setSort(3)}>Appropriation Bill</Dropdown.Item>
                <Dropdown.Item onClick={() => setSort(4)}>Non-Appropriation Bill</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>

          <Row className="d-inline">
            <Card className="my-4">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="/bill-list">Bills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">My Bills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/favorite">My Favorites</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <MDBTable align="middle">
                  <MeasurePagination sortedMeasures={sortedMeasures} />
                </MDBTable>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner meassure="Loading Measures" />);
};

export default FavoriteBillList;
