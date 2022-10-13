import React from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
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

  const { ready, measures } = useTracker(() => {
    const subscription = Measures.subscribeMeasures();
    const rdy = subscription.ready();
    const measureItems = Measures.find({}).fetch();

    return {
      measures: measureItems,
      ready: rdy,
    };
  }, []);

  let sortedMeasures;

  sortedMeasures = measures;
  console.log(sortedMeasures);

  function handleSort(sortOption) {
    switch (sortOption) {
    case 1:
      console.log('1');
      break;
    case 2:
      console.log('2');
      break;
    case 3:
      console.log('3');
      break;
    case 4:
      console.log('4');
      break;
    case 5:
      sortedMeasures = measures.sort(function (a, b) {
        window.location.pathname = '/bill-list';
        return b.measureNumber - a.measureNumber;
      });
      console.log(sortedMeasures);
      break;
    default:
    }
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
          <Dropdown className="float-end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={() => handleSort(1)}>Measure Number</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={() => handleSort(2)}>Bill/Resolution #</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => handleSort(3)}>Date</Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={() => handleSort(4)}>Status</Dropdown.Item>
              <Dropdown.Item href="#/action-5" onClick={() => handleSort(5)}>Testifier</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
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
              {sortedMeasures.map((measure) => <MeasureItem key={measure._id} measure={measure} />)}
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
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner meassure="Loading Measures" />);
};

export default BillList;
