import React, { useState } from 'react'

import Community from './tableComponents/community'
import Player from './tableComponents/player'
import BestHand from './tableComponents/bestHand';
import BackDrop from './backdrop'

import styles from '../../css/App.module.css';

function Table(props) {

    const [toggleButtons, setToggleeButtons] = useState({
        communityToggle: false, 
        playerToggle: true, 
        bestHandToggle: true
    })

    const state = {
        toggleButtons, 
        setToggleeButtons
    }
    
    return (
        <div className={styles.App}>
            <Community {...state}/>
            <BackDrop />
            <Player {...state}/>
            <BestHand {...state}/>
        </div>
    )
}

export default Table
