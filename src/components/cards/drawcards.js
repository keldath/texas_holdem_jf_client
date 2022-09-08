import React from 'react'

import { useCardsContext } from '../hoc/context'

import Card from 'react-free-playing-cards/lib/TcN'
import cards_styles from './cards.module.css'
import win_card from './wincard.module.css'

function cardGen(cards, Winning_hand) {
    return cards.map((item, idx)=> {
       
        let winHand = win_card.notwinning
        if (Winning_hand !== undefined && Winning_hand !== '') {
            console.log(Winning_hand)
            console.log(Winning_hand[0].includes(item))
            
            if (Winning_hand[0].includes(item)) {
                winHand = win_card.borderwin
                console.log(winHand)
        }
        }
       
        return(<div key={item} className={winHand}>
                <Card card={item} deckType='basic' height="15vh" front />
               </div>
        )
     })
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
        <div className={cards_styles.flop}>
            {drawCards()}
       </div>
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

