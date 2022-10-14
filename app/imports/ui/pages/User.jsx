import React from "react";
import "/client/style.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useTracker } from "meteor/react-meteor-data";
import { PAGE_IDS } from "../utilities/PageIDs";
import MeasuresGrid from "../components/MeasuresGrid";
import UserPersonalInformation from "../components/UserPersonalInformationCard";
import UserNotifications from "../components/UserNotfications";
import UpcomingHearings from "../components/UpcomingHearings";
import { Measures } from "../../api/measure/MeasureCollection";
import LoadingSpinner from '../components/LoadingSpinner';
import { UserProfile } from "../../api/user/UserProfileCollection";

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
                <UserNotifications/>
            </Container>
            <Container>
                <Row>
                    <Col> <UserPersonalInformation/> </Col>
                    <Col> <UpcomingHearings/> </Col>
                </Row>
                <Row> <MeasuresGrid measures={measures}/> </Row>
            </Container>
        </Container>
    ): <LoadingSpinner message="Loading Measures"/>);
};

export default User;
