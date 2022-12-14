import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import PropTypes from 'prop-types';
import { MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import HearingItem from './HearingItem';
import { ROLE } from '../../api/role/Role';

const HearingForPagination = ({ hearings, loading }) => (
  <>
    {loading && <div> loading... </div>}
    <MDBTableHead>
      <tr>
        <th scope="col">Measure Type</th>
        <th scope="col">Measure Number</th>
        <th scope="col">Date/Time</th>
        <th scope="col">Description</th>
        <th scope="col">Room</th>
        <th scope="col">Notice</th>
        <th scope="col">View</th>

        {Roles.userIsInRole(Meteor.userId(), [ROLE.USER]) ? ([
          <th scope="col">Save Hearing</th>,
        ]) : ''}
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      {hearings.map((hearing) => <HearingItem key={hearing._id} hearing={hearing} />)}
    </MDBTableBody>
  </>
);

HearingForPagination.propTypes = {
  hearings: PropTypes.arrayOf(PropTypes.shape({
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    datetime: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.string,
    notice: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default HearingForPagination;
