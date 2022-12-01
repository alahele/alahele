import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const TestimonyItem = ({ testimony }) => (
  <tr>
    <td>{testimony.chair}</td>
    <td>{testimony.date}</td>
    <td>{testimony.measureType} {testimony.measureNumber}</td>
    <td>{testimony.body}</td>
    <td>{testimony.status}</td>
    <td><Link to={`/individual-testimony/${testimony._id}`}>View</Link></td>
  </tr>
);

// Require a document to be passed to this component.
TestimonyItem.propTypes = {
  testimony: PropTypes.shape({
    chair: PropTypes.string,
    date: PropTypes.string,
    measureType: PropTypes.string,
    body: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string,
    measureNumber: PropTypes.number,
  }).isRequired,
};

export default TestimonyItem;
