import React , { useEffect }from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import { useCardsUpdateContext, useCardsContext, static_state } from '../../hoc/context'

import CardParser from '../../cards/cardParser'
import layout from '../../../css/layout.module.css';
import buttons from '../../../css/buttons.module.css';


export default function Deal(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons

    const updateCards = useCardsUpdateContext()
    const cards = useCardsContext()

    const dealType = props.dealType ? cards.communityCount : cards.handCount
    const apiCall = props.dealType ? 'deal_community' : 'deal_player';

    const handleDeal = async () => {
        let { data } = await axios(`http://localhost:8080/${apiCall}`, {params:{
            data: {
              cards_dealt: cards.cardsDealt,
              cards_to_deal: dealType
            },
        }});
        //new game - reset all
        updateCards({...static_state,
            community: data, 
            cardsDealt: dealType ? data.concat(cards.community) : cards.hand.concat(data),
        })

        const buttonsStateCommunity = {
            communityToggle: !toggleButtons.communityToggle, 
            playerToggle: !toggleButtons.playerToggle
        }
        const buttonsStateHand = {
            playerToggle: !toggleButtons.playerToggle, 
            bestHandToggle: !toggleButtons.bestHandToggle
        }

        const buttonsState = dealType ? buttonsStateCommunity : buttonsStateHand

        setToggleeButtons({...toggleButtons, 
                            ...buttonsState
                        }) 
    }
   
    useEffect(() => {
        return console.log('rendering community cards')
    }, [cards.community, cards.hand]);

    const isCommunityExists = dealType ? cards.community.length > 0 : false
    const isPlayerExists = dealType ? false : cards.hand.length > 0
    const dealCards = isCommunityExists ? cards.community : (
        isPlayerExists ? cards.hand : 0
    )
    const buttonDesc = dealType ? 'Deal Community' : 'Deal Player'

    return (
        <>
          <div className={`${layout._container} ${layout.top}`}>
                <div className={`${layout.drawContainer}`}>
                    {
                        ((isCommunityExists || isPlayerExists) &&  dealCards !== 0)
                            ? <CardParser cards={dealCards} winningHand={cards.winningHand} /> 
                            : null
                    }
                </div>
                <button className={`${buttons.community_button}`} disabled={toggleButtons.communityToggle}
                                onClick={handleDeal}>{buttonDesc}</button>  
             </div>  
        </>
    )
}

Deal.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired
}

