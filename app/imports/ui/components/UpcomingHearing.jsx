import React from 'react';
import '/client/style.css';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const UpcomingHearing = props => {
  const { hearing } = props;
  return (
    <Card>
      <Card.Header>
        {`${hearing.measureType.toUpperCase()} ${hearing.measureNumber}`}
      </Card.Header>
      <Card.Body>
        <Card.Text>{hearing.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

UpcomingHearing.propTypes = {
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

export default UpcomingHearing;
