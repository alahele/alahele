import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Button, Modal, Form, Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import { PersonPlus } from 'react-bootstrap-icons';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { ROLE } from '../../api/role/Role';
import swal from 'sweetalert';
import {Offices} from "../../api/office/OfficeCollection";
import {MeasureOffices} from "../../api/office/MeasureOfficeCollection";
import {defineMethod} from "../../api/base/BaseCollection.methods";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

const MeasureItem = ({ measure }) => {
    const [office, setOffice] = useState(1);
    let primary;
    const collectionName = MeasureOffices.getCollectionName();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(office);
    switch (office) {
        case "1":
            primary = 'mzdLt2fkQ3YSE2SD5';
            break;
        case "2":
            primary = 'EWb7Qt3JNhoXyZFmv';
            break;
        case "3":
            primary = '5vq4tdiuiNfEsGgh5';
            break;
        case "4":
            primary = 'QcFrETxAb43KJY4Sg';
            break;
        case "5":
            primary = 'BsfxHqp8gSJbjHCuC';
            break;
        case "6":
            primary = 'KmWeeFZEhurcvtX3z';
            break;
        default:
            break;
    }
  const handleAssign = function() {
      console.log("hi");
      console.log(primary);
      let definitionData = { measureID: measure._id, officeID: primary };
      defineMethod.callPromise({ collectionName, definitionData });
      swal("Office successfully assigned.");
      setShow(false);
  }
  return (
    <tr>
      <td scope="col">{measure.bitAppropriation}</td>
      <td scope="col">{measure.year}</td>
      <td scope="col" align="middle">{measure.measureType}</td>
      <td scope="col">{measure.measureNumber}</td>
      <td scope="col">{measure.measureTitle}</td>
      <td className="measure-item-align" scope="col">{measure.description}</td>

      <td className="measure-item-align" scope="col">{measure.status}</td>

      <td className="measure-item-align" scope="col">
        <Link id={COMPONENT_IDS.INDIVIDUAL_BILL_BUTTON} to={`/individualbill/${measure._id}`}>View</Link>
      </td>

      <td scope="col">
        {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? ([
          <>
            <Button variant="secondary" onClick={handleShow}>
              <PersonPlus className="fs-8 mb-1" />
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Assign Bill to Office</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Row>
                        <Col>
                            <h5>Primary Office</h5>
                            <Form.Select aria-label="Primary Office" onChange={(event) => setOffice(event.target.value)}>
                                <option>Select Office..</option>
                                <option value="1">OSIP</option>
                                <option value="2">OFS</option>
                                <option value="3">OCID</option>
                                <option value="4">OSSS</option>
                                <option value="5">OTM</option>
                                <option value="6">DEPUTY</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <h5>Secondary Office(s)</h5>
                            <Form.Check type="checkbox" label="OSIP" />
                            <Form.Check type="checkbox" label="OFS" />
                            <Form.Check type="checkbox" label="OCID" />
                            <Form.Check type="checkbox" label="OSSS" />
                            <Form.Check type="checkbox" label="OTM" />
                            <Form.Check type="checkbox" label="DEPUTY" />
                        </Col>
                    </Row>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAssign}>
                  Assign
                </Button>
              </Modal.Footer>
            </Modal>
          </>,
        ]) : ''}
      </td>
    </tr>
  );
};

// Require a document to be passed to this component.
MeasureItem.propTypes = {
  measure: PropTypes.shape({
    bitAppropriation: PropTypes.number,
    year: PropTypes.number,
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    code: PropTypes.string,
    measureTitle: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default MeasureItem;
