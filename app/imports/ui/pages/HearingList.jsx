import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row, Nav } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { SortNumericUp, SortNumericDown, SortAlphaUp, SortAlphaDown, SortUp, SortDown } from 'react-bootstrap-icons';
import { PAGE_IDS } from '../utilities/PageIDs';
import { Hearings } from '../../api/hearing/HearingCollection';
import HearingItem from '../components/HearingItem';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBarHearings from '../components/SearchBarHearings';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import MeasurePagination from "../components/MeasurePagination";
import HearingPagination from "../components/HearingPagination";

/* A simple static component to render some text for the landing page. */
const HearingList = () => {
  let sortedHearings;
  const { ready, hearings } = useTracker(() => {
    const subscription = Hearings.subscribeHearings();
    const rdy = subscription.ready();
    const hearingItems = Hearings.find({}).fetch();
    return {
      hearings: hearingItems,
      ready: rdy,
    };
  }, []);

  const [sort, setSort] = useState(1);
  switch (sort) {
  case 1:
    sortedHearings = hearings.sort(function (a, b) {
      return a.measureType - b.measureType;
    });
    break;
  case 2:
    sortedHearings = hearings.sort(function (a, b) {
      return b.measureType - a.measureType;
    });
    break;
  case 3:
    sortedHearings = hearings.sort(function (a, b) {
      return a.measureNumber - b.measureNumber;
    });
    break;
  case 4:
    sortedHearings = hearings.sort(function (a, b) {
      return b.measureNumber - a.measureNumber;
    });
    break;
  case 5:
    sortedHearings = hearings.sort(function (a, b) {
      return new Date(a.datetime) - new Date(b.datetime);
    });
    break;
  case 6:
    sortedHearings = hearings.sort(function (a, b) {
      return new Date(b.datetime) - new Date(a.datetime);
    });
    break;
  default:
    break;
  }

  return (ready ? (
    <Container id={PAGE_IDS.HEARING_LIST}>
      <SearchBarHearings id={COMPONENT_IDS.SEARCH_BAR_HEARINGS} />
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
                <Dropdown.Item href="#/action-1" onClick={() => setSort(1)}>Measure Type <SortAlphaUp /> </Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => setSort(2)}>Measure Type <SortAlphaDown /> </Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => setSort(3)}>Measure Number <SortNumericUp /> </Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => setSort(4)}>Measure Number <SortNumericDown /> </Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => setSort(5)}>Date / Time <SortUp /> </Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => setSort(6)}>Date / Time <SortDown /> </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row />
          <Row className="d-inline">
            <Card className="my-4">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#first">Hearings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">My Hearings</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <MDBTable align="middle">
                  <HearingPagination sortedHearings={sortedHearings} />
                </MDBTable>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner message="Loading Hearings" />);
};

export default HearingList;
