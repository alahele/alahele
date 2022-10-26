import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageUl = styled.ul`
  float: center;
  list-style: none;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  color: white;
  padding: 1px;
`;

const PageLi = styled.li`
  float: center;
  display: inline-block;
  font-size: 12px;
  font-weight: 200;
  text-align: center;
`;

const PageSpan = styled.span`
  float: center;
  color: black;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
  
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #D6AC60;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const Pagination2 = ({ measuresPerPage, totalMeasures, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMeasures / measuresPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} aria-current={number === currentPage ? 'page' : null} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

Pagination2.propTypes = {
  measuresPerPage: PropTypes.number.isRequired,
  totalMeasures: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination2;
