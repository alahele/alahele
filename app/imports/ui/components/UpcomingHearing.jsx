import React from 'react';
import '/client/style.css';
import PropTypes from 'prop-types';
import CountDown from '../components/CountDown';
import DateTime from '../utilities/DateTimeUtil';
import { Card , Row, Col, Button} from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const UpcomingHearing = props => {
  const { hearing } = props;
  const hearingDateHasPassed = DateTime.dateHasPassed(hearing.datetime);

  return (!hearingDateHasPassed ? (
      <Card>
          <Card.Header>
              <Row>
                  {`${hearing.measureType.toUpperCase()} ${hearing.measureNumber}`}
              </Row>
              <Row>
              </Row>
          </Card.Header>
          <Card.Body>
              <Card.Text>
                  <Card.Text>{hearing.description}</Card.Text>
              </Card.Text>
              <Row>
                  <Col>
                      <Card.Text>
                          <CountDown dateTimeStr={hearing.datetime} />
                      </Card.Text>
                  </Col>
                  <Col>
                      <Button>View Hearing</Button>
                  </Col>
              </Row>
          </Card.Body>
      </Card>
  ):<></> );
};

UpcomingHearing.propTypes = {
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

export default UpcomingHearing;


