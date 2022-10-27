import React from 'react';
import '/client/style.css';
import { Toast } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Notification = () => (
  <Toast>
    <Toast.Header>
      <img className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small className="text-muted">just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
  </Toast>
);

// Require a document to be passed to this component.
/*
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

 */

export default Notification;
