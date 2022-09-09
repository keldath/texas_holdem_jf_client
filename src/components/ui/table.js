import React, { useState } from 'react'

import { useCardsUpdateContext, useCardsContext } from '../hoc/context'
import Community from './tableComponents/community'
import Player from './tableComponents/player'
import BestHand from './tableComponents/bestHand';
import BackDrop from './backdrop'

import styles from '../../css/App.module.css';

function Table(props) {

    const updateCards = useCardsUpdateContext()
    const cards = useCardsContext()
    const [toggleButtons, setToggleeButtons] = useState({c: false, p: true, b: true})

    const state = {
        toggleButtons, 
        setToggleeButtons,
        updateCards
    }
    // send the cards them selfs to the components
    return (
        <div className={styles.App}>

            <Community {...state} cards={cards}/>
            <BackDrop {...cards} />
            <Player {...state} cards={cards}/>
            <BestHand {...state}/>
        </div>
    )
}

export default Table
