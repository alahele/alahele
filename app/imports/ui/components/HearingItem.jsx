import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const HearingItem = ({ hearing }) => (
  <tr>
    <td>{hearing.year}</td>
    <td>{hearing.measureType}</td>
    <td>{hearing.measureNumber}</td>
    <td>{hearing.datetime}</td>
    <td>{hearing.description}</td>
    <td>{hearing.room}</td>
    <td>{hearing.notice}</td>
    <td><a href="/hearing" type="button" className="btn btn-primary btn-sm">View</a></td>
  </tr>
);

// Require a document to be passed to this component.
HearingItem.propTypes = {
  hearing: PropTypes.shape({
    year: PropTypes.number,
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    datetime: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.string,
    notice: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default HearingItem;
