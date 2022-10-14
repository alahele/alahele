import React from 'react';
import PropTypes from 'prop-types';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const MeasureItem = ({ measure }) => (
  <tr>
    <td>{measure.year}</td>
    <td>{measure.measureType}</td>
    <td>{measure.measureNumber}</td>
    <td>{measure.code}</td>
    <td>{measure.measureTitle}</td>
    <td>{measure.description}</td>
    {/* eslint-disable-next-line react/prop-types */}
    <td>{measure.status}</td>
    <td><a id={COMPONENT_IDS.INDIVIDUAL_BILL_BUTTON} href="/individualbill" type="button" className="btn btn-primary btn-sm">View</a></td>
  </tr>
);

// Require a document to be passed to this component.
MeasureItem.propTypes = {
  measure: PropTypes.shape({
    year: PropTypes.number,
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    code: PropTypes.string,
    measureTitle: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default MeasureItem;
