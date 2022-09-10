import React, { useEffect } from 'react'

import { useCardsContext } from '../hoc/context'

import layout from '../../css/layout.module.css'
import card from '../../css/cards.module.css'

export default function Banner(props) {

    const cards = useCardsContext()
    let handLayout = ''
    let handSummary = ''
    let winHands = ''
    if (cards.winningHand.length > 0 ) {
        winHands = cards.winningHand
        if (winHands[0].length > 0) {
            
            handLayout = winHands[0].map((item, idx)=>{
                
                let span = null
                let seperator = idx === 0 ? <span>&nbsp;</span> : '-'
                switch (item[1]) {
                    case 's':
                        span = <><span>{seperator}</span><span className={card.cardicons_b_banner}>{item[0]}&spades;</span></>
                        break
                    case 'd':
                        span = <><span>{seperator}</span><span className={card.cardicons_r_banner}>{item[0]}&diams;</span></>
                        break
                    case 'c':
                        span = <><span>{seperator}</span><span className={card.cardicons_b_banner}>{item[0]}&clubs;</span></>
                        break
                    case 'h':
                        span = <><span>{seperator}</span><span className={card.cardicons_r_banner}>{item[0]}&hearts;</span></>
                        break
                    default:
                        break
                }
                return <span key={idx}>{span}</span>
            })
        handSummary = <span >The Best Hand is: {winHands[1]}! {handLayout}</span>
        }
    }

    useEffect(() => {
        return console.log('rendering Banner')
    }, [cards.winningHand]);

    return (
        <>
            <span className={layout.mid_bar}>{handSummary}</span>
        </>
    )
}

