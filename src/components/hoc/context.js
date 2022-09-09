import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const CardsContext = React.createContext();
const CardsUpdateContext = React.createContext();

export function useCardsContext() {
    return useContext(CardsContext)
}

export function useCardsUpdateContext() {
    return useContext(CardsUpdateContext)
}

// this is to reset state on a new game
export const static_state = {
    cardsDealt: [], 
    hand: [],
    handCount: 2, 
    community: [],
    communityCount: 5,
    winningHand: []
}


export default function HocContext({ children }) {

    // react context as a hoc for a global state and setState
    const [cards, setCards] = useState({
       ...static_state
    })
    
    const updateCards = (changes) => {

        updateCards.PropTypes = {
            changes: PropTypes.object.isRequired
        }
        updateCards.PropTypes = {
            changes: apiResult
        }
        setCards(() => changes)
    }
     
    const apiResult = PropTypes.shape({
        cardsDealt: PropTypes.array, 
        hand: PropTypes.array,
        handCount: PropTypes.number, 
        community: PropTypes.array,
        communityCount: PropTypes.number,
        winningHand: PropTypes.array
    })
    
    return (
        <CardsContext.Provider value={cards}>
            <CardsUpdateContext.Provider value={updateCards}>
                    {children}  
            </CardsUpdateContext.Provider>
        </CardsContext.Provider>
    )
}
