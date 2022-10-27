import React from 'react';
import '/client/style.css';
import { Card } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import LoadingSpinner from './LoadingSpinner';
import { UserProfiles } from '../../api/user/UserProfileCollection';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const UserPersonalInformationCard = ({ user, ready }) => ((ready) ? (
  <Card>
    <Card.Body>

      <Card.Img
        src="/images/sharky.png"
        className="rounded-circle img-fluid img-thumbnail"
        style={{ width: '12rem' }}
      />,
      <Card.Text className="user-profile-main-card">Name: {user.firstName} {user.lastName}

      </Card.Text>
      <Card.Text className="user-profile-main-card">Role: {user.role}</Card.Text>
      <Card.Text className="user-profile-main-card">Email: {user.email}</Card.Text>

    </Card.Body>
  </Card>

) : <LoadingSpinner meassure="Loading Measures" />);

UserPersonalInformationCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  user: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const userID = Meteor.user() ? Meteor.user()._id : ' ';
  const subscription = UserProfiles.subscribe();
  const ready = subscription.ready();
  const user = ready ? UserProfiles.findDoc({ userID }) : undefined;
  return {
    user,
    ready,
  };
})(UserPersonalInformationCard);

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
