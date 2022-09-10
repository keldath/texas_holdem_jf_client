import React from 'react'
import PropTypes from 'prop-types';

import { sortCards } from './cardsSort'
import Card from 'react-free-playing-cards/lib/TcN'
import styles from '../../css/cards.module.css'


export default function CardParser(props) {
    
    let cards = sortCards(props.cards)

    return cards.map((item, idx)=> {
        let cardClassing = styles.dummy_border
        // will check if a card is a part of a winning hand and mark it with css
        if (props.winningHand.length > 0) {
            if (props.winningHand[0].includes(item)) {
                cardClassing = styles.best_card_in_hand
            }
        }
         
        return(<div key={item} className={cardClassing}>
                <Card key={item} card={item} deckType='basic' height='100%' front />
               </div>
        )
     }) 
}

CardParser.propTypes = {
    cards: PropTypes.array.isRequired,
    winningHand: PropTypes.array.isRequired
}

