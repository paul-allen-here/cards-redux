import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

const Pagination = ({ cardsPerPage, totalCards, activePage }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pages">
            {pageNumbers.map(number => {
                let className = `page-item`;
                // eslint-disable-next-line
                if (number == activePage) {
                    className = `page-item-active`;
                    console.log(number, activePage);
                    console.log("here");
                }
                return (
                    <Link key={ number } className={ className }
                        to = {`/?page=${number}`}>
                        <a href = "!#" className='page-link'>
                            { number }
                        </a>
                    </Link>
                )
            }
        )}
        </nav>
    )
}

export default Pagination;