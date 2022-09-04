import React from 'react';
import '/client/style.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import CardGrid from '../components/CardGrid';

/** Render the current users personal information. */
const UserProfile = () => {
  const user = {
    name: 'sharky mc sharkertons',
    title: 'DOE Human Resources',
    img: '/images/sharky.png',
    priv: 'Admin',
    followed: 23,
    bills: [
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
      { code: '29-25(d), HRS', title: 'Department of education; federal funds; general fund offset', body: 'body text is here' },
    ],
  };

  const billsFollowed = `Bills Followed: ${user.followed}`;
  return (
    <Container id={PAGE_IDS.USER_PROFILE} className="py-3">
      <Row>
        <Col xs={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Img
                src={user.img}
                className="rounded-circle img-fluid img-thumbnail"
                style={{ width: '9rem' }}
              />
              <h5 className="my-3">{user.name}</h5>
              <p className="text-muted mb-1">{user.title}</p>
            </Card.Body>
          </Card>
          <Row>
            <Card lg={5}>
              <Card.Body>
                <Card.Text>
                  {user.priv}
                </Card.Text>
                <Card.Text>
                  {billsFollowed}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col xs={7}>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>Bills Followed</Card.Title>
              </Card.Body>
            </Card>
          </Container>
          <Container>
            <CardGrid bills={user.bills} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfile;
