import React from 'react';
import '/client/style.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { PAGE_IDS } from '../utilities/PageIDs';
import MeasuresGrid from '../components/MeasuresGrid';
import UserPersonalInformationCard from '../components/UserPersonalInformationCard';
import UserNotifications from '../components/UserNotfications';
import UpcomingHearings from '../components/UpcomingHearings';

import { Measures } from '../../api/measure/MeasureCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { ROLE } from '../../api/role/Role';
import AdminCard from '../components/AdminCard';
import MeasurePagination from '../components/MeasurePagination';

/** Render the current users personal information. */
const User = () => {

  // eslint-disable-next-line no-unused-vars
  const { ready, measures } = useTracker(() => {
    const subscription = Measures.subscribeMeasures();
    const rdy = subscription.ready();
    const measureItems = Measures.find({}).fetch();

    return {
      measures: measureItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id={PAGE_IDS.USER_PROFILE} className="py-3">
      <Container>
        <Row>
          {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? ([
            <Col> <AdminCard /> </Col>,
          ]) : ([
            <Col> <UserPersonalInformationCard /> </Col>,
          ])}
          <Col> <UpcomingHearings /> </Col>
        </Row>
        <Row>
          <Card>
            <Card.Header>Measures</Card.Header>
            <MeasurePagination sortedMeasures={measures}/>
          </Card>
        </Row>
      </Container>
    </Container>
  ) : <LoadingSpinner message="Loading Measures" />);
};

export default User;
