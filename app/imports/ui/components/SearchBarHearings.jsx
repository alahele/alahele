import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Form, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { Hearings } from '../../api/hearing/HearingCollection';
import LoadingSpinner from './LoadingSpinner';

const SearchBarHearings = () => {
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const { ready, hearings } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Hearings.subscribeHearings();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const hearingItems = Hearings.find({}, { sort: { name: 1 } }).fetch();
    return {
      hearings: hearingItems,
      ready: rdy,
    };
  }, []);

  if (search === '') {
    return <input className="inputSearch" placeholder="Search Number / Description" type="text" value={search} onChange={onChange} />;
  }

  const filterNumber = hearings.filter((p) => p.measureNumber.toString().includes(search));
  const filterDescription = hearings.filter((p) => p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  return (ready ? (
    <Container>
      <Form className="d-flex my-3" id={COMPONENT_IDS.SEARCH_BAR_HEARINGS}>
        <input className="inputSearch" placeholder="Search Title / Code" type="text" value={search} onChange={onChange} />
      </Form>
      <Card>
        {filterNumber.map(hearing => (
          <span> {hearing.measureNumber}
            <li className="search-detail"> {hearing.description} <Link to={`/hearing/${hearing._id}`}>View</Link> </li>
          </span>
        ))}
        {filterDescription.map(hearing => (
          <span> {hearing.measureNumber}
            <li className="search-detail"> {hearing.description} <Link to={`/hearing/${hearing._id}`}>View</Link> </li>
          </span>
        ))}
      </Card>
    </Container>
  ) : <LoadingSpinner message="Loading Stuff" />);
};

export default SearchBarHearings;
