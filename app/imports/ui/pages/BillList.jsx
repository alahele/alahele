import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row, Nav } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { Measures } from '../../api/measure/MeasureCollection';
import { PAGE_IDS } from '../utilities/PageIDs';
import MeasureItem from '../components/MeasureItem';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

/* A simple static component to render some text for the BillList page. */
const BillList = () => {
  let sortedMeasures;
  const { ready, measures } = useTracker(
    () => {
      const subscription = Measures.subscribeMeasures();
      const rdy = subscription.ready();
      const measureItems = Measures.find({}).fetch();

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
                <Dropdown.Item onClick={() => setSort(1)}>Bill # (Ascending)</Dropdown.Item>
                <Dropdown.Item onClick={() => setSort(2)}>Bill # (Descending)</Dropdown.Item>
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
                    <Nav.Link href="#first">Bills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">My Bills</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <MDBTable align="middle">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Appropriation</th>
                      <th scope="col">Year</th>
                      <th scope="col">Type</th>
                      <th scope="col">Number</th>
                      <th scope="col">Code</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Link</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {sortedMeasures?.map((measure) => <MeasureItem key={measure._id} measure={measure} />)}
                  </MDBTableBody>
                </MDBTable>
                <MDBPagination className="mb-0 justify-content-center">
                  <MDBPaginationItem>
                    <MDBPaginationLink href="#">Previous</MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                    <MDBPaginationLink href="#">1</MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                    <MDBPaginationLink href="#">2</MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                    <MDBPaginationLink href="#">3</MDBPaginationLink>
                  </MDBPaginationItem>
                  <MDBPaginationItem>
                    <MDBPaginationLink href="#">Next</MDBPaginationLink>
                  </MDBPaginationItem>
                </MDBPagination>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner meassure="Loading Measures" />);
};

export default BillList;
