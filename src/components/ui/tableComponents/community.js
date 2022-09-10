import React , { useEffect }from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import { useCardsUpdateContext, useCardsContext, static_state } from '../../hoc/context'

import CardParser from '../../cards/cardParser'
import layout from '../../../css/layout.module.css';
import card from '../../../css/cards.module.css'
import buttons from '../../../css/buttons.module.css';


export default function Community(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons

    const updateCards = useCardsUpdateContext()
    const cards = useCardsContext()

    const handleCommunity = async () => {
        let { data } = await axios('http://localhost:8080/deal_community', {params:{
            data: {
              cards_dealt: cards.cardsDealt,
              cards_to_deal: cards.communityCount
            },
        }});
        //new game - reset all
        updateCards({...static_state,
            community: data, 
            cardsDealt: cards.hand.concat(data),
        })

        setToggleeButtons({...toggleButtons, 
                            communityToggle: !toggleButtons.communityToggle, 
                            playerToggle: !toggleButtons.playerToggle}) 
    }
   
    useEffect(() => {
        console.log('rendering community cards')
    }, [cards.community]);

    const isCommunityExists = cards.community.length > 0

    return (
        <>
          <div className={`${layout._container} ${layout.top}`}>
                <div className={`${layout.drawContainer}`}>
                    {isCommunityExists ? <CardParser cards={cards.community} winningHand={cards.winningHand} /> : null}
                </div>
                <button className={`${buttons.community_button}`} disabled={toggleButtons.communityToggle}
                                onClick={handleCommunity}>Deal Community</button>  
             </div>  
        </>
    )
}

Community.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired
}

