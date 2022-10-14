import React from "react";
import "/client/style.css";
import PropTypes from "prop-types";
import Notification from "../components/Notfication";
import { Card, Container, Row, Col, ToastContainer } from "react-bootstrap";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const UserNotifications = () => {
    return (
        <Container>
            <ToastContainer position="top-front">
                <Notification/>
            </ToastContainer>
        </Container>
);
};


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

export default UserNotifications;
