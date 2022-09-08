import React, { useState } from 'react'
import axios from "axios";

import { Drawcommu , DrawPlayer} from '../cards/drawcards'
import { useCardsUpdateContext } from '../hoc/context'

import Card from 'react-free-playing-cards/lib/TcN'
import Fab from '@mui/material/Fab';
import styles from '../../App.module.css';
import cont_styles from './table.module.css';
import win_card from '../cards/wincard.module.css'

function Table(props) {

    // const cards = useCardsContext()
    const updateCards = useCardsUpdateContext()
    const [toggleButtons, setToggleeButtons] = useState({c: false, p: false})

    const handleCommunity = async () => {
        if (!toggleButtons.c) {
            await axios('http://localhost:8080/create_deck'); // no need to save the response of this one
            let { data } = await axios('http://localhost:8080/deal_community');
            updateCards(data)
            setToggleeButtons({...toggleButtons, c: true, p: true}) 
        }
    }

    const handlePlayer = async () => {
        if (toggleButtons.p) {
            let { data } =  await axios('http://localhost:8080/deal_player');
            updateCards(data) 
            setToggleeButtons({...toggleButtons, p: false}) 
        }
    }

    const handleBestHand = async () => {
        if (!toggleButtons.p) {
            let { data } =  await axios('http://localhost:8080/best_hand');
            updateCards(data)
            setToggleeButtons({c: false, p: false}) 
        }
    }

    return (
        <div className={styles.App}>
            <div className={`${cont_styles._container} ${cont_styles.top}`}>
                <div className={cont_styles.card_container}>
                    <div className={win_card.notwinning} >
                        <Card card={'As'} deckType='basic' height="15vh" back className={'koko'} />
                    </div>
                    <Drawcommu/>
                </div>
                 <button className={`${cont_styles.btncomm} ${cont_styles.btncomm}`} variant="contained"
                    onClick={handleCommunity}>Deal Community</button>
            </div>
            <div className={`${cont_styles._container} ${cont_styles.mid}`}>
                <div className={`${cont_styles.card_container} ${cont_styles.pocket}`}>
                    <DrawPlayer/>
                </div>
                <button className={cont_styles.btnplayer} onClick={handlePlayer}>Deal Pocket</button>
            </div>
            <div className={`${cont_styles._container} ${cont_styles.bot}`}>
                <Fab variant="extended" onClick={handleBestHand}>
                         <span className={cont_styles.cardicons_b}>&spades;</span>
                         <span className={cont_styles.cardicons_r}>&diams;</span>
                         <span className={cont_styles.btnbot}>-Check the best hand-</span> 
                         <span className={cont_styles.cardicons_b}>&clubs;</span>
                         <span className={cont_styles.cardicons_r}>&hearts;</span>
                </Fab>
                {/* <button className={cont_styles.btnbest} onClick={handleBestHand}>Check best hand</button> */}
            </div>
        </div>
    )
}

export default Table
