import React from 'react';
import '/client/style.css';
import { Card, Col, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const AdminCard = () => (
  <Card>
    <Card.Body>
      <Row>
        <Col md="5" className="align-middle text-center">
          <Card.Img
            src="https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png"
            className="rounded-circle img-fluid img-thumbnail"
            style={{ width: '12rem' }}
          />
        </Col>
        <Col md="7">
          <Card.Text className="user-profile-main-card">
            <dl className="row">
              <dt className="col-sm-auto">First Name:</dt>
              <dd className="col-sm-7">ADMIN</dd>

              <dt className="col-sm-auto">last Name:</dt>
              <dd className="col-sm-7">MATRP</dd>

              <dt className="col-sm-auto">Email:</dt>
              <dd className="col-sm-7">admin@foo.com</dd>

              <dt className="col-sm-auto">Phone:</dt>
              <dd className="col-sm-7">N/A</dd>

              <dt className="col-sm-auto">Office:</dt>
              <dd className="col-sm-8">N/A</dd>

              <dt className="col-sm-auto">Role:</dt>
              <dd className="col-sm-7">ADMIN</dd>
            </dl>
          </Card.Text>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default AdminCard;
