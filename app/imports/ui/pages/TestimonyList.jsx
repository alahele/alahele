import React from 'react';
import { Container } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { PAGE_IDS } from '../utilities/PageIDs';
import LoadingSpinner from '../components/LoadingSpinner';
import { Testimony } from '../../api/testimony/TestimonyCollection';
import MeasureItem from '../components/MeasureItem';

/* A simple static component to render some text for the TestimonyList page. */
const TestimonyList = () => {

  const { ready, testimonies } = useTracker(() => {
    const subscription = Testimony.subscribeTestimony();
    const rdy = subscription.ready();
    const testimonyItems = Testimony.find({}).fetch();

    return {
      testimonies: testimonyItems,
      ready: rdy,
    };
  }, []);

  console.log(testimonies);
  return (ready ? (
    <Container id={PAGE_IDS.TESTIMONY_LIST}>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Bill Type</th>
            <th scope="col">Bill Number</th>
            <th scope="col">Position</th>
            <th scope="col">Status</th>
            <th scope="col">Link</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {testimonies.map((measure) => <MeasureItem key={measure._id} measure={measure} />)}
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
  ) : <LoadingSpinner testimony="Loading Testimonies" />);
};

export default TestimonyList;
