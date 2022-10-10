import React from 'react';
import { Button, Col, Row, Card, Modal, ModalBody, ModalTitle, ModalHeader } from 'react-bootstrap';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { useTracker } from 'meteor/react-meteor-data';
import { Measures } from '../../api/measure/MeasureCollection';
import LoadingSpinner from './LoadingSpinner';

const ChangeBill = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShow = () => setShowModal(!showModal);

  const { ready, measures } = useTracker(() => {
    const subscription = Measures.subscribeMeasures();
    const rdy = subscription.ready();
    const measureItems = Measures.find({ }).fetch();

    return {
      measures: measureItems,
      ready: rdy,
      code: measureItems.code,
    };
  }, []);

  return (ready ? (
    <Col className="mt-4">
      <Button className="btn btn-secondary mx-4" onClick={toggleShow}> Change </Button>
      <Modal className="fade modal-dialog-centered" show={showModal} data-bs-target="#staticBackdrop">
        <ModalHeader>
          <ModalTitle> List of bills </ModalTitle>
          <Button className="btn-close" onClick={toggleShow}> </Button>
        </ModalHeader>
        <ModalBody>
          <Card>
            <MDBTable align="middle">
              <MDBTableHead>
                <tr>
                  <th scope="col">Code</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {measures.map((measure) => (
                  <Card key={measure._id}>
                    <Row>
                      <Col>
                        <td>{measure.code}</td>
                      </Col>
                      <Col>
                        <td><Button href="/individualbill" className="btn-secondary btn-sm">View bill</Button></td>
                      </Col>
                      <Col>
                        <td>
                          <Button className="btn-secondary btn-sm" onClick={toggleShow}>
                            Select
                          </Button>
                        </td>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </MDBTableBody>
            </MDBTable>
            <MDBPagination className="mb-0 justify-content-center">
              <MDBPaginationItem>
                <MDBPaginationLink href="#">Previous</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">1</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">2</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">3</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">Next</MDBPaginationLink>
              </MDBPaginationItem>
            </MDBPagination>
          </Card>
        </ModalBody>
      </Modal>
    </Col>
  ) : <LoadingSpinner meassure="Loading Measures" />);
};

export default ChangeBill;
