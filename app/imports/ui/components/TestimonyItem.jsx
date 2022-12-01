import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const TestimonyItem = ({ testimony }) => (
  <tr>
    <td>{testimony.date}</td>
    <td>{testimony.measureType}</td>
    <td>{testimony.measureNumber}</td>
    <td>{testimony.position}</td>
    <td>{testimony.status}</td>
    <td><a href="/individualbill" type="button" className="btn btn-primary btn-sm">View</a></td>
  </tr>
);

// Require a document to be passed to this component.
TestimonyItem.propTypes = {
  testimony: PropTypes.shape({
    date: PropTypes.string,
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    position: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default TestimonyItem;
