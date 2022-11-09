import React, { useState } from 'react';
import '/client/create-testimony.css';
import { Container, Card, Col, Row, CardGroup, Alert } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import {
  AutoForm,
  DateField,
  ErrorsField,
  LongTextField,
  NumField,
  SelectField,
  SubmitField,
  TextField,
} from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Navigate } from 'react-router';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import ChangeBill from '../components/ChangeBill';
import { Testimony } from '../../api/testimony/TestimonyCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';

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

const CreateTestimony = () => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    year: Number,
    measureType: { type: String, allowedValues: ['hb', 'sb', 'hr', 'sr', 'hcr', 'scr', 'gm'] },
    measureNumber: Number,
    // Use Date().toString() to convert to String
    date: String,
    chair: { type: String, required: false },
    viceChair: { type: String, required: false },
    type: { type: String, allowedValues: ['Individual', 'Organization'] },
    name: String,
    position: { type: String, required: false, allowedValues: ['Support', 'Oppose', 'Comments Only'] },
    method: { type: String, required: false },
    body: { type: String, required: false },
    'body.$': { type: String },
    comment: { type: Array, required: false },
    'comment.$': { type: String },
    status: { type: String, allowedValues: ['Processor', 'Writer', 'Office Approver', 'PIPE Approver', 'Final Approver', 'Complete'] },
    docName: String,
  });

  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const collectionName = Testimony.getCollectionName();
    const definitionData = doc;
    // create the new Testimony
    defineMethod.callPromise({ collectionName, definitionData })
      .then(() => {
        swal('Testimony has been created.');
        setRedirectToRef(true);
      })
      .catch((err) => setError(err.reason));
  };

  if (redirectToReferer) {
    return <Navigate to="/testimony-list" />;
  }
  return (
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
              </Card>

              <Card className="mt-3 border-0 bg-transparent shadow-none">
                <Card.Text className="col-form-label mx-3"> {`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`} </Card.Text>
                <Card.Text className="col-form-label mx-3"> {`${formatAMPM(time)}`}  </Card.Text>
              </Card>
            </Col>
          </Card>
        </CardGroup>
      </Row>

      <AutoForm schema={bridge} onSubmit={data => submit(data)}>
        <Card className="mt-3 border-0 bg-transparent shadow-none">
          <Row className="mb-3">
            <Col className="col-sm-9">
              <DateField label="Date*" name="date" placeholder={`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`} />
              <TextField label="Document Name*" name="docName" placeholder="Save as..." />
            </Col>
          </Row>

          <Row className="mb-3 col-sm-2 col-form-label bold-text"> Testifier </Row>
          <Row className="mb-3">
            <Col className="col-sm-9">
              <SelectField label="Type*" name="type" placeholder="Select the Type" />
              <TextField label="Name*" name="name" placeholder="Name of individual/organization" />
              <TextField label="If remotely testifying, how will you be testifying? (optional)" name="method" placeholder="Zoom" />
            </Col>
          </Row>

          {/* Select and show bill */}
          <ChangeBill />
          <Row className="mb-3">
            <Col className="col-sm-9">
              <NumField label="Year*" name="year" placeholder="2022" />
              <SelectField label="Measure Type*" name="measureType" />
              <NumField label="Measure Number*" name="measureNumber" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col className="col-sm-9 mt-2">
              <SelectField label="Position" name="position" placeholder="" />
              <LongTextField label="Body" name="body" />
              <SelectField Lable="Send To*" name="status" />
              <LongTextField label="Comment (optional)" name="comment" />
            </Col>
          </Row>
        </Card>
        <ErrorsField />
        <SubmitField id={COMPONENT_IDS.SIGN_UP_FORM_SUBMIT} />
      </AutoForm>
      {error === '' ? (
        ''
      ) : (
        <Alert variant="danger">
          <Alert.Heading>Registration was not successful</Alert.Heading>
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default CreateTestimony;
