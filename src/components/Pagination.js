import React from 'react'
import { Link } from 'react-router-dom';

export const Pagination = ({ matchesPerPage, matchesLength, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(matchesLength / matchesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>

            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <Link to='' onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
