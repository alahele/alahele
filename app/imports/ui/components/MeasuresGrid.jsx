import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

/** Render a list cards containing measures data */
const MeasuresGrid = props => {
    const { measures } = props;
    return (
        <Container className="overflow-scroll">
            <Row>
                {measures.map((measure, idx) => (
                    <Col key={idx} xs={12} md={4} lg={6} style={{ padding: "0.25rem" }}>
                        <Card>
                            <Card.Header> <Row>
                                {measure.code}
                            </Row>
                                <Row>{measure.lastUpdated.toLocaleDateString()}</Row>
                            </Card.Header>
                            <Card.Title>{measure.measureTitle}</Card.Title>
                            <Card.Body>
                                <Row>
                                    <Card.Text>{measure.description}</Card.Text>
                                    <Card.Text>{measure.status}</Card.Text>
                                </Row>

                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <a href type="button" className="btn btn-primary btn-sm">View</a>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

MeasuresGrid.propTypes = {
    measures: PropTypes.arrayOf(PropTypes.shape({
        year: PropTypes.string.isRequired,
        measureType: PropTypes.string.isRequired,
        measureNumber: PropTypes.number.isRequired,
        lastUpdated: PropTypes.instanceOf(Date),
        code: PropTypes.string,
        measurePdfUrl: PropTypes.string,
        measureTitle: PropTypes.string,
        reportTitle: PropTypes.string,
        bitAppropriation: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string,
        introducer: PropTypes.string,
        currentReferral: PropTypes.string,
        companion: PropTypes.string
    })).isRequired
};

export default MeasuresGrid;
