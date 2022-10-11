import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import BillList from './BillList';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { PAGE_IDS } from '../utilities/PageIDs';

const Search = () => (
  <Container id={PAGE_IDS.SEARCH}>
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
      <Col xs={9}> <BillList /></Col>
    </Row>
  </Container>
);

export default Search;
