import React from 'react'
import PropTypes from 'prop-types';

import Card from 'react-free-playing-cards/lib/TcN'
import styles from '../../css/cardType.module.css'


export function CardGen (cards, winning_hand) {
    
    return cards.map((item, idx)=> {
        let cardClassing = styles.notwinning
        // will check if a card is a part of a winning hand and mark it with css
        if (winning_hand !== undefined && winning_hand !== '') {
            if (winning_hand[0].includes(item)) {
                cardClassing = styles.borderwin
            }
        }
        
        return(<div key={item} className={cardClassing}>
                <Card key={item} card={item} deckType='basic' height='20vh' front />
               </div>
        )
     }) 
}

CardGen.PropTypes = {
    cards: PropTypes.array.isRequired,
    winning_hand: PropTypes.array.isRequired
}

