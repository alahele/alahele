import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Row, Container, Tab, ListGroup, ListGroupItem, Accordion, Table, Badge } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Stuffs } from '../../api/stuff/StuffCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

const AdminDashboard = () => {
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
    <Container id={PAGE_IDS.ADMIN_DASHBOARD} className="my-4">
      <Row>
        <Col md="8">
          <ListGroup>
            <ListGroupItem>
              <Row className="tabs">
                <Tabs defaultActiveKey="events" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="events" title="Events">

                    <Accordion defaultActiveKey="0" flush>
                      <Table>
                        <thead>
                          <tr>
                            <th className="col-sm-3">Number</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th className="col-sm-4">Room</th>
                          </tr>
                        </thead>
                      </Table>

                      <Accordion.Item eventKey="0">
                        <AccordionHeader className="my-2">
                          <Table>
                            <tbody>
                              <td className="col-sm-2">SCR 010</td>
                              <td className="col-sm-2">09/26/2022</td>
                              <td className="col-sm-2">3:00 PM</td>
                              <td className="col-sm-3">308</td>
                            </tbody>
                          </Table>
                        </AccordionHeader>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <dl className="row">
                                <dd className="col-sm-3">Committee:</dd>
                                <dd className="col-sm-9">EDU, FIN</dd>

                                <dd className="col-sm-3">Comments:</dd>
                                <dd className="col-sm-9" />
                              </dl>
                            </Col>
                            <Col md="auto">
                              <Badge pill bg="info">Add to calendar</Badge>{' '}
                              <Badge pill bg="danger">Share</Badge>{' '}
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <AccordionHeader className="my-2">
                          <Table>
                            <tbody>
                              <td className="col-sm-2">SCR 012</td>
                              <td className="col-sm-2">09/29/2022</td>
                              <td className="col-sm-2">10:00 AM</td>
                              <td className="col-sm-3">CR 229</td>
                            </tbody>
                          </Table>
                        </AccordionHeader>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <dl className="row">
                                <dd className="col-sm-3">Committee:</dd>
                                <dd className="col-sm-9">EDU, FIN</dd>

                                <dd className="col-sm-3">Comments:</dd>
                                <dd className="col-sm-9" />
                              </dl>
                            </Col>
                            <Col md="auto">
                              <Badge pill bg="info">Add to calendar</Badge>{' '}
                              <Badge pill bg="danger">Share</Badge>{' '}
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <AccordionHeader className="my-2">
                          <Table>
                            <tbody>
                              <td className="col-sm-2">SCR 013</td>
                              <td className="col-sm-2">09/30/2022</td>
                              <td className="col-sm-2">12:00 PM</td>
                              <td className="col-sm-3">CR 229</td>
                            </tbody>
                          </Table>
                        </AccordionHeader>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <dl className="row">
                                <dd className="col-sm-3">Committee:</dd>
                                <dd className="col-sm-9">EDU, FIN</dd>

                                <dd className="col-sm-3">Comments:</dd>
                                <dd className="col-sm-9" />
                              </dl>
                            </Col>
                            <Col md="auto">
                              <Badge pill bg="info">Add to calendar</Badge>{' '}
                              <Badge pill bg="danger">Share</Badge>{' '}
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>

                    </Accordion>

                  </Tab>

                  <Tab eventKey="testimony" title="Testimony">
                    <Accordion defaultActiveKey="0" flush>
                      <Table>
                        <thead>
                          <tr>
                            <th className="col-sm-3">Bill</th>
                            <th>Testifier</th>
                            <th>Date</th>
                            <th className="col-sm-4">Status</th>
                          </tr>
                        </thead>
                      </Table>

                      <Accordion.Item eventKey="0">
                        <AccordionHeader className="my-2">
                          <Table>
                            <tbody>
                              <td className="col-sm-2">HB433</td>
                              <td className="col-sm-2">Michael Golojuch Jr</td>
                              <td className="col-sm-2">01/28/2022</td>
                              <td className="col-sm-3">Pending</td>
                            </tbody>
                          </Table>
                        </AccordionHeader>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <dl className="row">
                                <dd className="col-sm-3">Position:</dd>
                                <dd className="col-sm-9">Support</dd>

                                <dd className="col-sm-3">Department:</dd>
                                <dd className="col-sm-9">Education</dd>

                                <dd className="col-sm-3">Purpose:</dd>
                                <dd className="col-sm-9">Requires the Department of Education to establish a standardized data collection process; collect and anayze data relating to...</dd>

                                <dd className="col-sm-3">Testimony:</dd>
                                <dd className="col-sm-9">The Department of Education (Department) supports SB 2486, SD1 and respectfully provides comments. Systematic data collection improves our</dd>
                              </dl>
                            </Col>
                            <Col md="auto">
                              <Badge pill bg="info">Approve</Badge>{' '}
                              <Badge pill bg="danger">View</Badge>{' '}
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <AccordionHeader className="my-2">
                          <Table>
                            <tbody>
                              <td className="col-sm-2">SB 2486</td>
                              <td className="col-sm-2">Rachel Kuenzi</td>
                              <td className="col-sm-2">01/28/2022</td>
                              <td className="col-sm-3">Pending</td>
                            </tbody>
                          </Table>
                        </AccordionHeader>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <dl className="row">
                                <dd className="col-sm-3">Position:</dd>
                                <dd className="col-sm-9">Support</dd>

                                <dd className="col-sm-3">Department:</dd>
                                <dd className="col-sm-9">Education</dd>

                                <dd className="col-sm-3">Purpose:</dd>
                                <dd className="col-sm-9">Requires the Department of Education to establish a standardized data collection process; collect and anayze data relating to...</dd>

                                <dd className="col-sm-3">Testimony:</dd>
                                <dd className="col-sm-9">The Department of Education (Department) supports SB 2486, SD1 and respectfully provides comments. Systematic data collection improves our</dd>
                              </dl>
                            </Col>
                            <Col md="auto">
                              <Badge pill bg="info">Approve</Badge>{' '}
                              <Badge pill bg="danger">View</Badge>{' '}
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <AccordionHeader className="my-2">
                          <Table>
                            <tbody>
                              <td className="col-sm-2">SB2821 SD1</td>
                              <td className="col-sm-2">David Peters</td>
                              <td className="col-sm-2">02-18-22</td>
                              <td className="col-sm-3">Approved</td>
                            </tbody>
                          </Table>
                        </AccordionHeader>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <dl className="row">
                                <dd className="col-sm-3">Position:</dd>
                                <dd className="col-sm-9">Support</dd>

                                <dd className="col-sm-3">Department:</dd>
                                <dd className="col-sm-9">Education</dd>

                                <dd className="col-sm-3">Purpose:</dd>
                                <dd className="col-sm-9">Requires the Department of Education to establish a standardized data collection process; collect and anayze data relating to...</dd>

                                <dd className="col-sm-3">Testimony:</dd>
                                <dd className="col-sm-9">The Department of Education (Department) supports SB 2486, SD1 and respectfully provides comments. Systematic data collection improves our</dd>
                              </dl>
                            </Col>
                            <Col md="auto">
                              <Badge pill bg="danger">View</Badge>{' '}
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>

                    </Accordion>
                  </Tab>

                  <Tab eventKey="bills" title="Bills">
                    <Table>
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>Title</th>
                          <th>Status</th>
                          <th>DOE Tracker</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>HB433</td>
                          <td>Relating to education</td>
                          <td>Pending</td>
                          <td>Accepting Testimonies</td>
                          <td>
                            <Badge pill bg="danger">Add Testimony</Badge>{' '}
                            <Badge pill bg="info">View</Badge>{' '}
                          </td>
                        </tr>

                        <tr>
                          <td>HB433</td>
                          <td>Relating to education</td>
                          <td>Pending</td>
                          <td>Accepting Testimonies</td>
                          <td>
                            <Badge pill bg="danger">Add Testimony</Badge>{' '}
                            <Badge pill bg="info">View</Badge>{' '}
                          </td>
                        </tr>

                        <tr>
                          <td>HB433</td>
                          <td>Relating to education</td>
                          <td>Pending</td>
                          <td>Accepting Testimonies</td>
                          <td>
                            <Badge pill bg="danger">Add Testimony</Badge>{' '}
                            <Badge pill bg="info">View</Badge>{' '}
                          </td>
                        </tr>

                        <tr>
                          <td>SB2821</td>
                          <td>RELATING TO MENSTRUAL EQUALITY</td>
                          <td>Passed into Law</td>
                          <td>None</td>
                          <td>
                            <Badge pill bg="info">View</Badge>{' '}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab>

                </Tabs>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md="4">
          <ListGroup>
            <ListGroupItem>
              <Calendar />
            </ListGroupItem>

          </ListGroup>

        </Col>

      </Row>
    </Container>

  ) : <LoadingSpinner />);
};

export default AdminDashboard;
