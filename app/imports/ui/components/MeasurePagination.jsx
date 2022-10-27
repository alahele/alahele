import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MeasuresForPagination from './MeasuresForPagination';
import Pagination2 from './Pagination2';

const MeasurePagination = ({ sortedMeasures }) => {

  const [measure, setMeasures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [measuresPerPage, setMeasuresPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMeasures(sortedMeasures);
      setLoading(false);
    };
    fetchData();
  }, []);

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
      <MeasuresForPagination measures={currentPosts(sortedMeasures)} loading={loading} />
      <Pagination2
        measuresPerPage={measuresPerPage}
        totalMeasures={measure.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

MeasurePagination.propTypes = {
  sortedMeasures: PropTypes.shape({
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
