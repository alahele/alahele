import React from 'react';
import '/client/style.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';
import CountDown from './CountDown';

const UpcomingHearings = () => {
  /*
    const { ready, hearings } = useTracker(() => {
        const subscription = Hearings.subscribeHearings();
        const rdy = subscription.ready();
        const hearingItems = Hearings.find({}).fetch();
        return {
            hearings: hearingItems,
            ready: rdy
        };
    }, []);
    const hearing = hearings[0];
    console.log(hearings);
    hearing.dateTime = "Friday, October 27, 2022 2:00 pm";

     */
  const date = 'Friday, October 27, 2022 2:00 pm';
  return (true ? (
    <Container>
      <Card>
        <Card.Header>Upcoming Hearings</Card.Header>
      </Card>
      <Card>
        <Card.Header>
          <Row>
            Hearing Number
          </Row>
          <Row>
            Date
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Description
          </Card.Text>
          <Row>
            <Col>
              <Card.Text>
                <CountDown dateTimeStr={date} />
              </Card.Text>
            </Col>
            <Col>
              <Button>View Hearing</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  ) : <LoadingSpinner message="Loading Hearings" />);
};
/*
{hearings.map((hearing, idx) =>(
    <UpcomingHearing hearing={hearing}/>
))}
 */

export default UpcomingHearings;
