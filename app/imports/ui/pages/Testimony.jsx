import React from 'react';
import '/client/style.css';
import { Container } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const Testimony = () => (
  <Container id={PAGE_IDS.TESTIMONY} className="py-3">
    <div className="text-center">
      <img src="../images/emblum-hidoe.png" className="h-20 p-3" style={{ 'max-width': '10%' }} alt="logo"/>
    </div>
    <div id="infounderlogo" className="text-center">
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
        <input type="text" readOnly className="form-control-plaintext" id="Department" value="Education"/>
      </div>
    </div>
    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Testifier: </label>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control-plaintext" id="Testifier" value="Dr. Christina M. Kishimoto, Superintendent of Education"/>
      </div>
    </div>
    <div className="mb-3 row">
      <label htmlFor="TitleofBill" className="col-sm-2 col-form-label">Title of Bill: </label>
      <div className="col-sm-10">
        <input type="text" readOnly className="form-control-plaintext" id="TitleofBill" value="SB 2486, SD1 RELATING TO EDUCATION DATA."/>
      </div>
    </div>
    <div className="mb-3 row">
      <label htmlFor="PurposeofBill" className="col-sm-2 col-form-label">Purpose of Bill: </label>
      <div className="col-sm-10">
        {/* eslint-disable-next-line max-len */}
        <p className="text-wrap" id="PurposeofBill"> Requires the Department of Education to establish a standardized data collection process; collect and anayze data relating to, among other things, student discipline, seclusion, and
          restraint, school climate, and student achievement; and annually report certain information to the Board of Education, Legislature, and the public. (SD1)
        </p>
      </div>
      <div className="mb-3 row">
        <label htmlFor="DepartmentsPosition" className="col-sm-2 col-form-label">Department&apos;s Position: </label>
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

export default Testimony;
