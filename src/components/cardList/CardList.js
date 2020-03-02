import React, { useEffect } from 'react';
import Card from '../card/Card';
import './CardList.css';
import queryString from 'query-string';

// <Card props = {{title: 'SemRush 101', desc: 'Default info'}}/>

const CardList = ({ props, location }) => {
    let { cards } = props;
    
    useEffect(() => {
        const data = queryString.parse(location);
        console.log(data);
    }, [ location ]);

    if (!cards) {
        return null
    } else {
        return(
            <div className="card-list">
                {cards.map(card => (
                <Card
                    key = {card.id}
                    props = {card}
                />
                ))}
            </div>
        );
    }
}

export default CardList;