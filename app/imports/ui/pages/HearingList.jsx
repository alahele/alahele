import React from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { PAGE_IDS } from '../utilities/PageIDs';
import { Hearings } from '../../api/hearing/HearingCollection';
import HearingItem from '../components/HearingItem';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

/* A simple static component to render some text for the landing page. */
const HearingList = () => {

  const { ready, hearings } = useTracker(() => {
    const subscription = Hearings.subscribeHearings();
    const rdy = subscription.ready();
    const hearingItems = Hearings.find({}).fetch();
    return {
      hearings: hearingItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id={PAGE_IDS.HEARING_LIST}>
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
              <Dropdown.Item href="#/action-1">Hearing #</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Committee</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Testifier</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Measure Type</th>
                <th scope="col">Measure Number</th>
                <th scope="col">Date Time</th>
                <th scope="col">Description</th>
                <th scope="col">Room</th>
                <th scope="col">Notice</th>
                <th scope="col">View Hearing</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {hearings.map((hearing) => <HearingItem key={hearing._id} hearing={hearing} />)}
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
  ) : <LoadingSpinner message="Loading Hearings" />);
};

export default HearingList;
