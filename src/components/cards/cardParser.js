import React from 'react'

import Card from 'react-free-playing-cards/lib/TcN'
import win_card from './wincard.module.css'


export function CardGen (cards, winning_hand) {
    console.log(cards)
    return cards.map((item, idx)=> {
        let winHand = win_card?.notwinning
        if (winning_hand !== undefined && winning_hand !== '') {
            if (winning_hand[0].includes(item)) {
                winHand = win_card.borderwin
            }
        }
        
        return(<div key={item} className={winHand}>
                <Card key={item} card={item} deckType='basic' height='20vh' front />
               </div>
        )
     })
}

