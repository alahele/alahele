import React from 'react';
import '/client/style.css';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const CreateTestimony = () => (
  <Container id={PAGE_IDS.CREATE_TESTIMONY} className="py-3">
    <Row>
      <Col className="mt-5 ms-5 col-sm-8">
        <h1>Create Testimony</h1>
      </Col>

      <Col>
        <Card className="card-body border bg-light rounded shadow-sm">
          <Card.Text className="col-form-label mx-3"> <b> Date: </b> &nbsp;06/20/2020 </Card.Text>
          <Card.Text className="col-form-label mx-3"> <b>Time:</b> &nbsp;02:00 PM  </Card.Text>
          <Card.Text className="col-form-label mx-3"> <b> Location: </b> &nbsp;329 </Card.Text>
          <Card.Text className="col-form-label mx-3"> <b> Committee: </b>&nbsp;House Finance </Card.Text>
        </Card>
      </Col>
    </Row>

    <Card className="card-body border bg-light rounded mt-3 shadow-sm">
      <Row className="mb-3 mt-3">
        <Col className="col-sm-2 col-form-label fw-bold mx-4"> Department: </Col>
        <Col className="col-sm-9">
          <input type="department" className="form-control" id="departmentInput" placeholder="" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-sm-2 col-form-label fw-bold mx-4">Testifier: </Col>
        <Col className="col-sm-9">
          <input type="testifier" className="form-control" id="floatingInput" placeholder="" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col htmlFor="TitleofBill" className="col-sm-2 col-form-label fw-bold mx-4">Title of Bill: </Col>
        <Col className="col-sm-9">
          <input type="titleofbill" className="form-control" id="floatingInput" placeholder="" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col htmlFor="PurposeofBill" className="col-sm-2 col-form-label fw-bold mx-4">Purpose of Bill: </Col>
        <Col className="col-sm-9">
          <input type="purposeofbill" className="form-control" id="floatingInput" placeholder="" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col htmlFor="Upload file" className="col-sm-2 col-form-label fw-bold mx-4">Upload file: </Col>
        <Col className="col-sm-9">
          {/* <Button className="btn btn-secondary" type="file"> Upload</Button> */}
          <input className="form-control" type="file" id="formFile" />
        </Col>
      </Row>
    </Card>

    <Card className="card-body border bg-light rounded mt-3 shadow-sm">
      <Row className="mb-3">
        <Col className="col-sm-2 col-form-label fw-bold mx-4"> Department&apos;s Position: </Col>
        <div className="center-block mx-2">
          <textarea className="form-control" style={{ width: '1250px', height: '100px' }} />
        </div>
      </Row>
      <Row className="mb-3">
        <Col className="col-sm-4 col-form-label fw-bold mx-4"> Comments (include data and your initials): </Col>
        <Col className="col-sm-7">
          <textarea className="form-control" id="floatingInput" style={{ height: '40px' }} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-sm-4 col-form-label fw-bold mx-4"> Route testimony to: </Col>
        <Col className="col-sm-6">
          <Card.Text className="col-sm-4 col-form-label"> Ellen Nishioka/OSIP/HIDOE; </Card.Text>
          <Button className="btn btn-secondary"> Add testimony </Button>
        </Col>
      </Row>
    </Card>
  </Container>
);

export default CreateTestimony;
