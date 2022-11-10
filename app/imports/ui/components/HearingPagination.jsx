import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HearingsForPagination from './HearingsForPagination';
import Pagination2 from './Pagination2';

const HearingPagination = ({ sortedHearings }) => {

  const [hearing, setHearing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [hearingsPerPage, setHearingsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHearing(sortedHearings);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLast = currentPage * hearingsPerPage;
  const indexOfFirst = indexOfLast - hearingsPerPage;
  // eslint-disable-next-line no-shadow
  const currentPosts = (hearing) => {
    // eslint-disable-next-line no-shadow
    let currentPosts = 0;
    currentPosts = hearing.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div className="App">
      <HearingsForPagination hearings={currentPosts(sortedHearings)} loading={loading} />
      <Pagination2
        measuresPerPage={hearingsPerPage}
        totalMeasures={hearing.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

HearingPagination.propTypes = {
  sortedHearings: PropTypes.shape({
    measureType: PropTypes.string,
    measureNumber: PropTypes.number,
    datetime: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.string,
    notice: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default HearingPagination;
