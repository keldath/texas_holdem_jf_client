import React, { useState } from 'react'

import { useCardsUpdateContext } from '../hoc/context'
import Community from './tableComponents/community'
import Player from './tableComponents/player'
import BestHand from './tableComponents/bestHand';

import styles from '../../css/App.module.css';

function Table(props) {

    const updateCards = useCardsUpdateContext()
    const [toggleButtons, setToggleeButtons] = useState({c: false, p: true, b: true})

    let state = {
        toggleButtons: toggleButtons ,
        'setToggleeButtons': setToggleeButtons ,
        updateCards: updateCards
    }

    return (
        <div className={styles.App}>

            <Community {...state}/>
            <Player {...state}/>
            <BestHand {...state}/>

             {/* <div className={`${cont_styles.handPopup} ${cards?.winning_hand === '' ? 'hidded' : ''}`}>The Winning Hand is 
                    {cards?.winning_hand === '' ? '' : cards?.winning_hand[0]} with a {cards?.winning_hand === '' ? '' : cards?.winning_hand[1]}</div> */}
        </div>
    )
}

export default Table
