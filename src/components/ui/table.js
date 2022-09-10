import React, { useState } from 'react'

import Community from './tableComponents/community'
import Player from './tableComponents/player'
import BestHand from './tableComponents/bestHand';
import Banner from './banner'

import styles from '../../css/App.module.css';

function Table(props) {

    const [toggleButtons, setToggleeButtons] = useState({
        communityToggle: false, 
        playerToggle: true, 
        bestHandToggle: true
    })

    //no need to keep it on the context state
    const state = {
        toggleButtons, 
        setToggleeButtons
    }
    
    return (
        <div className={styles.App}>
            <Community {...state}/>
            <Banner />
            <Player {...state}/>
            <BestHand {...state}/>
        </div>
    )
}

export default Table
