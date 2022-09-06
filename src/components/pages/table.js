import React, { useState } from 'react'
import axios from "axios";

import { Drawcommu , DrawPlayer} from '../cards/drawcards'
import { useCardsUpdateContext, useCardsContext } from '../hoc/context'

import styles from '../../App.module.css';
import cont_styles from './table.module.css';
import cards_styles from '../cards/cards.module.css'

function Table(props) {

    const cards = useCardsContext()
    const updateCards = useCardsUpdateContext()
    const [togglePlayer, setTogglePlayer] = useState(true)

    const handleCommunity = async () => {
        await axios('http://localhost:8080/create_deck'); // no need to save the response of this one
        let { data } = await axios('http://localhost:8080/deal_community');
        updateCards(data)
        setTogglePlayer(!togglePlayer) 
    }

    const handlePlayer = async () => {
        if (!togglePlayer) {
            let { data } =  await axios('http://localhost:8080/deal_player');
            updateCards(data) 
            setTogglePlayer(!togglePlayer)
        }
    }

    const handleBestHand = async () => {
        if (!togglePlayer) {
            let { data } =  await axios('http://localhost:8080/best_hand');
            updateCards(data)
            console.log(cards)
        }
    }

    return (
        <div className={styles.App}>
            <div className={`${cont_styles._container} ${cont_styles.top}`}>
                <div className={cont_styles.card_container}>
                    <div className={`${cards_styles.card} ${cards_styles.back}
                                         ${cards_styles.deck}`}> Deck</div> 
                    <Drawcommu/>
                </div>
                 <button className={cont_styles.btncomm} onClick={handleCommunity}>Deal Community</button>
            </div>
            <div className={`${cont_styles._container} ${cont_styles.mid}`}>
                <div className={`${cont_styles.card_container} ${cont_styles.pocket}`}>
                    <DrawPlayer/>
                </div>
                <button className={cont_styles.btncomm} onClick={handlePlayer}>Deal Pocket</button>
            </div>
            <div className={`${cont_styles._container} ${cont_styles.bot}`}>
                <button className={cont_styles.btncomm} onClick={handleBestHand}>Check best hand</button>
            </div>
        </div>
    )
}

export default Table
