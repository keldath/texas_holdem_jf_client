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

export default function HocContext({ children }) {

    // react context as a hoc for a global state and setState
    const [cards, setCards] = useState({})
    
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
        cards_left: PropTypes.number, 
        deck: PropTypes.array,
        updated_deck: PropTypes.array,
        comm_cards: PropTypes.array,
        player_hand: PropTypes.array,
        winning_hand: PropTypes.array
    })
    
    return (
        <CardsContext.Provider value={cards}>
            <CardsUpdateContext.Provider value={updateCards}>
                    {children}  
            </CardsUpdateContext.Provider>
        </CardsContext.Provider>
    )
}
