import React, { useState } from 'react'
import axios from "axios";

import CardMaker from '../cards/cardMaker'
import { useCardsUpdateContext , useCardsContext} from '../hoc/context'
import Community from './community'

import Fab from '@mui/material/Fab';
import styles from '../../css/App.module.css';
import cont_styles from '../../css/table.module.css';

function Table(props) {

    const cards = useCardsContext()
    const updateCards = useCardsUpdateContext()
    const [toggleButtons, setToggleeButtons] = useState({c: false, p: true, b: true})

    // const handleCommunity = async () => {
    //         await axios('http://localhost:8080/create_deck'); // no need to save the response of this one
    //         let { data } = await axios('http://localhost:8080/deal_community');
    //         updateCards(data)
    //         setToggleeButtons({...toggleButtons, c: !toggleButtons.c, p: !toggleButtons.p}) 
    // }

    const handlePlayer = async () => {
            let { data } =  await axios('http://localhost:8080/deal_player');
            updateCards(data) 
            setToggleeButtons({...toggleButtons, p: !toggleButtons.p, b: !toggleButtons.b}) 
    }

    const handleBestHand = async () => {
            let { data } =  await axios('http://localhost:8080/best_hand');
            updateCards(data)
            setToggleeButtons({...toggleButtons, c: !toggleButtons.c, b: !toggleButtons.b})
    }

    return (
        <div className={styles.App}>


            {/* <div className={`${cont_styles._container} ${cont_styles.top}`}>
                <div className={cont_styles.card_container}>
                    <CardMaker cardCount={5} />
                </div>
                <button className={`${cont_styles.btncomm} ${cont_styles.deck_txt}`} disabled={toggleButtons.c}
                                onClick={handleCommunity}>Deal Community</button>  
             </div> */}

            <Community toggleButtons={toggleButtons} setToggleeButtons={setToggleeButtons} updateCards={updateCards}/>

            <div className={`${cont_styles._container} ${cont_styles.mid}`}>
                <div className={`${cont_styles.card_container} ${cont_styles.pocket}`}>
                    <CardMaker cardCount={2}/>
                </div>
                <button className={cont_styles.btnplayer} onClick={handlePlayer} disabled={toggleButtons.p}>Deal Pocket</button>
            </div>
            <div className={`${cont_styles._container} ${cont_styles.bot}`} >
                <Fab variant="extended" 
                      sx={{
                        color: 'white',
                        backgroundColor: 'initial',
                        backgroundImage: 'linear-gradient(#464d55, #25292e)'
                      }}
                        onClick={handleBestHand} disabled={toggleButtons.b}>
                         <span className={cont_styles.cardicons_b}>&spades;</span>
                         <span className={cont_styles.cardicons_r}>&diams;</span>
                         <span className={cont_styles.btnbot}>-Check the best hand-</span> 
                         <span className={cont_styles.cardicons_b}>&clubs;</span>
                         <span className={cont_styles.cardicons_r}>&hearts;</span>
                </Fab>
             </div>
             {/* <div className={`${cont_styles.handPopup} ${cards?.winning_hand === '' ? 'hidded' : ''}`}>The Winning Hand is 
                    {cards?.winning_hand === '' ? '' : cards?.winning_hand[0]} with a {cards?.winning_hand === '' ? '' : cards?.winning_hand[1]}</div> */}
        </div>
    )
}

export default Table
