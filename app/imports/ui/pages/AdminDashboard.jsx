import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Row, Container, Tab, ListGroup, Badge, Table, ListGroupItem, Toast, DropdownButton, Dropdown} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { Stuffs } from '../../api/stuff/StuffCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

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
        <Col md="4">
          <ListGroup>
            <ListGroupItem>
              <h6>Incoming</h6>
            </ListGroupItem>
            <ListGroupItem>
              <h7>Today</h7>
              <Toast>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">SB2821 HD1 Hearing</strong>
                </Toast.Header>
                <Toast.Body>
                  <p>Due in 15 mins </p>
                  <a href="/hearing"><Badge bd="info">more</Badge></a>
                </Toast.Body>
              </Toast>

              <Toast>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">HR2345 Hearing</strong>
                </Toast.Header>
                <Toast.Body>
                  <p>Due in 4 hours </p>
                  <a href="/hearing"><Badge bd="info">more</Badge></a>
                </Toast.Body>
              </Toast>
            </ListGroupItem>

            <ListGroupItem>
              <h7>Tomorrow</h7>
              <Toast>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">SB1111 HD1 Hearing</strong>
                </Toast.Header>
                <Toast.Body>
                  <p>Due at 10:15 AM </p>
                  <a href="/hearing"><Badge bd="info">more</Badge></a>
                </Toast.Body>
              </Toast>

              <Toast>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">SR7832 Hearing</strong>
                </Toast.Header>
                <Toast.Body>
                  <p>Due at 4:00 PM </p>
                  <a href="/hearing"><Badge bd="info">more</Badge></a>
                </Toast.Body>
              </Toast>
            </ListGroupItem>

            <ListGroupItem>
              <h7>Next Week</h7>
              <Toast>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">Sign Waving</strong>
                </Toast.Header>
                <Toast.Body>
                  <p>Due at Tuesday 9:00 AM </p>
                  <a href="/hearing"><Badge bd="info">more</Badge></a>
                </Toast.Body>
              </Toast>

            </ListGroupItem>

          </ListGroup>


        </Col>

        <Col md="8">
          <ListGroup>
            <ListGroupItem>
              <Row className="tabs">
                <Tabs defaultActiveKey="testimony" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="testimony" title="Testimony">
                    <DropdownButton id="dropdown-basic-button" title="Filter by Bills">
                      <Dropdown.Item href="#/action-1">SB2821 HDC1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">SB1945</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">HR1942</Dropdown.Item>
                    </DropdownButton>

                    <MDBTable align="middle">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Representative</th>
                          <th scope="col">Date</th>
                          <th scope="col">Bill/Resolution</th>
                          <th scope="col">Testimony</th>
                          <th scope="col">Status</th>
                          <th scope="col">View Testimony</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                  src="https://cbs6albany.com/resources/media/393c9e11-c6ed-4cdb-b3db-0610871899f6-large3x4_AP20022064296602.jpg?1587153484149"
                                  alt=""
                                  style={{ width: '45px', height: '45px' }}
                                  className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">David Ige</p>
                                <p className="text-muted mb-0">david.ige@hawaii.gov</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">06/09/2020</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">SB 2486, SD1</p>
                          </td>
                          <td>The Department of Education (Department) supports SB 2486, SD1 and respectfully provides comments. Systematic data collection improves our</td>
                          <td>
                            <MDBBadge color="secondary" pill>
                              Pending...
                            </MDBBadge>
                          </td>
                          <td>
                            <a href="/individual-testimony" type="button" className="btn btn-primary btn-sm">View</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                  src="https://cbs6albany.com/resources/media/393c9e11-c6ed-4cdb-b3db-0610871899f6-large3x4_AP20022064296602.jpg?1587153484149"
                                  alt=""
                                  style={{ width: '45px', height: '45px' }}
                                  className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">David Shmige</p>
                                <p className="text-muted mb-0">david.shmige@hawaii.gov</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">06/23/2020</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">SB 2486, SD1</p>
                          </td>
                          <td>The Department of Education (Department) supports SB 2486, SD1 and respectfully provides comments. Systematic data collection improves our</td>
                          <td>
                            <MDBBadge color="secondary" pill>
                              pending...
                            </MDBBadge>
                          </td>
                          <td>
                            <a href="/individual-testimony" type="button" className="btn btn-primary btn-sm">View</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                  src="https://cbs6albany.com/resources/media/393c9e11-c6ed-4cdb-b3db-0610871899f6-large3x4_AP20022064296602.jpg?1587153484149"
                                  alt=""
                                  style={{ width: '45px', height: '45px' }}
                                  className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">Da Vid Ige</p>
                                <p className="text-muted mb-0">da.vid.ige@hawaii.gov</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">06/23/2020</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">SB 2486, SD1</p>
                          </td>
                          <td>The Department of Education (Department) supports SB 2486, SD1 and respectfully provides comments. Systematic data collection improves our</td>
                          <td>
                            <MDBBadge color="success" pill>
                              Approved
                            </MDBBadge>
                          </td>
                          <td>
                            <a href="/individual-testimony" type="button" className="btn btn-primary btn-sm">View</a>
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>

                  </Tab>

                  <Tab eventKey="bills" title="Bills">
                    <MDBTable align="middle">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Bill #</th>
                          <th scope="col">Bill/Resolution</th>
                          <th scope="col">Office</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                          <th scope="col">Hearing Date</th>
                          <th scope="col">Hearing Type</th>
                          <th scope="col">Act #</th>
                          <th scope="col">Link</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>
                            <p className="fw-normal mb-1">HB433</p>
                          </td>
                          <td>
                            super long bill title that is used for testing to see how it changes the table. can it go...
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              OFO, OITS
                            </p>
                          </td>
                          <td>
                            <MDBBadge className="fw-normal mb-1" color="success">
                              Passed/Adopted
                            </MDBBadge>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              Testimony
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              03/17/2022
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              Hearing
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              233
                            </p>
                          </td>
                          <td>
                            <DropdownButton id="dropdown-basic-button" title="Action">
                              <Dropdown.Item href="/individualbill">View</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Add Testimony</Dropdown.Item>
                            </DropdownButton>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="fw-normal mb-1">HB433</p>
                          </td>
                          <td>
                            super long bill title that is used for testing to see how it changes the table. can it go...
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              OFO, OITS
                            </p>
                          </td>
                          <td>
                            <MDBBadge className="fw-normal mb-1" color="success">
                              Passed/Adopted
                            </MDBBadge>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              Testimony
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              03/17/2022
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              Hearing
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              233
                            </p>
                          </td>
                          <td>
                            <DropdownButton id="dropdown-basic-button" title="Action">
                              <Dropdown.Item href="/individualbill">View</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Add Testimony</Dropdown.Item>
                            </DropdownButton>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="fw-normal mb-1">HB433</p>
                          </td>
                          <td>
                            super long bill title that is used for testing to see how it changes the table. can it go...
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              OFO, OITS
                            </p>
                          </td>
                          <td>
                            <MDBBadge className="fw-normal mb-1" color="success">
                              Passed/Adopted
                            </MDBBadge>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              Testimony
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              03/17/2022
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              Hearing
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              233
                            </p>
                          </td>
                          <td>
                            <DropdownButton id="dropdown-basic-button" title="Action">
                              <Dropdown.Item href="/individualbill">View</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Add Testimony</Dropdown.Item>
                            </DropdownButton>
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </Tab>

                  <Tab eventKey="events" title="Events">
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
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>WAM</td>
                        <td>2/18/22</td>
                        <td>10:10 AM</td>
                        <td>CR 211 & Videoconference</td>
                        <td>
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>EDN</td>
                        <td>3/17/22</td>
                        <td>2:00 PM</td>
                        <td>309 Via Videoconference</td>
                        <td>
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>FIN</td>
                        <td>4/01/22</td>
                        <td>3:00 PM</td>
                        <td>308 Via Videoconference</td>
                        <td>
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>CONF</td>
                        <td>4/22/22</td>
                        <td>3:00 PM</td>
                        <td>CR 229</td>
                        <td>
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>CONF</td>
                        <td>4/26/22</td>
                        <td>3:00 PM</td>
                        <td>CR 229</td>
                        <td>
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
                        </td>
                      </tr>

                      <tr>
                        <td>CONF</td>
                        <td>4/28/22</td>
                        <td>3:30 PM</td>
                        <td>CR 229</td>
                        <td>
                          <Badge pill bg="info">Add to Calendar</Badge>{' '}
                          <Badge pill bg="danger">Share</Badge>{' '}
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

      </Row>
    </Container>

  ) : <LoadingSpinner />);
};

export default AdminDashboard;
