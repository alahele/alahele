import React from "react";
import "/client/style.css";
import PropTypes from "prop-types";
import { useTracker } from "meteor/react-meteor-data";
import { Hearings } from "../../api/hearing/HearingCollection";
import UpcomingHearing from "../components/UpcomingHearing";
import LoadingSpinner from "../components/LoadingSpinner";
import CountDown from '../components/CountDown';
import DateTime from '../utilities/DateTimeUtil';
import { Card, Container, Row, Col, ToastContainer, ListGroup, Badge, Button } from "react-bootstrap";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const UpcomingHearings = () => {
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
    hearing.dateTime = "Tuesday, October 25, 2022 2:00 pm";
    return (ready ? (
        <Container>
            <Card>
                <Card.Header>Upcoming Hearings</Card.Header>
            </Card>
            <Card>
                <Card.Header>
                    <Row>
                        {`${hearing.measureType.toUpperCase()} ${hearing.measureNumber}`}
                    </Row>
                    <Row>
                        {hearing.dateTime}
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{hearing.description}</Card.Text>
                    <Row>
                        <Col>
                            <Card.Text>
                                <CountDown dateTimeStr={hearing.dateTime} />
                            </Card.Text>
                        </Col>
                        <Col>
                            <Button>View Hearing</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    ) : <LoadingSpinner message="Loading Hearings"/>);
};
/*
{hearings.map((hearing, idx) =>(
    <UpcomingHearing hearing={hearing}/>
))}
 */

export default UpcomingHearings;
