import React from 'react';
import PropTypes from 'prop-types';

const UsersPagination = ({ pages, setCurrentPage, currentPage }) => (
  <div className="pagination users__pagination">
    <ul className="pagination__list">
      <li className="pagination__item">
        <button
          type="button"
          className="pagination__link--first_last"
          onClick={() => setCurrentPage(1)}
        >
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2L3 14L15 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2L3 14L15 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </li>

      <li>
        <button
          type="button"
          className="pagination__arrow arrow-left"
          onClick={() => (currentPage > 1
            ? setCurrentPage(currentPage - 1)
            : currentPage)}
        >
          {currentPage < 4 ? (
            <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 2L3 14L15 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 2L3 14L15 26" stroke="#3A80BA" strokeWidth="4" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </li>

      {pages.map((page) => (
        <li
          key={page}
          className={((page <= currentPage + 2 && page >= currentPage - 2)
              || (currentPage < 3 && page <= 5))
            ? ''
            : 'invisible'}
        >
          <button
            type="button"
            className={page === currentPage
              ? 'pagination__link--active'
              : 'pagination__link'}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          className="pagination__arrow arrow-right"
          onClick={() => (currentPage < pages[pages.length - 1]
            ? setCurrentPage(currentPage + 1)
            : currentPage)}
        >
          {currentPage < pages[pages.length - 3]
            ? (
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L14 14L2 26" stroke="#3A80BA" strokeWidth="4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L14 14L2 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
              </svg>
            )}


        </button>
      </li>

      <li>
        <button
          type="button"
          onClick={() => setCurrentPage(pages[pages.length - 1])}
          className="pagination__link--first_last"
        >
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14L2 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L14 14L2 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
);

UsersPagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number
};

UsersPagination.defaultProps = {
  currentPage: ''
};

export default UsersPagination;
