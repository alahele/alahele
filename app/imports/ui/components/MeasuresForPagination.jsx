import React from 'react';
import PropTypes from 'prop-types';
import { MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import MeasureItem from './MeasureItem';
import { ROLE } from '../../api/role/Role';
import { ArrowRight, PersonPlus } from 'react-bootstrap-icons';

const MeasuresForPagination = ({ measures, loading }) => (
  <>
    {loading && <div> loading... </div>}
    <MDBTableHead>
      <tr>
        <th scope="col">Apr.&nbsp;</th>
        <th scope="col">Year&nbsp;</th>
        <th scope="col">Type&nbsp;</th>
        <th scope="col">Num&nbsp;</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Status</th>
        <th scope="col">Link</th>

        {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? ([
            <th scope="col">Assign</th>
          ,
        ]) : ''}
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
