import React from 'react';
import {useState} from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { PAGE_IDS } from '../utilities/PageIDs';
import SearchBar from '../components/SearchBar';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { SortNumericUp, SortNumericDown, SortAlphaUp, SortAlphaDown, SortUp, SortDown } from 'react-bootstrap-icons';
import LoadingSpinner from '../components/LoadingSpinner';
import { Testimony } from '../../api/testimony/TestimonyCollection';
import TestimonyItem from '../components/TestimonyItem';

/* A simple static component to render some text for the landing page. */
const TestimonyList = () => {
  let sortedTestimonies;
  const { ready, testimony } = useTracker(
  () => {
    const subscription = Testimony.subscribeTestimony();
    const rdy = subscription.ready();
    const testimonyItems = Testimony.find({}).fetch();
    return {
      testimony: testimonyItems,
      ready: rdy,
    };
  }, []);

  const [sort, setSort] = useState(1);

  switch (sort) {
    case 1:
      sortedTestimonies = testimony.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      break;
    case 2:
      sortedTestimonies = testimony.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      break;
    case 3:
      sortedTestimonies = testimony.sort(function (a, b) {
        return a.measureNumber - b.measureNumber;
      });
      break;
    case 4:
      sortedTestimonies = testimony.sort(function (a, b) {
        return b.measureNumber - a.measureNumber;
      });
      break;
    case 5:
      sortedTestimonies = testimony.sort(function (a, b) {
        return b.year - a.year;
      });
      break;
    case 6:
      sortedTestimonies = testimony.sort(function (a, b) {
        return a.year - b.year;
      });
      break;
    default:
      break;
  }

    return ( ready ? (
  <Container id={PAGE_IDS.TESTIMONY_LIST}>
    <SearchBar id={COMPONENT_IDS.SEARCH_BAR} />
    <Dropdown className="float-end">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => setSort(1)}>Date / Time <SortUp/> </Dropdown.Item>
        <Dropdown.Item href="#/action-1" onClick={() => setSort(2)}>Date / Time <SortDown/> </Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={() => setSort(3)}>Bill Number <SortNumericUp/> </Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={() => setSort(4)}>Bill Number <SortNumericDown/> </Dropdown.Item>
        <Dropdown.Item href="#/action-4" onClick={() => setSort(5)}>Year <SortNumericUp/> </Dropdown.Item>
        <Dropdown.Item href="#/action-4" onClick={() => setSort(6)}>Year <SortNumericDown/> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
        {testimony.map((testimony) => <TestimonyItem key={testimony._id} testimony={testimony}/>)}
        {sortedTestimonies.map((testimony) => <TestimonyItem key={testimony._id} testimony={testimony}/>)}
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
        ) : <LoadingSpinner testimony = "Loading Testimony"></LoadingSpinner>);
};
export default TestimonyList;
