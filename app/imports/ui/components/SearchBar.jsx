import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const SearchBar = () => (
  <Form className="d-flex" id={COMPONENT_IDS.SEARCH_BAR}>
    <Form.Control
      id={COMPONENT_IDS.SEARCH_BAR_INPUT}
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form>
);

export default SearchBar;
