import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row, Nav } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable } from 'mdb-react-ui-kit';
import { SortNumericUp, SortNumericDown } from 'react-bootstrap-icons';
import { Measures } from '../../api/measure/MeasureCollection';
import { Offices } from '../../api/office/OfficeCollection';
import { MeasureOffices } from '../../api/office/MeasureOfficeCollection';
import { PAGE_IDS } from '../utilities/PageIDs';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import MeasurePagination from '../components/MeasurePagination';
import { defineMethod } from "../../api/base/BaseCollection.methods";

/* A simple static component to render some text for the BillList page. */
const BillList = () => {
  let sortedMeasures;

  function pluck(array, key) {
    return array.map(o => o[key]);
  }

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

  const { officeRdy, offices } = useTracker(
    () => {
      const subscription = Offices.subscribeOffices();
      const rdy = subscription.ready();
      const officeItems = Offices.find({}).fetch();
      return {
        offices: officeItems,
        officeRdy: rdy,
      };
    },
    [],
  );

  const { measureOffices } = useTracker(
      () => {
        const subscription = MeasureOffices.subscribeMeasureOffices();
        const rdy = subscription.ready();
        const measureOfficeItems = MeasureOffices.find({}).fetch();
        return {
          measureOffices: measureOfficeItems
        };
      },
      [],
  );
  const [sort, setSort] = useState(1);
  const [office, setOffice] = useState(1);

  //measures.map((measure) => MeasureOffices._collection.insert({ measureID: measure._id, officeID: 'kemCsFCDBzDRth6So' }));
  const collectionName = MeasureOffices.getCollectionName();
  // measures.map((measure) => {
  //   let definitionData = { measureID: measure._id, officeID: 'kemCsFCDBzDRth6So' };
  //   defineMethod.callPromise({ collectionName, definitionData })
  // });
  // console.log(measures);
  console.log(offices);

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

  switch (office) {
    case '1':
      // sortedMeasures = measures.sort(function (a, b) {
      //   return a.measureNumber - b.measureNumber;
      // });
        console.log("measureoffice before the sort:");
        console.log(measureOffices);
        let primary = offices[0]._id;
        // let officeSortedMeasures = measureOffices.filter(function (measureOffice) {
        //   measureOffice.officeID == primary;
        // });
        let officeSortedMeasureOffices = measureOffices.filter(measureOffice => measureOffice.officeID === primary);
        let plucked = pluck(officeSortedMeasureOffices, 'measureID');
        let finalResult = measures.filter(measure => plucked.indexOf(measure._id) >= 0);
        console.log("printing sorted measure result:");
        console.log(officeSortedMeasureOffices);
        console.log("final result:");
        console.log(finalResult);
      break;
    case '2':
      sortedMeasures = measures.sort(function (a, b) {
        return b.measureNumber - a.measureNumber;
      });
      break;
    case '3':
      sortedMeasures = measures.sort(function (a, b) {
        return b.bitAppropriation - a.bitAppropriation;
      });
      break;
    case '4':
      sortedMeasures = measures.sort(function (a, b) {
        return a.bitAppropriation - b.bitAppropriation;
      });
      break;
    case '5':
      break;
    case '6':
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

                <Form.Label inline>Primary Office</Form.Label>
                <br />
                <Form.Select aria-label="Primary Office" onChange={(event) => setOffice(event.target.value)}>
                  <option>Select Office..</option>
                  <option value="1">OSIP</option>
                  <option value="2">OFS</option>
                  <option value="3">OCID</option>
                  <option value="4">OSSS</option>
                  <option value="5">OTM</option>
                  <option value="6">DEPUTY</option>
                </Form.Select>
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
                    <Nav.Link href="#first">Bills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">My Bills</Nav.Link>
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

export default BillList;
