import React from 'react';
import '/client/style.css';
import { Container, Card, Button } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const CreateTestimony = () => (
  <Container id={PAGE_IDS.CREATE_TESTIMONY} className="py-3">
    <div className="row mx-4">
      <div className="col-sm-9 mt-5">
        <h1>Create Testimony</h1>
      </div>

      <div className="col border-white">
        <Card className="card-body border bg-light rounded shadow-sm">
          <Card.Text className="col-form-label mx-3"> <b> Date: </b> &nbsp;06/20/2020 </Card.Text>
          <Card.Text className="col-form-label mx-3"> <b>Time:</b> &nbsp;02:00 PM  </Card.Text>
          <Card.Text className="col-form-label mx-3"> <b> Location: </b> &nbsp;329 </Card.Text>
          <Card.Text className="col-form-label mx-3"> <b> Committee: </b>&nbsp;House Finance </Card.Text>
        </Card>
      </div>
    </div>

    <Card className="card-body border bg-light rounded mt-3 shadow-sm">
      <div className="mb-3 mt-3 row">
        <label className="col-sm-2 col-form-label fw-bold mx-4"> Department: </label>
        <div className="col-sm-9">
          <input type="department" className="form-control" id="departmentInput" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label fw-bold mx-4">Testifier: </label>
        <div className="col-sm-9">
          <input type="testifier" className="form-control" id="floatingInput" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="TitleofBill" className="col-sm-2 col-form-label fw-bold mx-4">Title of Bill: </label>
        <div className="col-sm-9">
          <input type="titleofbill" className="form-control" id="floatingInput" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="PurposeofBill" className="col-sm-2 col-form-label fw-bold mx-4">Purpose of Bill: </label>
        <div className="col-sm-9">
          <input type="purposeofbill" className="form-control" id="floatingInput" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="Upload file" className="col-sm-2 col-form-label fw-bold mx-4">Upload file: </label>
        <div className="col-sm-9">
          <Button className="btn btn-secondary" type="upload"> Upload</Button>
        </div>
      </div>
    </Card>

    <div className="card-body border bg-light rounded mt-3 shadow-sm">
      <div className="mb-3 row">
        <label htmlFor="DepartmentsPosition" className="col-sm-2 col-form-label fw-bold mx-4"> Department&apos;s Position: </label>
        <div className="center-block mx-4">
          <textarea className=" form-control " placeholder="" id="floatingTextarea2" style={{ width: '1250px', height: '100px' }} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="Comments" className="col-sm-4 col-form-label fw-bold mx-4"> Comments (include data and your initials): </label>
        <div className="col-sm-7">
          <textarea type="comments" className="form-control" id="floatingInput" placeholder="" style={{ height: '40px' }} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="Comments" className="col-sm-4 col-form-label fw-bold mx-4"> Route testimony to: </label>
        <div className="col-sm-6">
          <div className="col-sm-4 col-form-label"> Ellen Nishioka/OSIP/HIDOE; </div>
          <Button className="btn btn-secondary" type="addtestimony"> Add testimony </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default CreateTestimony;
