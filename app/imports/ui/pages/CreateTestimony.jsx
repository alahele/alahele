import React from 'react';
import '/client/style.css';
import { Container } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const CreateTestimony = () => (
  <Container id={PAGE_IDS.CREATETESTIMONY} className="py-3">
    <h1>Create Testimony</h1>
    <div className="text-end">
      <label className="col-sm-2 col-form-label mb-0">Date: 06/20/2020 </label>
    </div>
    <div className="text-end">
      <label className="col-sm-2 col-form-label">Time: 02:00 PM </label>
    </div>
    <div className="text-end">
      <label className="col-sm-2 col-form-label">Location: 329 </label>
    </div>
    <div className="text-end">
      <label className="col-sm-2 col-form-label">Committee: House Finance </label>
    </div>
    <div className="mb-3 row">
      <label htmlFor="Department" className="col-sm-2 col-form-label">Department: </label>
      <div className="col-sm-10">
        <input type="department" className="form-control" id="floatingInput" placeholder="" />
      </div>
    </div>
    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Testifier: </label>
      <div className="col-sm-10">
        <input type="testifier" className="form-control" id="floatingInput" placeholder="" />
      </div>
    </div>
    <div className="mb-3 row">
      <label htmlFor="TitleofBill" className="col-sm-2 col-form-label">Title of Bill: </label>
      <div className="col-sm-10">
        <input type="titleofbill" className="form-control" id="floatingInput" placeholder="" />
      </div>
    </div>
    <div className="mb-3 row">
      <label htmlFor="PurposeofBill" className="col-sm-2 col-form-label">Purpose of Bill: </label>
      <div className="col-sm-10">
        <input type="purposeofbill" className="form-control" id="floatingInput" placeholder="" />
      </div>
      <div className="mb-3 row">
        <label htmlFor="DepartmentsPosition" className="col-sm-2 col-form-label">Department&apos;s Position: </label>
        <textarea className="form-control" placeholder="" id="floatingTextarea2" style={{ height: '100px' }} />
      </div>
    </div>
  </Container>
);

export default CreateTestimony;
