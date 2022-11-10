import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Form, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { Measures } from '../../api/measure/MeasureCollection';
import LoadingSpinner from './LoadingSpinner';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const { ready, measures } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Measures.subscribeMeasures();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const measuresItems = Measures.find({}, { sort: { name: 1 } }).fetch();
    return {
      measures: measuresItems,
      ready: rdy,
    };
  }, []);

  if (search === '') {
    return <input className="inputSearch" placeholder="Search Title / Code" type="text" value={search} onChange={onChange} />;
  }

  const filterTitle = measures.filter((p) => p.measureTitle.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  const filterCode = measures.filter((p) => p.code.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  const filterDescription = measures.filter((p) => p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  return (ready ? (
    <Container>
      <Form className="d-flex my-3" id={COMPONENT_IDS.SEARCH_BAR}>
        <input className="inputSearch" placeholder="Search Title / Code" type="text" value={search} onChange={onChange} />
      </Form>
      <Card>
        {filterTitle.map(measure => (
          <span> {measure.measureTitle} {measure.code}
            <li className="search-detail"> {measure.description} <Link id={COMPONENT_IDS.INDIVIDUAL_BILL_BUTTON} to={`/individualbill/${measure._id}`}>View</Link> </li>
          </span>
        ))}
        {filterCode.map(measure => (
          <span> {measure.measureTitle} {measure.code}
            <li className="search-detail"> {measure.description} <Link id={COMPONENT_IDS.INDIVIDUAL_BILL_BUTTON} to={`/individualbill/${measure._id}`}>View</Link> </li>
          </span>
        ))}
        {filterDescription.map(measure => (
          <span> {measure.measureTitle} {measure.code}
            <li className="search-detail"> {measure.description} <Link id={COMPONENT_IDS.INDIVIDUAL_BILL_BUTTON} to={`/individualbill/${measure._id}`}>View</Link> </li>
          </span>
        ))}
      </Card>
    </Container>
  ) : <LoadingSpinner message="Loading Stuff" />);
};

export default SearchBar;
