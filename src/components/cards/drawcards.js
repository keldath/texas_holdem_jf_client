import React from 'react'

import { useCardsContext } from '../hoc/context'

import cards_styles from './cards.module.css'
import win_card from './wincard.module.css'

function cardGen(cards, Winning_hand) {
    let cards_sty = ''
    return cards.map((item, idx)=> {
        cards_sty = `${cards_styles.card} ${cards_styles.front }`
        if (Winning_hand !== '' ) {
            if (Winning_hand.toString().split(',').includes(item)) {
                cards_sty += ' ' + win_card.borderwin
            }
        }
        return  <div key={item} className={cards_sty}>{item}</div> 
     } )
}


export function Drawcommu(props) {

    const cards = useCardsContext()
    
    const drawCards = () => {
        if (cards === null || cards?.comm_cards  === undefined
            ) {
            return null
        }
         else {
            console.log(cards)
            let comm_cards = cards.comm_cards.toString().split(',')
            return cardGen(comm_cards, cards.Winning_hand)
        }
    }

    return (
        <>
            {drawCards()}
        </>
    )
}
export function DrawPlayer(props) {

    const cards = useCardsContext()

    const drawCards = () => {

        if (cards === null || cards?.player_hand === undefined) {
            return null
        }
        else if(cards.player_hand.length === 0 ) {
            return null
        }
         else {
            let player_hand = cards.player_hand.toString().split(',')
            return cardGen(player_hand, cards.Winning_hand)
        }
    }

    return (
        <>
            {drawCards()}
        </>
    )
}

