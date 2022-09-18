import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Col, Row, Card, Button } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, TextField } from 'uniforms-bootstrap5';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    // console.log('submit', doc, redirect);
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
    // console.log('submit2', email, password, error, redirect);
  };

  // Render the signin form.
  // console.log('render', error, redirect);
  // if correct authentication, redirect to page instead of login screen
  if (redirect) {
    return (<Navigate to="/home" />);
  }
  // Otherwise return the Login form.
  return (
      <div id={PAGE_IDS.SIGN_IN} className="my-auto mx-auto">
        <Card className="signin px-5 py-5">
          <Row className="justify-content-md-center">
            <Col md="6" className="px-5 text-center ">
              <Card.Title><img width="300px" src="../images/alahele.png" alt="Ala hele Logo"/></Card.Title>
              <Card.Subtitle className="text-muted">DOE Legislative Bill Tracker</Card.Subtitle>
            </Col>
            <Col md="6" className="px-5">
              <AutoForm schema={bridge} onSubmit={data => submit(data)}>
                <TextField name="email" placeholder="E-mail address" />
                <TextField id={COMPONENT_IDS.SIGN_IN_FORM_PASSWORD} name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <div className="d-grid gap-2">
                  <Button variant="dark" type="submit" size="sm" id={COMPONENT_IDS.SIGN_IN_FORM_SUBMIT}>Submit</Button>

                  <Button variant="light" size="sm">Create an account</Button>
                </div>
              </AutoForm>
              {error === '' ? (
                  ''
              ) : (
                  <Alert variant="danger">
                    <Alert.Heading>Login was not successful</Alert.Heading>
                    {error}
                  </Alert>
              )}
            </Col>
          </Row>
        </Card>
      </div>
  );
};

export default SignIn;
