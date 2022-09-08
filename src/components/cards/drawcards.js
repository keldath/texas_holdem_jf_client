import React from 'react'

import { useCardsContext } from '../hoc/context'
import { CardGen } from './cardParser'
import cards_styles from './cards.module.css'


export function Drawcommu(props) {

    const cards = useCardsContext()
    
    const drawCommCards = () => {
        if (cards === null || cards?.comm_cards  === undefined
            ) {
            return null
        }
         else {
            let comm_cards = cards.comm_cards.toString().split(',')
            return CardGen(comm_cards, cards.winning_hand)
        }
    }

    return (
        <div className={`${cards_styles.drawContainer} ${cards_styles.flopBox}`}>
            {drawCommCards()}
       </div>
    )
}

export function DrawPlayer(props) {

    const cards = useCardsContext()

    const drawPocketCards = () => {

        if (cards === null || cards?.player_hand === undefined) {
            return null
        }
        else if(cards.player_hand.length === 0 ) {
            return null
        }
         else {
            let player_hand = cards.player_hand.toString().split(',')
            return CardGen(player_hand, cards.winning_hand)
        }
    }

    return (
        <div className={`${cards_styles.drawContainer} ${cards_styles.pocketBox}`}>
            {drawPocketCards()}
       </div>
    )
}

