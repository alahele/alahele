import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BillModal = props => {
  const { bill, show, onClose } = props;
  return (
    <Modal show={show} onHide={onClose} fullscreen="true">
      <Modal.Header> {bill.title} </Modal.Header>
      <Modal.Body> {bill.body} </Modal.Body>
      <Modal.Footer> {bill.code} </Modal.Footer>
    </Modal>
  );
};
BillModal.propTypes = {
  bill: {
    code: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default BillModal;
