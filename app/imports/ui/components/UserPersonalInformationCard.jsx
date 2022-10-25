import React from "react";
import "/client/style.css";
import PropTypes from "prop-types";
import { Card, Container, Row, Col } from "react-bootstrap";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const UserPersonalInformationCard = ({ user }) => {
    console.log("UserPersonalInformationCard");

    return (
            <Card>
                <Card.Body >
                    <Card.Img
                        src={'/images/sharky.png'}
                        className="rounded-circle img-fluid img-thumbnail"
                        style={{ width: '12rem' }}
                    />
                    <Card.Text className="user-profile-main-card">{"Fate Yanagi"}</Card.Text>
                    <Card.Text className="user-profile-main-card">{"OSSS"}</Card.Text>
                    <Card.Text className="user-profile-main-card">{"Writer"}</Card.Text>
                </Card.Body>
            </Card>
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

export default UserPersonalInformationCard;
