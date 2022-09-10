import React from 'react'

import { useCardsContext } from '../hoc/context'

import styles from '../../css/layout.module.css'

export default function BackDrop(props) {

    const cards = useCardsContext()

    let handSummary = ''
    let winHands = ''
    if (cards.winningHand.length > 0 ) {
        winHands = cards.winningHand
        if (winHands[0].length > 0) {
            handSummary = `The Best Hand is: ${winHands[1]}`
        }
    }

    return (
        <>
            <span className={styles.mid_bar}>{handSummary}</span>
        </>
    )
}

