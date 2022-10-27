import React from 'react';
import '/client/style.css';
import { useTracker } from 'meteor/react-meteor-data';
import { Accordion, Button, Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useParams } from 'react-router';
import { PAGE_IDS } from '../utilities/PageIDs';
import CountDown from '../components/CountDown';
import { Hearings } from '../../api/hearing/HearingCollection';
import LoadingSpinner from '../components/LoadingSpinner';

/** Render an up-coming hearing . */
const Hearing = () => {

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { _id } = useParams();

  const { ready, hearings } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Hearings.subscribeHearings();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    const hearingItems = Hearings.find({ _id: _id }, { sort: { name: 1 } }).fetch();
    const hearingDoc = hearingItems[0];
    return {
      hearings: hearingDoc,
      ready: rdy,
    };

  }, [_id]);

  const mockHearingData = {
    timeStamp: '2022-12-25T18:20:00+05:30',
    room: 229,
    code: 'SCR 010',
    description: 'This is a description of hearing',
    notice: 'Some king of notice',
    measures: [
      { code: '32-423(d), HRSsfasda',
        title: 'Department of education; fefasdfdsfasdfadsfadsfasdderal funds; general fund offset',
        body: 'body text fsdafadsfadsfadsis here',
        committee: 'Senate fasfsdfadsfasdf Education',
        testimonies: [
          { code: 'FFD-4538',
            testifier: 'Uncle Gabby',
            description: 'Le`ahi, `uhe`uhene\n' +
                'Kaimana Hila, `uhe`uhene\n' +
                'Hoku kau `ale kai a`o Mamala\n' +
                '`Uhe`uhene\n' +
                '\n' +
                '{There is Leahi\n' +
                'Diamond Head\n' +
                'Rising star of Mamala}\n' +
                '\n' +
                'Malama pono `oe, uheuhene\n' +
                'I ka poe pele, `uhe`uhene\n' +
                '`O ili kaua la ilaila\n' +
                '`Uhe`uhene\n' +
                '\n' +
                '{Watch out\n' +
                'For the bell buoy\n' +
                'Coming to view by the reef}\n' +
                '\n' +
                '`O ka po`e kaulana, `uhe`uhene\n' +
                'Kau i ka nuku, `uhe`uhene\n' +
                'Nana a`o ho`owale nei i ka ',
          },
          { code: 'AGR-30209',
            testifier: 'Jerry Santos',
            description: 'I remember days when we were younger\n' +
                'We used to catch \'o’opu in the mountain stream\n' +
                '\'Round the Ko\'olau hills we’d ride on horseback\n' +
                'So long ago it seems it was a dream\n' +
                'Last night I dreamt I was returning and my heart called out to you\n' +
                'But I fear you won\'t be like I left you\n' +
                'Me kealoha ku\'u home \'o kahalu\'u\n',
          },
        ],
      },
      { code: '29-25(d), HRSsfasda',
        title: 'Department of education; federal funds; general fund offset',
        body: 'body text is here',
        committee: 'Senate Education',
        testimonies: [
          { code: 'FFD-4538',
            testifier: 'Iz',
            description: 'He aloha e ka i\'a la\n' +
                '\'Ai a ka \'ama\'ama\n' +
                '\'Ai a ka i\'a la\n' +
                '\'Ai a ka lawalu\n' +
                '\'Ai a ka ho\'omoemoe\n' +
                'He aloha e ka i\'a la\n' +
                '\'Ai a ka pa\'a kai\n' +
                '\'Ai a ka i\'a la\n' +
                '\'Ai a ka \'ono la\n' +
                '\'Ai a ka sawa sawa\n' +
                'He aloha e ka i\'a la\n' +
                '\'Ai a ka ni\'oi\n' +
                '\'Ai a ka i\'a la\n' +
                '\'Ai a ka welawela\n' +
                '\'Ai a ka puhipuhi\n' +
                'He aloha e ka i\'a la\n' +
                '\'Ai a ka \'o\'opu\n' +
                '\'Ai a ka i\'a la\n' +
                '\'Aia a ka \'ele\'ele\n' +
                '\'Ai a ia pake\'oke\'o\n' +
                'He aloha e ka i\'a la\n' +
                '\'Ai a ka \'opihi\n' +
                '\'Ai a ka i\'a la\n' +
                '\'Ai a ka maka la\n' +
                '\'Ai a ka piha pohaku\n' +
                'Haina \'ai \'ia mai\n' +
                '\'Ai ana ka puana\n' +
                'Hiu a ka pipi stew\n' +
                'Hiu a ka miki poi\n' +
                'Hiu a ka piha opu',
          },
          { code: 'AGR-30209',
            testifier: 'Dennis Kamakahi',
            description: 'Upu aʻe he manaʻo\n' +
                'I ka wēkiu o Kōkeʻe\n' +
                'I ka nani, o ka āina\n' +
                'O ka noe poʻaiʻai\n' +
                '\n' +
                'Hui:\n' +
                'ʻO Kalalau, he ʻāina laʻa\n' +
                'I ka ua liʻi liʻi\n' +
                'ʻO Waimea kuʻu lei aloha\n' +
                'Never more to say goodbye\n' +
                '\n' +
                'Hoʻi mai ana i kahikina\n' +
                'I ka la welawela\n' +
                'I ke kai hāwanawana\n' +
                'I Poʻipū ma Kōloa\n' +
                '\n' +
                'Mele au no ka beauty\n' +
                'I ka uka ʻiuʻiu\n' +
                'I Kōkeʻe ua ʻike au\n' +
                'I ka noe poʻaiʻai',
          },
        ],
      },

    ],
  };

  return (ready ? (
    <Container id={PAGE_IDS.HEARING} className="py-3">
      <a className="btn btn-primary btn-sm mb-2" href="/hearing-list">back to hearing list</a>
      <Card>
        <Card.Header>State of Hawaii Legislator Hearing</Card.Header>
        <Card.Body>
          <Container className="py-3">
            <Row className="fw-bold">
              <Col> Hearing #</Col>
              <Col> Hearing Type</Col>
              <Col> Date/Time</Col>
              <Col>Time Till Close</Col>
              <Col> Room #</Col>
            </Row>
            <Row>
              <Col> {hearings.measureNumber}</Col>
              <Col> {hearings.measureType}</Col>
              <Col> {hearings.datetime}</Col>
              <Col><CountDown dateTimeStr={mockHearingData.timeStamp} /></Col>
              <Col> {hearings.room}</Col>
            </Row>
          </Container>
          <Container className="py-3">
            <Row className="fw-bold">
              <Col> Description</Col>
              <Col> Notice</Col>
            </Row>
            <Row>
              <Col> {hearings.description}</Col>
              <Col> {hearings.notice}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Container className="py-3">
                <Card>
                  <Card.Header>Included Measures</Card.Header>
                  <Nav variant="pills" className="flex-column">
                    {mockHearingData.measures.map((measure, idx) => (
                      <Container>
                        <Nav.Item>
                          <Nav.Link eventKey={`link#${idx}`}>{measure.code}</Nav.Link>
                        </Nav.Item>
                      </Container>
                    ))}
                  </Nav>
                </Card>
              </Container>
            </Col>
            <Col sm={9}>
              <Container>
                <Tab.Content>
                  {mockHearingData.measures.map((measure, idx) => (
                    <Tab.Pane eventKey={`link#${idx}`}>
                      <Container className="py-3">
                        <Card>
                          <Card.Header>State of Hawaii Legislative Measure</Card.Header>
                          <Card.Body>
                            <Container className="py-3">
                              <Row className="fw-bold">
                                <Col> Measure Code</Col>
                                <Col> Title</Col>
                              </Row>
                              <Row>
                                <Col> {measure.code}</Col>
                                <Col> {measure.body}</Col>
                              </Row>
                            </Container>
                            <Container className="py-3">
                              <Row className="fw-bold">
                                <Col> Description</Col>
                                <Col> Committee</Col>
                              </Row>
                              <Row>
                                <Col> {measure.body}</Col>
                                <Col> {measure.committee}</Col>
                              </Row>
                            </Container>
                            <Container>
                              <Card>
                                <Card.Header>Featured Testimonies </Card.Header>
                                <Card.Body>
                                  <Accordion defaultActiveKey={0} flush>
                                    {measure.testimonies.map((testimony, tIndex) => (
                                      <Accordion.Item eventKey={`${tIndex}`}>
                                        <Accordion.Header>
                                          <Container className="py-2">
                                            <Col>
                                              <p className="fw-light">Testimony Code: <span className="fw-lighter">{testimony.code}</span></p>
                                            </Col>
                                            <Col>
                                              <p className="fw-light">Testifier: <span className="fw-lighter">{testimony.testifier}</span></p>
                                            </Col>
                                          </Container>
                                        </Accordion.Header>
                                        <Accordion.Body className="fw-lighter">
                                          {testimony.description}
                                          <Container>
                                            <Button>Route for Office Review</Button>
                                            <Button>Route to Pipe</Button>
                                          </Container>
                                          <Row>
                                            <Col>
                                              <Container className="py-2">
                                                <Card>
                                                  <Card.Header>Review Section</Card.Header>
                                                  <Card.Body>
                                                    <Button>Route to OSIPOS</Button>
                                                    <Button>Route to Pipe</Button>
                                                  </Card.Body>
                                                </Card>
                                              </Container>
                                            </Col>
                                            <Col>
                                              <Container className="py-2">
                                                <Card>
                                                  <Card.Header>Review Section</Card.Header>
                                                  <Card.Body>
                                                    <Button>Route to OSIPOS</Button>
                                                    <Button>Route to Pipe</Button>
                                                  </Card.Body>
                                                </Card>
                                              </Container>
                                            </Col>
                                          </Row>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    ))}
                                  </Accordion>
                                </Card.Body>
                              </Card>
                            </Container>
                          </Card.Body>
                        </Card>
                      </Container>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Container>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  ) : <LoadingSpinner />);
};

export default Hearing;
