import React , { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import { useCardsUpdateContext, useCardsContext } from '../../hoc/context'

import CardParser from '../../cards/cardParser'
import layout from '../../../css/layout.module.css';
import buttons from '../../../css/buttons.module.css';


export default function Player(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons

    const updateCards = useCardsUpdateContext()
    const cards = useCardsContext()

    const handlePlayer = async () => {
        let { data } =  await axios('http://localhost:8080/deal_player', {params:{
            data: {
              cards_dealt: cards.cardsDealt,
              cards_to_deal: cards.handCount
            },
        }});

        updateCards({...cards, hand: data, 
            cardsDealt: data.concat(cards.community)}) 

        setToggleeButtons({...toggleButtons, playerToggle: !toggleButtons.playerToggle, 
            bestHandToggle: !toggleButtons.bestHandToggle}) 
    }

    useEffect(() => {
        console.log('rendering Player\'s Hand')
    }, [cards.hand]);

    
    const isHandExists = cards.hand.length > 0

    return (
        <>
          <div className={`${layout._container} ${layout.mid}`}>
                <div className={`${layout.pocket_container}`}>
                    {isHandExists ? <CardParser cards={cards.hand} winningHand={cards.winningHand} /> : null}
                </div>
                <button className={buttons.player_button} onClick={handlePlayer} disabled={toggleButtons.playerToggle}>Deal Pocket</button>
            </div>
        </>
    )
}

Player.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired
}

