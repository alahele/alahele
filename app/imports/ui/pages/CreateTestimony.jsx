import React from 'react';
import '/client/create-testimony.css';
import { Container, Card, Button, Col, Row, CardGroup, ListGroup, Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import ChangeBill from '../components/ChangeBill';

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
        <Card className="mt-1 pt-lg-5 ps-lg-5 border-0 bg-transparent shadow-none">
          <h1>Create Testimony</h1>
        </Card>
        {/* Show date, time, location and committee */}
        <Card className="border-0 bg-transparent shadow-none">
          <Col className="d-md-flex justify-content-md-end">
            <Card className="mt-3 border-0 bg-transparent shadow-none">
              <Card.Text className="col-form-label bold-text"> Date: </Card.Text>
              <Card.Text className="col-form-label bold-text"> Time: </Card.Text>
              <Card.Text className="col-form-label bold-text"> Location: </Card.Text>
              <Card.Text className="col-form-label bold-text"> Committee: </Card.Text>
            </Card>

            <Card className="mt-3 border-0 bg-transparent shadow-none">
              <Card.Text className="col-form-label mx-3"> {`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`} </Card.Text>
              <Card.Text className="col-form-label mx-3"> {`${formatAMPM(time)}`}  </Card.Text>
              <Card.Text className="col-form-label mx-3"> 329 </Card.Text>
              <Card.Text className="col-form-label mx-3"> House Finance </Card.Text>
            </Card>
          </Col>
        </Card>
      </CardGroup>
    </Row>

    <Card className="mt-3 border-0 bg-transparent shadow-none">
      <Row className="mb-3 col-sm-2 col-form-label bold-text"> Testifier: </Row>
      <Row className="mb-3">
        <Col className="col-sm-2 col-form-label mx-4">First name </Col>
        <Col className="col-sm-3">
          <input className="form-control" id={COMPONENT_IDS.CREATE_TESTIMONY_FORM_FIRST_NAME} placeholder="Type first name" />
        </Col>
        <Col className="col-sm-2 col-form-label mx-4">Last name </Col>
        <Col className="col-sm-3">
          <input className="form-control" id={COMPONENT_IDS.CREATE_TESTIMONY_FORM_LAST_NAME} placeholder="Type last name" />
        </Col>
      </Row>

      <Card className="col-sm-3 col-form-label bold-text border-0 bg-transparent shadow-none">Relevant Bill: </Card>
      <CardGroup className="mb-3 ms-4">
        <Card className="mb-3 border-0 bg-transparent shadow-none">
          <Row>
            <Col className="col-form-label bold-text">Bill </Col>
            <Col className="col-form-label bold-text">Committee </Col>
            <Col className="col-form-label bold-text">Room </Col>
            <Col className="col-form-label bold-text">Date/Time </Col>
          </Row>

          <Row>
            <Col className="col-form-label mx-4"> SB 144 Relating to a school supply subsidy pilot program.</Col>
            <Col className="col-form-label mx-4"> EDU </Col>
            <Col className="col-form-label mx-4"> 229 </Col>
            <Col className="col-form-label mx-4"> Feb 1, 2021 / 3:00 PM</Col>
          </Row>

          {/* Add pop up modal so the user has the possibility to change bill */}
          <ChangeBill />

        </Card>
      </CardGroup>

      <Row className="mb-3">
        <Col className="col-sm-2 col-form-label bold-text"> Your position </Col>
        <Col className="col-sm-9 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="position" />
            <div className="form-check-label"> Support </div>
            <input className="form-check-input" type="radio" name="position" />
            <div className="form-check-label"> Oppose </div>
            <input className="form-check-input" type="radio" name="position" />
            <div className="form-check-label"> Comments only </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="col-sm-2 col-form-label bold-text"> Testifying </Col>
        <Col className="col-sm-9 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="testify" />
            <div className="form-check-label"> As an individual citizen </div>
            <input className="form-check-input" type="radio" name="testify" />
            <div className="form-check-label"> On behalf of an organization </div>
          </div>
          <input className="form-control" placeholder=" Name of organization" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col htmlFor="PurposeofBill" className="col-sm-2 col-form-label bold-text"> How will you be testifying? </Col>
        <Col className="col-sm-9 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="howTestify" />
            <div className="form-check-label"> Remotely via Zoom during the hearing & submitting written testimony </div>
            <input className="form-check-input" type="radio" name="howTestify" />
            <div className="form-check-label"> Written testimony only </div>
          </div>
        </Col>
      </Row>

    </Card>

    <p className="mx-4 my-3"> Please submit your written testimony using one of two options below </p>

    <ListGroup className="tabs">
      <ListGroup.Item>
        <Row className="tabs">
          <Col md>
            <Tabs defaultActiveKey="upload" className="mb-3">
              <Tab eventKey="upload" title="Upload testimony">
                <Row className="mb-3">
                  <Col className="col-sm-2 col-form-label bold-text">Upload file: </Col>
                  <Col className="col-sm-9">
                    <input className="form-control" type="file" id="formFile" />
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="write" title="Write testimony">
                <Row className="mb-3">
                  <Col className="col-sm-2 col-form-label bold-text"> Your testimony: </Col>
                  <div className="center-block mx-2">
                    <textarea className="form-control" style={{ width: '1250px', height: '100px' }} />
                  </div>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>

    <div className="d-md-flex justify-content-md-end mt-2">
      <Button className="btn-success me-md-2 btn-lg" type="submit" id={COMPONENT_IDS.CREATE_TESTIMONY_FORM_SUBMIT}> Submit </Button>
    </div>
  </Container>
);

export default CreateTestimony;
