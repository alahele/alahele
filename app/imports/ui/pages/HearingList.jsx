import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { PAGE_IDS } from '../utilities/PageIDs';
import { Hearings } from '../../api/hearing/HearingCollection';
import HearingItem from '../components/HearingItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* A simple static component to render some text for the landing page. */
const HearingList = () => {

  const { ready, hearings } = useTracker(() => {
    const subscription = Hearings.subscribeHearings();
    const rdy = subscription.ready();
    const hearingItems = Hearings.find({}).fetch();
    return {
      hearings: hearingItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id={PAGE_IDS.HEARING_LIST}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Hearing #</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Committee</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Testifier</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Measure Type</th>
            <th scope="col">Measure Number</th>
            <th scope="col">Date Time</th>
            <th scope="col">Description</th>
            <th scope="col">Room</th>
            <th scope="col">Notice</th>
            <th scope="col">View Hearing</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {hearings.map((hearing) => <HearingItem key={hearing._id} hearing={hearing} />)}
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
  ) : <LoadingSpinner message="Loading Hearings" />);
};

export default HearingList;
