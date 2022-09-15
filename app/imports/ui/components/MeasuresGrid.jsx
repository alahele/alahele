import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

/** Render a list cards containing measures data */
const MeasuresGrid = props => {
  const { measures } = props;
  return (
    <Container className="overflow-scroll">
      <Row>
        {measures.map((measure, idx) => (
          <Col key={idx} xs={12} md={4} lg={3} style={{ padding: '0.25rem' }}>
            <Card>
              <Card.Header> {measure.code} </Card.Header>
              <Card.Body>
                <Card.Text>{measure.title}</Card.Text>
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
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default MeasuresGrid;
