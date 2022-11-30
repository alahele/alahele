import React from 'react';
import '/client/style.css';
import { Card, Container } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Hearings } from '../../api/hearing/HearingCollection';
import UpcomingHearing from './UpcomingHearing';
import LoadingSpinner from './LoadingSpinner';

const UpcomingHearings = () => {
  // eslint-disable-next-line no-unused-vars
  const { ready, hearings } = useTracker(() => {
    const subscription = Hearings.subscribeHearings();
    const rdy = subscription.ready();
    const hearingItems = Hearings.find({}).fetch();
    return {
      hearings: hearingItems,
      ready: rdy,
    };
  }, []);

  return (true ? (
    <Container>
      <Card>
        <Card.Header>Upcoming Hearings</Card.Header>
      </Card>
      {/* eslint-disable-next-line no-unused-vars */}
      {hearings.map((hearing, idx) => (
        <UpcomingHearing hearing={hearing} />
      ))}
    </Container>
  ) : <LoadingSpinner message="Loading Hearings" />);
};
export default UpcomingHearings;
