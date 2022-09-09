import React from 'react'
import styles from '../../css/backdrop.module.css'

export default function BackDrop(props) {
    console.log('aaa')
    let handSummary = ''
    let winHands = ''
    if (props?.winning_hand !== undefined ) {
        winHands = props.winning_hand
        if (winHands[0].length > 0) {
            handSummary = `The Best Hand is: ${winHands[1]}`
        }
    }

    return (
        <>
            <span className={styles.backdrop}>{handSummary}</span>
        </>
    )
}