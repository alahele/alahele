import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Row, Container, Accordion, Tab, ListGroup, Badge, Table } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { Stuffs } from '../../api/stuff/StuffCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

const IndividualBill = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker

  const { ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Stuffs.subscribeStuffAdmin();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    return {
      ready: rdy,
    };

  }, []);
  return (ready ? (
  // Measure Number & Measure Title
    <Container id={PAGE_IDS.INDIVIDUAL_BILL} className="my-4">
      <a className="btn btn-primary btn-sm mb-2" href="/bill-list">back</a>
      <Row>
        <Col md="auto"><h3>SB2821 SD2 HD1 CD1</h3></Col>
      </Row>
      <Row>
        <Col md="auto" key="secondary"><h5>RELATING TO MENSTRUAL EQUALITY</h5></Col>
        <Col md="auto"><h5>2022</h5></Col>
        <Col>
          <Badge bg="danger">PDF</Badge>{' '}
          <Badge bg="info">Archive</Badge>{' '}
        </Col>
      </Row>

      <Row className="my-4">
        <Col md>

          <Accordion defaultActiveKey="0" className="accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Button className="accordion">
                <h6 className="mt-2">Measure Overview</h6>
              </Accordion.Button>

              <Accordion.Body>
                <dl className="row">

                  <dt className="col-sm-2">Status:</dt>
                  <dd className="col-sm-9">
                    <Badge pill bg="danger">PASSED INTO LAW</Badge>{' '}
                    <dl className="row">
                      <dd className="col-sm-2">6/21/2022</dd>
                      <dd className="col-sm-8">Act 113, on 06/20/2022 (Gov. Msg. No. 1213).</dd>
                    </dl>
                  </dd>

                  <dt className="col-sm-2">Measure Type:</dt>
                  <dd className="col-sm-9" />

                  <dt className="col-sm-2">Report Title:</dt>
                  <dd className="col-sm-9">Menstrual Equity; Menstrual Products; Department of Education; Public Schools; Charter Schools</dd>

                  <dt className="col-sm-2">Companion:</dt>
                  <dd className="col-sm-9" />

                  <dt className="col-sm-2">Current Referral:</dt>
                  <dd className="col-sm-9">EDN, FIN</dd>

                  <dt className="col-sm-2">Description:</dt>
                  <dd className="col-sm-9">
                    <p>Requires the Department of Education to provide menstrual products free of charge to all students on all public school campuses. (CD1)</p>
                  </dd>

                  <dt className="col-sm-2">Introducer:</dt>
                  <dd className="col-sm-9">KIDANI, BAKER, CHANG, DECOITE, FEVELLA, GABBARD, INOUYE, KEITH-AGARAN, KEOHOKALOLE, KIM, LEE, MISALUCHA, MORIWAKI, RIVIERE, SAN BUENAVENTURA, Dela Cruz, Ihara, Nishihara, Shimabukuro, Wakai
                  </dd>

                  <dt className="col-sm-2">DOE Tracker:</dt>
                  <dd className="col-sm-9">
                    <ListGroup horizontal style={{ height: '25px', fontSize: '12px' }}>
                      <ListGroup.Item variant="warning">
                        <p style={{ marginTop: '-0.3rem' }}>Introduced</p>
                      </ListGroup.Item>
                      <ListGroup.Item variant="warning">
                        <p style={{ marginTop: '-0.3rem' }}>Reviewed</p>
                      </ListGroup.Item>
                      <ListGroup.Item variant="warning">
                        <p style={{ marginTop: '-0.3rem' }}>Testimonies Submitted</p>
                      </ListGroup.Item>
                      <ListGroup.Item variant="warning">
                        <p style={{ marginTop: '-0.3rem' }}>Final Review</p>
                      </ListGroup.Item>
                      <ListGroup.Item variant="success">
                        <p style={{ marginTop: '-0.3rem' }}>Sent to Capital</p>
                      </ListGroup.Item>
                    </ListGroup>
                  </dd>
                </dl>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <ListGroup className="tabs">
        <ListGroup.Item>
          <Row className="tabs">
            <Col md>
              <Tabs defaultActiveKey="hearing" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="hearing" title="Hearing Notices">
                  <Table>
                    <thead>
                      <tr>
                        <th>Committee</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Room</th>
                        <th>Notice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>EDU</td>
                        <td>1/28/22</td>
                        <td>3:00 PM</td>
                        <td>CR 229 & Videoconference</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>WAM</td>
                        <td>2/18/22</td>
                        <td>10:10 AM</td>
                        <td>CR 211 & Videoconference</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>EDN</td>
                        <td>3/17/22</td>
                        <td>2:00 PM</td>
                        <td>309 Via Videoconference</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>FIN</td>
                        <td>4/01/22</td>
                        <td>3:00 PM</td>
                        <td>308 Via Videoconference</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>CONF</td>
                        <td>4/22/22</td>
                        <td>3:00 PM</td>
                        <td>CR 229</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>CONF</td>
                        <td>4/26/22</td>
                        <td>3:00 PM</td>
                        <td>CR 229</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>CONF</td>
                        <td>4/28/22</td>
                        <td>3:30 PM</td>
                        <td>CR 229</td>
                        <td>
                          <Badge pill bg="info">Notice</Badge>{' '}
                          <Badge pill bg="secondary">Video</Badge>{' '}
                        </td>
                      </tr>

                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="testimony" title="IndividualTestimony">

                  <dl className="row">
                    <dt className="col-sm-2">SB2821</dt>
                    <dt className="col-sm-2">01-28-22</dt>
                    <dd className="col-sm-2"><Badge pill bg="danger">PDF</Badge></dd>
                  </dl>

                  <Table>
                    <thead>
                      <tr>
                        <th>Submitted By</th>
                        <th>Organization</th>
                        <th>Position</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael Golojuch Jr</td>
                        <td>Stonewall Caucus of the Democratic Party of Hawaii</td>
                        <td>Support</td>
                        <td>Remotely Via Zoom</td>
                      </tr>
                      <tr>
                        <td>Rachel Kuenzi</td>
                        <td>Planned Parenthood Alliance Advocates</td>
                        <td>Support</td>
                        <td>Written Testimony Only</td>
                      </tr>
                      <tr>
                        <td>David Peters</td>
                        <td>Ho`ola Lahui Hawaii</td>
                        <td>Support</td>
                        <td>Written Testimony Only</td>
                      </tr>
                    </tbody>
                  </Table>

                  <dl className="row">
                    <dt className="col-sm-2">SB2821 SD1</dt>
                    <dt className="col-sm-2">02-18-22</dt>
                    <dd className="col-sm-2"><Badge pill bg="danger">PDF</Badge></dd>
                  </dl>

                  <Table>
                    <thead>
                      <tr>
                        <th>Submitted By</th>
                        <th>Organization</th>
                        <th>Position</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael Golojuch Jr</td>
                        <td>Stonewall Caucus of the Democratic Party of Hawaii</td>
                        <td>Support</td>
                        <td>Remotely Via Zoom</td>
                      </tr>
                      <tr>
                        <td>Rachel Kuenzi</td>
                        <td>Planned Parenthood Alliance Advocates</td>
                        <td>Support</td>
                        <td>Written Testimony Only</td>
                      </tr>
                      <tr>
                        <td>David Peters</td>
                        <td>Ho`ola Lahui Hawaii</td>
                        <td>Support</td>
                        <td>Written Testimony Only</td>
                      </tr>
                    </tbody>
                  </Table>

                </Tab>

                <Tab eventKey="files" title="Files">
                  <Row className="justify-content-md-center">
                    <Col md lg="6">
                      <Table>
                        <thead>
                          <tr>
                            <th>All Versions of this Measure</th>
                            <th>Links</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              SB2821 SD2
                            </td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 SD1</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 HD2</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 HD1</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 CD1</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col md lg="6">
                      <Table>
                        <thead>
                          <tr>
                            <th>Committee Reports</th>
                            <th>Links</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>SB2821 SD1 SSCR2013</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 SD2 SSCR2863</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 SD2 HSCR1236-22</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 HD1 HSCR1938-22</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                          <tr>
                            <td>SB2821 CD1 CCR129-22</td>
                            <td>
                              <Badge bg="danger">PDF</Badge>{' '}
                              <Badge bg="info">Archive</Badge>{' '}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Tab>

              </Tabs>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  ) : <LoadingSpinner />);
};

export default IndividualBill;
