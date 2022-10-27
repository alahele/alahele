import React from 'react';
import PropTypes from 'prop-types';
import { MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import MeasureItem from './MeasureItem';

const MeasuresForPagination = ({ measures, loading }) => (
  <>
    {loading && <div> loading... </div>}
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
      {measures.map((measure) => <MeasureItem key={measure._id} measure={measure} />)}
    </MDBTableBody>
  </>
);

MeasuresForPagination.propTypes = {
  measures: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number,
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    code: PropTypes.string,
    measureTitle: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MeasuresForPagination;
