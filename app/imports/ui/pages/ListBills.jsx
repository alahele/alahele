import React from 'react';
import { Container } from 'react-bootstrap';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';

/* A simple static component to render some text for the listBills page. */
const TestimonyList = () => (
  <Container>
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
            super long bill title that is used for testing to see how it changes the table. can it go
            longer who knows? testing one two three four five six seven eight nine ten eleven twelve
            thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty one twenty two twenty three
            twenty four twenty five twenty six twenty seven twenty eight twenty nine thirty thirty one thirty two
            thirty three thirty four thirty five thirty six thirty seven thirty eight thirty nine forty
            forty one forty two forty three forty four forty five forty six forty seven forty eight forty nine fifty
            fifty one fifty two fifty three fifty four fifty five fifty six fifty seven fifty eight fifty nine sixty
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
            <a href="#" className="">Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <p className="fw-normal mb-1">HB433</p>
          </td>
          <td>
            super long bill title that is used for testing to see how it changes the table. can it go
            longer who knows? testing one two three four five six seven eight nine ten eleven twelve
            thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty one twenty two twenty three
            twenty four twenty five twenty six twenty seven twenty eight twenty nine thirty thirty one thirty two
            thirty three thirty four thirty five thirty six thirty seven thirty eight thirty nine forty
            forty one forty two forty three forty four forty five forty six forty seven forty eight forty nine fifty
            fifty one fifty two fifty three fifty four fifty five fifty six fifty seven fifty eight fifty nine sixty
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
            <a href="#" className="">Link</a>
          </td>
        </tr>
        <tr>
          <td>
            <p className="fw-normal mb-1">HB433</p>
          </td>
          <td>
            super long bill title that is used for testing to see how it changes the table. can it go
            longer who knows? testing one two three four five six seven eight nine ten eleven twelve
            thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty one twenty two twenty three
            twenty four twenty five twenty six twenty seven twenty eight twenty nine thirty thirty one thirty two
            thirty three thirty four thirty five thirty six thirty seven thirty eight thirty nine forty
            forty one forty two forty three forty four forty five forty six forty seven forty eight forty nine fifty
            fifty one fifty two fifty three fifty four fifty five fifty six fifty seven fifty eight fifty nine sixty
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
            <a href="#" className="">Link</a>
          </td>
        </tr>
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
);

export default TestimonyList;
