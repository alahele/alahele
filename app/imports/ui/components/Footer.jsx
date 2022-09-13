import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer className="mt-auto bg-light">
      <Container style={divStyle}>
        <Row>
          <img id="state-seal-img" src="../images/state-seal.png" alt="state seal" />
          <Col className="text-center tos" sm={8}>
            <p>
              Please be advised that these pages may contain
              links to external Internet sites established by other entities. The Hawaii State Legislature does not maintain, review, or endorse these sites and is not responsible for their content.
            </p>
            <p>
              We make every effort to comply to ADA standards, and Section 508 of the Rehabilitation Act.
              <a href="https://www.capitol.hawaii.gov/ada.aspx">Visit our ADA page here</a>. If you have any
              problems with any of these pages, please <a href="mailto: webmaster@capitol.hawaii.gov">contact the webmaster</a> with the page address and problems encountered.
            </p>
            <p>
              <a href="https://www.capitol.hawaii.gov/privacy.aspx">You may view our Privacy Policy here.</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
