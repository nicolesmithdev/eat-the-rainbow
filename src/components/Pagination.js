import React from 'react';

const Pagination = ({currentPage, numResults, postsPerPage, onPageClick, resetPagination}) => {
    const pageNumbers = [];
        
    for (let i = 1; i <= Math.ceil(numResults / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav id="pagination">
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => onPageClick(number)} href="#" className={resetPagination === number ? 'active' : ''}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;