import React from 'react';
import '/client/style.css';
import { Container, Card, Button, Col, Row, CardGroup } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const time = new Date();

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

const CreateTestimony = () => (
  <Container id={PAGE_IDS.CREATE_TESTIMONY} className="py-3">
    <Row>
      <CardGroup>
        <Card className="mt-5 ms-5 border-white shadow-none">
          <h1>Create Testimony</h1>
        </Card>

        <Card className="border-white shadow-none">
          <Col className="d-md-flex justify-content-md-end">
            <Card className="mt-3 border-white shadow-none">
              <Card.Text className="col-form-label mx-3 fw-bold"> Date: </Card.Text>
              <Card.Text className="col-form-label mx-3 fw-bold"> Time: </Card.Text>
              <Card.Text className="col-form-label mx-3 fw-bold"> Location: </Card.Text>
              <Card.Text className="col-form-label mx-3 fw-bold"> Committee: </Card.Text>
            </Card>

            <Card className="mt-3 border-white shadow-none">
              <Card.Text className="col-form-label mx-3"> {`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`} </Card.Text>
              <Card.Text className="col-form-label mx-3"> {`${formatAMPM(time)}`}  </Card.Text>
              <Card.Text className="col-form-label mx-3"> 329 </Card.Text>
              <Card.Text className="col-form-label mx-3"> House Finance </Card.Text>
            </Card>
          </Col>
        </Card>
      </CardGroup>
    </Row>

    <Card className="mt-3 border-white shadow-none">
      {/* card-body border bg-light rounded mt-3 shadow-sm  */}
      <Row className="mb-3 col-sm-2 col-form-label fw-bold mx-4"> Testifier: </Row>
      <Row className="mb-3">
        <Col className="col-sm-2 col-form-label mx-4">First name </Col>
        <Col className="col-sm-3">
          <input type="testifier" className="form-control" id="floatingInput" placeholder="Type first name" />
        </Col>
        <Col className="col-sm-2 col-form-label mx-4">Last name </Col>
        <Col className="col-sm-3">
          <input type="testifier" className="form-control" id="floatingInput" placeholder="Type last name" />
        </Col>
        <Col className="col-sm-2 col-form-label mx-4 mt-3"> Department </Col>
        <Col className="col-sm-9 mt-3">
          <input type="department" className="form-control" id="departmentInput" placeholder="" />
        </Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col htmlFor="TitleofBill" className="col-sm-2 col-form-label fw-bold mx-4">Relevant Bill: </Col>
        <Col className="col-sm-9">
          <Button className="btn btn-secondary"> Select </Button>
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

    <Card className="mt-3 border-white shadow-none">
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
    <div className="d-md-flex justify-content-md-end">
      <Button className="btn-success me-md-2 btn-lg" type="submit"> Submit </Button>
    </div>
  </Container>
);

export default CreateTestimony;
