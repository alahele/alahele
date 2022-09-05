import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Table, Form, Button, Alert, Nav } from 'react-bootstrap';
//import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Bills = () => {
  return (
      <Container>
        <div>
          <input type="text" placeholder="Search..."/>
          <Button className="search_btn" size="sm">
            go
          </Button>
        </div>
        <Table responsive bordered hover>
          <thead>
          <tr>
            <th>Bill #</th>
            <th>Bill / Resolution</th>
            <th>Office</th>
            <th>Status</th>
            <th>Action</th>
            <th>Hearing Date</th>
            <th>Hearing Type</th>
            <th>Act #fdfsfs</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>HB433</td>
            <td>
              super long bill title that is used for testing to see how it changes the table. can it go
              longer who knows? testing one two three four five six seven eight nine ten eleven twelve
              thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty one twenty two twenty three
              twenty four twenty five twenty six twenty seven twenty eight twenty nine thirty thirty one thirty two
              thirty three thirty four thirty five thirty six thirty seven thirty eight thirty nine forty
              forty one forty two forty three forty four forty five forty six forty seven forty eight forty nine fifty
              fifty one fifty two fifty three fifty four fifty five fifty six fifty seven fifty eight fifty nine sixty
            </td>
            <td>OFO, OITS</td>
            <td>Passed/Adopted</td>
            <td>Testimony</td>
            <td>03/17/2022</td>
            <td>Hearing</td>
            <td>233</td>
          </tr>

          <tr>
            <td>data</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>data {index}</td>
            ))}
          </tr>

          <tr>
            <td>data</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>data {index}</td>
            ))}
          </tr>

          <tr>
            <td>data</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>data {index}</td>
            ))}
          </tr>

          <tr>
            <td>data</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>data {index}</td>
            ))}
          </tr>

          <tr>
            <td>data</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>data {index}</td>
            ))}
          </tr>

          <tr>
            <td>data</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>data {index}</td>
            ))}
          </tr>

          </tbody>
        </Table>

      </Container>

  );
};

export default Bills;
