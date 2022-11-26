import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { ROLE } from '../../api/role/Role';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const HearingItem = ({ hearing }) => (
  <tr>
    <td>{hearing.measureType}</td>
    <td>{hearing.measureNumber}</td>
    <td>{hearing.datetime}</td>
    <td>{hearing.description}</td>
    <td>{hearing.room}</td>
    <td>{hearing.notice}</td>
    <td><Link to={`/hearing/${hearing._id}`}>View</Link></td>

    <td scope="col">
      {Roles.userIsInRole(Meteor.userId(), [ROLE.USER]) ? ([
        <Form.Check
          type="switch"
          id="custom-switch"
        />,
      ]) : ''}
    </td>
  </tr>
);

// Require a document to be passed to this component.
HearingItem.propTypes = {
  hearing: PropTypes.shape({
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
