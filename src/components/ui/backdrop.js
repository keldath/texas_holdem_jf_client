import React from 'react'
import styles from '../../css/backdrop.module.css'

export default function BackDrop(props) {

    console.log(props)
    let backdtop = null
    let winHands = ''
    if (props?.winning_hand !== undefined ) {
        winHands = props.winning_hand
        console.log(winHands)
        if (winHands[0].length > 0) {
            backdtop = <span className={styles.backdrop}>The Best Hand is: {winHands[1]}</span>
        }
    }

    return (
        <>
            {backdtop}
        </>
    )
}