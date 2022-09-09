
import React from 'react'
import PropTypes from 'prop-types';

import { useCardsContext } from '../hoc/context'
import { CardParser } from './cardParser'
import styles from '../../css/cards.module.css'


export default function CardMaker(props) {

    //will generate the appropriate card types if conditions passes.

    const cards = useCardsContext()
    
    // condition check the verify type and amount of cards to generate
    const isCardValid = cards !== null && typeof(cards) === 'object'
    let isCommCards, isPlayerCards = false
    if (isCardValid) {
        if (cards?.comm_cards !== undefined) {
            isCommCards = cards.comm_cards.length === props.cardCount
        }
        if (cards?.player_hand) {
            isPlayerCards = cards.player_hand.length === props.cardCount
        }
    }
  
    const drawCommCards = () => {

        let whichCardsToDraw = ''
        if (!isCardValid || (!isCommCards && !isPlayerCards)) {
            return null
        }
        else if (isCommCards && !isPlayerCards) {
            whichCardsToDraw = cards.comm_cards.toString().split(',')
        }
        else if (isPlayerCards && !isCommCards) {
            whichCardsToDraw = cards.player_hand.toString().split(',')
        }
        else {
            return null
        }

        return CardParser(whichCardsToDraw, cards.winning_hand)

    }

    return (
        <div className={`${styles.drawContainer} ${styles.flopBox}`}>
            {drawCommCards()}
       </div>
    )
}

CardMaker.propTypes  = {
    cardCount: PropTypes.number.isRequired
}