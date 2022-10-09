import React from 'react';
import { Container } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { Measures } from '../../api/measure/MeasureCollection';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import MeasureItem from "../components/MeasureItem";
import LoadingSpinner from "../components/LoadingSpinner";

/* A simple static component to render some text for the BillList page. */
const BillList = () => {

  const { ready, measures } = useTracker(() => {
    const subscription = Measures.subscribeMeasures();
    const rdy = subscription.ready();
    const measureItems = Measures.find({}).fetch();

    return {
      measures: measureItems,
      ready: rdy,
    };
  }, []);


  console.log(measures);
  return (ready ? (
  <Container id={PAGE_IDS.BILL_LIST}>
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Type</th>
          <th scope="col">Number</th>
          <th scope="col">Code</th>
          <th scope="col">Action</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Link</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {measures.map((measure) => <MeasureItem key={measure._id} measure={measure} />)}
      </MDBTableBody>
    </MDBTable>
    <MDBPagination className="mb-0 justify-content-center">
      <MDBPaginationItem>
        <MDBPaginationLink href="#">Previous</MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink href="#">1</MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink href="#">2</MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink href="#">3</MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink href="#">Next</MDBPaginationLink>
      </MDBPaginationItem>
    </MDBPagination>
  </Container>
  ) : <LoadingSpinner meassure="Loading Measures"/>);
};

export default BillList;
