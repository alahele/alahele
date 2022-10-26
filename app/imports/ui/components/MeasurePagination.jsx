import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Measures } from '../../api/measure/MeasureCollection';
import MeasuresForPagination from './MeasuresForPagination';
import Pagination2 from './Pagination2';

const MeasurePagination = () => {

  const [measure, setMeasures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [measuresPerPage, setMeasuresPerPage] = useState(10);

  const { measures } = useTracker(() => {
    const measureItems = Measures.find({}).fetch();
    return {
      measures: measureItems,
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMeasures(measures);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(measure);

  const indexOfLast = currentPage * measuresPerPage;
  const indexOfFirst = indexOfLast - measuresPerPage;
  // eslint-disable-next-line no-shadow
  const currentPosts = (measure) => {
    // eslint-disable-next-line no-shadow
    let currentPosts = 0;
    currentPosts = measure.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div className="App">
      <MeasuresForPagination measures={currentPosts(measure)} loading={loading} />
      <Pagination2
        measuresPerPage={measuresPerPage}
        totalMeasures={measures.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

MeasurePagination.propTypes = {
  measure: PropTypes.shape({
    year: PropTypes.number,
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    code: PropTypes.string,
    measureTitle: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default MeasurePagination;
