import React from 'react';
import '/client/style.css';
import { Container, Card } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const CreateTestimony = () => (
  <Container id={PAGE_IDS.CREATE_TESTIMONY} className="py-3">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <div className="row mx-4">
      <div className="col-sm-9 mt-5">
        <h1>Create Testimony</h1> 
      </div>

      <div className="col border-white">
        <Card className="card-body border bg-light rounded shadow-sm">
          <div className="mx-3">
            <label className="col-form-label fw-bold"> Date: </label>
            <label className="col-form-label"> &nbsp;06/20/2020 </label>
          </div>
          <div className="mx-3">
            <label className="col-form-label fw-bold"> Time: </label>
            <label className="col-form-label"> &nbsp;02:00 PM </label>
          </div>
          <div className="mx-3">
            <label className="col-form-label fw-bold"> Location: </label>
            <label className="col-form-label"> &nbsp;329 </label>
          </div>
          <div className="mx-3">
            <label className="col-form-label fw-bold"> Committee: </label>
            <label className="col-form-label"> &nbsp;House Finance </label>
          </div>
        </Card>
          
      </div>
    </div>

    <Card className="card-body border bg-light rounded mt-3 shadow-sm">
      <div className="mb-3 mt-3 row">
        <label htmlFor="Department" className="col-sm-2 col-form-label fw-bold mx-4">Department: </label>
        <div className="col-sm-9">
          <input type="department" className="form-control" id="floatingInput" placeholder="" />
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
          <button className="btn btn-secondary" type="upload"> Upload</button>
        </div>
      </div>
    </Card>

    <div className="card-body border bg-light rounded mt-3 shadow-sm">
      <div className="mb-3 row">
        <label htmlFor="DepartmentsPosition" className="col-sm-2 col-form-label fw-bold mx-4"> Department&apos;s Position: </label>
        <textarea className="form-control" placeholder="" id="floatingTextarea2" style={{ height: '100px' }} />
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
          <button className="btn btn-secondary" type="addtestimony"> Add testimony </button>
        </div>
      </div>
    </div>
  </Container>
);

export default CreateTestimony;
