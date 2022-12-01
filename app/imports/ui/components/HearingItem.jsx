import React, { useState } from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROLE } from '../../api/role/Role';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const HearingItem = ({ hearing }) => {
  const [checkedList, setCheckedList] = useState([]);

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      // Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  return (
    <tr>
      <td>{hearing.measureType}</td>
      <td>{hearing.measureNumber}</td>
      <td>{hearing.datetime}</td>
      <td>{hearing.description}</td>
      <td>{hearing.room}</td>
      <td>{hearing.notice}</td>
      <td><Link to={`/hearing/${hearing._id}`}>View</Link></td>

      <th scope="col">
        {Roles.userIsInRole(Meteor.userId(), [ROLE.USER]) ? ([
          <input
            type="checkbox"
            value={hearing._id}
            onChange={handleSelect}
          />,
        ]) : ''}
      </th>
    </tr>
  );
};

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
