import React from 'react'

import { useCardsContext } from '../hoc/context'

import cards_styles from './cards.module.css'


function cardGen(cards) {
    return cards.map((item, idx)=>{
        return <div key={item} className={`${cards_styles.card} ${cards_styles.front }`}>{item[0]}{item[1]}</div> 
    })
}


export function Drawcommu(props) {

    const cards = useCardsContext()

    const drawCards = () => {
        if (cards === null || cards?.comm_cards  === undefined) {
            return null
        }
         else {
            return cardGen(cards.comm_cards)
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
         else {
            return  cardGen(cards.player_hand)
        }
    }

    return (
        <>
            {drawCards()}
        </>
    )
}

