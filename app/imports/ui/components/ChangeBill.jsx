import React from 'react';
import { Button, Col, Row, Card, Modal, ModalBody, ModalTitle, ModalHeader } from 'react-bootstrap';

const ChangeBill = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShow = () => setShowModal(!showModal);

  return (
    <Col>
      <Button className="btn btn-secondary mx-4" onClick={toggleShow}> Change </Button>
      <Modal className="modal fade" show={showModal} data-bs-target="#staticBackdrop">
        <ModalHeader>
          <ModalTitle> List of bills </ModalTitle>
          <Button className="btn-close" onClick={toggleShow}> </Button>
        </ModalHeader>
        <ModalBody>
          <Card>
            <Row className="my-2">
              <Col className="my-2 text-end"> HB433 </Col>
              <Col> <Button className="btn-secondary"> Select </Button> </Col>
            </Row>
            <Row className="my-2">
              <Col className="my-2 text-end"> HB433 </Col>
              <Col> <Button className="btn-secondary"> Select </Button> </Col>
            </Row>
            <Row className="my-2">
              <Col className="my-2 text-end"> HB433 </Col>
              <Col> <Button className="btn-secondary"> Select </Button> </Col>
            </Row>
          </Card>
        </ModalBody>
      </Modal>
    </Col>
  );
};

export default ChangeBill;
