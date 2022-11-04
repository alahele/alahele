import React from 'react';
import { Button, Card, CardGroup, Container, Col, Row, Modal, ModalBody, ModalTitle, ModalHeader } from 'react-bootstrap';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { useTracker } from 'meteor/react-meteor-data';
import { Measures } from '../../api/measure/MeasureCollection';
import LoadingSpinner from './LoadingSpinner';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const ChangeBill = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShow = () => setShowModal(!showModal);
  const [selectBill, setSelectBill] = React.useState([]);
  const [haveSelectedBill, setHaveSelectedBill] = React.useState(false);
  const toggleShowBill = () => setHaveSelectedBill(!haveSelectedBill);

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

  function changeSelectedBill(measure) {
    setSelectBill(measure);
  }

  return (ready ? (
    <div>
      <Card className="col-sm-3 col-form-label bold-text border-0 bg-transparent shadow-none">Relevant Bill </Card>
      <CardGroup className="mb-3 ms-4">
        <Card className="mb-3 border-0 bg-transparent shadow-none">
          {haveSelectedBill ? (
            <Container show={haveSelectedBill}>
              <Row>
                <Col className="col-form-label bold-text">Bill </Col>
                <Col className="col-form-label bold-text">Number </Col>
                <Col className="col-form-label bold-text">Committee </Col>
                <Col className="col-form-label bold-text">Status </Col>
                <Col className="col-form-label bold-text">Year </Col>
              </Row>

              <Row>
                <Col className="col-form-label mx-4" id={COMPONENT_IDS.CREATE_TESTIMONY_BILL}> {selectBill.code} {selectBill.measureTitle}</Col>
                <Col className="col-form-label mx-4"> {selectBill.measureNumber} </Col>
                <Col className="col-form-label mx-4"> {selectBill.currentReferral} </Col>
                <Col className="col-form-label mx-4"> {selectBill.status} </Col>
                <Col className="col-form-label mx-4"> {selectBill.year} </Col>
              </Row>
            </Container>
          ) : (
            null
          )}

          <Col className="mt-4">
            <Button className="btn btn-secondary mx-4" id={COMPONENT_IDS.CREATE_TESTIMONY_CHOOSE_FROM_BILLS_BUTTON} onClick={toggleShow}> {haveSelectedBill ? ('Change') : ('Select') } </Button>

            <Modal className="fade modal-centered" show={showModal} data-bs-target="#staticBackdrop" centered>
              <ModalHeader>
                <ModalTitle> List of bills </ModalTitle>
                <Button className="btn-close" onClick={toggleShow}> </Button>
              </ModalHeader>
              <ModalBody>
                <MDBTable align="middle">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Code</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {measures.map((measure) => (
                      <Container key={measure._id}>
                        <Row>
                          <Col>
                            <p>{measure.code}</p>
                          </Col>
                          <Col>
                            <p><Button href="/individualbill" className="btn-secondary btn-sm">View bill</Button></p>
                          </Col>
                          <Col>
                            <p>
                              <Button
                                className="btn-secondary btn-sm"
                                id={COMPONENT_IDS.CREATE_TESTIMONY_SELECT_BILL_BUTTON}
                                onClick={() => { toggleShow(); changeSelectedBill(measure); toggleShowBill(); }}
                              >
                                Select {selectBill === measure}
                              </Button>
                            </p>
                          </Col>
                        </Row>
                      </Container>
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
              </ModalBody>
            </Modal>
          </Col>
        </Card>
      </CardGroup>
    </div>
  ) : <LoadingSpinner meassure="Loading Measures" />);
};

export default ChangeBill;
