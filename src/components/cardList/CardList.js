import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';

import Card from '../Card/Card';
import './CardList.css';
import queryString from 'query-string';

const CardList = ({ location }) => {

    const cards = useSelector(state => state.cards);
    const cardsPerPage = useSelector(state => state.cardsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        if (!location.search) {
            setCurrentPage(1);
        } else {
            const data = queryString.parse(location.search);
            setCurrentPage(data.page);
        }
    }, [ location ]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    if (!cards) {
        return (
            <h3>No Cards on this page</h3>
        )
    } else {
        return(
            <div>
                <div className="card-list">
                    {currentCards.map(card => (
                    <Card
                        key = {card.id}
                        title = {card.title}
                        desc = {card.desc}
                        image = {card.image}
                    />
                    ))}
                </div>
                <Pagination 
                    cardsPerPage={ cardsPerPage } 
                    totalCards={ cards.length }
                    activePage={ currentPage }/>
            </div>
        );
    }
}

export default CardList;