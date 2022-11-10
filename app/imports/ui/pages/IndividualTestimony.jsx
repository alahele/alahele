import React from 'react';
import '/client/style.css';
import { Container } from 'react-bootstrap';

const IndividualTestimony = () => (
  <Container className="py-3">
    <a className="btn btn-primary btn-sm my-4 position-absolute" href="/testimony-list">back</a>
    <div className="text-center">
      <img src="../images/emblum-hidoe.png" className="h-20 p-3" style={{ 'max-width': '10%' }} alt="logo" />
    </div>
    <div className="text-center">
      <p className="mb-0">
        STATE OF HAWAI&apos;I
      </p>
      <p className="mb-0">
        DEPARTMENT OF EDUCATION
      </p>
      <p className="mb-0">
        P.O. BOX 2360
      </p>
      <p className="mb-0">
        HONOLULU, HAWAI&apos;I 96804
      </p>
    </div>
    <div className="text-end">
      <span className="col-sm-2 col-form-label mb-0">Date: 06/20/2020 </span>
    </div>
    <div className="text-end">
      <span className="col-sm-2 col-form-label">Time: 02:00 PM </span>
    </div>
    <div className="text-end">
      <span className="col-sm-2 col-form-label">Location: 329 </span>
    </div>
    <div className="text-end">
      <span className="col-sm-2 col-form-label">Committee: House Finance </span>
    </div>
    <div className="mb-3 row">
      <span htmlFor="Department" className="col-sm-2 col-form-label">Department: </span>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control-plaintext" id="Department" value="Education" />
      </div>
    </div>
    <div className="mb-3 row">
      <span className="col-sm-2 col-form-label">Testifier: </span>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control-plaintext" id="Testifier" value="Dr. Christina M. Kishimoto, Superintendent of Education" />
      </div>
    </div>
    <div className="mb-3 row">
      <span htmlFor="TitleofBill" className="col-sm-2 col-form-label">Title of Bill: </span>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control-plaintext" id="TitleofBill" value="SB 2486, SD1 RELATING TO EDUCATION DATA." />
      </div>
    </div>
    <div className="mb-3 row">
      <span htmlFor="PurposeofBill" className="col-sm-2 col-form-label">Purpose of Bill: </span>
      <div className="col-sm-10">
        {/* eslint-disable-next-line max-len */}
        <p className="text-wrap" id="PurposeofBill"> Requires the Department of Education to establish a standardized data collection process; collect and anayze data relating to, among other things, student discipline, seclusion, and
          restraint, school climate, and student achievement; and annually report certain information to the Board of Education, Legislature, and the public. (SD1)
        </p>
      </div>
      <div className="mb-3 row">
        <span htmlFor="DepartmentsPosition" className="col-sm-2 col-form-label">Department&apos;s Position: </span>
        <p className="1h-1 text-wrap">
          The Department collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA)The Department collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA)The Department
          collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA)The Department collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA).
        </p>
        <p className="1h-1 text-wrap">
          The Department collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA)The Department collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA)The
          Department collects and reports accountability data for StriveHI, the Every Student Succeeds ACT (ESSA)
        </p>
      </div>
    </div>
  </Container>
);

export default IndividualTestimony;
