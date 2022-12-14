import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField, SelectField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { UserProfiles } from '../../api/user/UserProfileCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const SignUpAdmin = () => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: { type: String, allowedValues: ['ADMIN', 'USER', 'SECRETARY', 'SPECIALIST', 'ANALYST', 'ASSISTANT', 'DIRECTOR', 'ADMINISTRATOR', 'PIPE', 'LEADERSHIP'] },
    phone: { type: String, required: false },
    img: { type: String, required: false },
    office: { type: String, allowedValues: ['OSIP', 'OFS', 'OCID', 'OSSS', 'OTEM', 'DEPUTY', 'ALL'] },
    testimonyRole: { type: String, allowedValues: ['Processor', 'Writer', 'Office Approver', 'PIPE Approver', 'Final Approver', 'None'] },
    task: { type: String, required: false },
  });

  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const collectionName = UserProfiles.getCollectionName();
    const definitionData = doc;
    // create the new UserProfile
    defineMethod.callPromise({ collectionName, definitionData })
      .then(() => {
        swal('Account has been created.');
        setRedirectToRef(true);
      })
      .catch((err) => setError(err.reason));
  };

  /* Display the signup form. Redirect to add page after successful registration and login. */
  // if correct authentication, redirect to from: page instead of signup screen
  if (redirectToReferer) {
    return <Navigate to="/home" />;
  }
  return (
    <Container id={PAGE_IDS.SIGN_UP} className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Register Account</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card>
              <Card.Body>
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_FIRST_NAME} name="firstName" placeholder="First name" />
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_LAST_NAME} name="lastName" placeholder="Last name" />
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_EMAIL} name="email" placeholder="E-mail address" />
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_PASSWORD} name="password" placeholder="Password" type="password" />
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_IMG} name="img" placeholder="Profile Picture" />
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_PHONE} name="phone" placeholder="Phone Number" />
                <SelectField id={COMPONENT_IDS.SIGN_UP_FORM_ROLE} name="role" placeholder="Select the Role" />
                <SelectField id={COMPONENT_IDS.SIGN_UP_FORM_OFFICE} name="office" placeholder="Select the Office" />
                <SelectField id={COMPONENT_IDS.SIGN_UP_FORM_TESTIMONY_ROLE} name="testimonyRole" placeholder="Select the testimony role" />
                <TextField id={COMPONENT_IDS.SIGN_UP_FORM_TASK} name="task" placeholder="List of Responsibilities" />
                <ErrorsField />
                <SubmitField id={COMPONENT_IDS.SIGN_UP_FORM_SUBMIT} />
              </Card.Body>
            </Card>
          </AutoForm>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpAdmin;
