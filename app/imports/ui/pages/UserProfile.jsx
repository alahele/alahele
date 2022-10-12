import React from 'react';
import '/client/style.css';
import { Card, Container } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';
import MeasuresGrid from '../components/MeasuresGrid';
import { Measures } from '../../api/measure/MeasureCollection';

/** Render the current users personal information. */
const UserProfile = () => {

  // eslint-disable-next-line no-unused-vars
  const { ready, measures } = useTracker(() => {
    const subscription = Measures.subscribeMeasures();
    const rdy = subscription.ready();
    const measureList = Measures.find({}).fetch();

    return {
      measures: measureList,
      ready: rdy,
    };
  }, []);

  const user = {
    name: 'sharky mc sharkertons',
    title: 'DOE Human Resources',
    img: '/images/sharky.png',
    priv: 'Admin',
    measures: [
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
      {
        code: '29-25(d), HRS',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
      },
    ],
  };
  const billsFollowed = `Bills Followed: ${user.measures.length}`;
  return (
    <Container id={PAGE_IDS.USER_PROFILE} className="py-3">
      <Card>
        <Card.Body className="text-center">
          <Card.Img
            src={user.img}
            className="rounded-circle img-fluid img-thumbnail"
            style={{ width: '12rem' }}
          />
          <Card.Title className="user-profile-main-card">{user.name}</Card.Title>
          <Card.Text>{user.priv}</Card.Text>
          <Card.Text>{user.title}</Card.Text>
          <Card.Text>{billsFollowed}</Card.Text>
        </Card.Body>
      </Card>
      <Container className="user-profile-measures-container">
        <MeasuresGrid measures={user.measures} />
      </Container>
    </Container>
  );
};

export default UserProfile;
