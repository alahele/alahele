import React from 'react';
import { Container } from 'react-bootstrap';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBPagination, MDBPaginationLink, MDBPaginationItem } from 'mdb-react-ui-kit';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const TestimonyList = () => (
  <Container id={PAGE_IDS.TESTIMONY_LIST}>
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
            <MDBBadge color="success" pill>
              Approved
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
            <MDBBadge color="success" pill>
              Approved
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
