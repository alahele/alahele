import React from 'react';
import { Button, Col, Row, Modal, ModalDialog, ModalBody, ModalTitle, ModalHeader } from 'react-bootstrap';

const ChangeBill = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShow = () => setShowModal(!showModal);

  return (
    <Col>
      <Button className="btn btn-secondary mx-4" onClick={toggleShow}> Change </Button>
      <Modal className="modal fade" show={showModal}>
        <ModalDialog>
          <ModalHeader>
            <ModalTitle> List of bills </ModalTitle>
            <Button className="btn-close" onClick={toggleShow}> </Button>
          </ModalHeader>
          <ModalBody>
            <Row className="my-2">
              <Col> Bill 1 </Col>
              <Col> <Button className="btn-secondary"> Select </Button> </Col>
            </Row>
            <Row>
              <Col> Bill 2 </Col>
              <Col> <Button className="btn-secondary"> Select </Button> </Col>
            </Row>
          </ModalBody>
        </ModalDialog>
      </Modal>
    </Col>
  );
};

export default ChangeBill;
