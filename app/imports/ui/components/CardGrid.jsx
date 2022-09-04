import React, { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BillModal from './BillModal';

/** Render a list cards containing bills data */
const CardGrid = props => {
  const { bills } = props;
  const cardInfo = Object.keys(bills).map(key => bills[key]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="overflow-scroll">
      <Row>
        {/* eslint-disable-next-line no-shadow */}
        {cardInfo.map((cardInfo, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card>
              <Card.Header> {cardInfo.code} </Card.Header>
              <Card.Body>
                <Card.Text>{cardInfo.title}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="text-center">
                  <Button
                    onClick={handleShow}
                    as="input"
                    type="link"
                    value="View"
                    style={{ width: '4rem', height: '1.5rem' }}
                  />
                  <BillModal bill={cardInfo} show={show} onClose={handleClose} />
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
CardGrid.propTypes = {
  bills: PropTypes.shape({
    code: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
export default CardGrid;
