import React from 'react';
import { Container } from 'react-bootstrap';
import { MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const HearingList = () => (
  <Container id={PAGE_IDS.HEARING_LIST}>
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Room</th>
          <th scope="col">Hearing#</th>
          <th scope="col">Bill/Resolution</th>
          <th scope="col">Committee</th>
          <th scope="col">Branch</th>
          <th scope="col">Lead Office</th>
          <th scope="col">Testifier</th>
          <th scope="col">Committee Representing</th>
          <th scope="col">Comments</th>
          <th scope="col">View Hearing</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p className="fw-normal mb-1">09/09/2022</p>
          </td>
          <td>
            <p className="fw-normal mb-1">02:45 PM</p>
          </td>
          <td>
            <p className="fw-normal mb-1">229</p>
          </td>
          <td>SCR 010</td>
          <td>
            REQUESTING THE DEPARTMENT OF EDUCATION TO EXPLORE THE POSSIBILITY OF UPDATING
          </td>
          <td>
            Senate Education
          </td>
          <td>
            ESB-SNS
          </td>
          <td>
            OSSS, DEPUTY, BOE
          </td>
          <td>
            David Ige
          </td>
          <td>
            EDU
          </td>
          <td>
            Interesting Comments
          </td>
          <td>
            <a href="/hearing" type="button" className="btn btn-primary btn-sm">View</a>
          </td>
        </tr>
        <tr>
          <td>
            <p className="fw-normal mb-1">09/09/2022</p>
          </td>
          <td>
            <p className="fw-normal mb-1">02:45 PM</p>
          </td>
          <td>
            <p className="fw-normal mb-1">229</p>
          </td>
          <td>SCR 010</td>
          <td>
            REQUESTING THE DEPARTMENT OF EDUCATION TO EXPLORE THE POSSIBILITY OF UPDATING
          </td>
          <td>
            Senate Education
          </td>
          <td>
            ESB-SNS
          </td>
          <td>
            OSSS, DEPUTY, BOE
          </td>
          <td>
            David Ige
          </td>
          <td>
            EDU
          </td>
          <td>
            Interesting Comments
          </td>
          <td>
            <a href="/hearing" type="button" className="btn btn-primary btn-sm">View</a>
          </td>
        </tr>
        <tr>
          <td>
            <p className="fw-normal mb-1">09/09/2022</p>
          </td>
          <td>
            <p className="fw-normal mb-1">02:45 PM</p>
          </td>
          <td>
            <p className="fw-normal mb-1">229</p>
          </td>
          <td>SCR 010</td>
          <td>
            REQUESTING THE DEPARTMENT OF EDUCATION TO EXPLORE THE POSSIBILITY OF UPDATING
          </td>
          <td>
            Senate Education
          </td>
          <td>
            ESB-SNS
          </td>
          <td>
            OSSS, DEPUTY, BOE
          </td>
          <td>
            David Ige
          </td>
          <td>
            EDU
          </td>
          <td>
            Interesting Comments
          </td>
          <td>
            <a href="/hearing" type="button" className="btn btn-primary btn-sm">View</a>
          </td>
        </tr>
        <tr>
          <td>
            <p className="fw-normal mb-1">09/09/2022</p>
          </td>
          <td>
            <p className="fw-normal mb-1">02:45 PM</p>
          </td>
          <td>
            <p className="fw-normal mb-1">229</p>
          </td>
          <td>SCR 010</td>
          <td>
            REQUESTING THE DEPARTMENT OF EDUCATION TO EXPLORE THE POSSIBILITY OF UPDATING
          </td>
          <td>
            Senate Education
          </td>
          <td>
            ESB-SNS
          </td>
          <td>
            OSSS, DEPUTY, BOE
          </td>
          <td>
            David Ige
          </td>
          <td>
            EDU
          </td>
          <td>
            Interesting Comments
          </td>
          <td>
            <a href="/hearing" type="button" className="btn btn-primary btn-sm">View</a>
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

export default HearingList;
