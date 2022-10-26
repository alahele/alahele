import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Row, Container, Accordion, Tab, ListGroup, Badge, Table } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { Stuffs } from '../../api/stuff/StuffCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { Measures } from '../../api/measure/MeasureCollection';
import MeasureItem from '../components/MeasureItem';


const IndividualBill = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, measures } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Measures.subscribeMeasures();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    const measureItems = Measures.find({}).fetch();
    return {
      measures: measureItems,
      ready: rdy,
    };

  }, []);
  return (ready ? (
  // Measure Number & Measure Title
    <Container id={PAGE_IDS.INDIVIDUAL_BILL} className="my-4">

      <tr className="my-4">
        <td md>
          {measures.map((measure) =>
              <td>{measure.code}</td>
          )}
        </td>
      </tr>

    </Container>
  ) : <LoadingSpinner />);
};

export default IndividualBill;
