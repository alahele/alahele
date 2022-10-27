import React from 'react';
import '/client/style.css';
import { Card } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const AdminCard = () => (
  <Card>
    <Card.Body>
      <Card.Img
        src="/images/sharky.png"
        className="rounded-circle img-fluid img-thumbnail"
        style={{ width: '12rem' }}
      />
      <Card.Text className="user-profile-main-card">ADMIN</Card.Text>
    </Card.Body>
  </Card>
);

export default AdminCard;
