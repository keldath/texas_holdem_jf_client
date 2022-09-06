import React, { useState, useContext } from 'react';

const CardsContext = React.createContext();
const CardsUpdateContext = React.createContext();

export function useCardsContext() {
    return useContext(CardsContext)
}

export function useCardsUpdateContext() {
    return useContext(CardsUpdateContext)
}

export default function HocContext({ children }) {

    const [cards, setCards] = useState(null)
    
    function updateCards(changes) {
         setCards(() => changes)
    }
     
    return (
        <CardsContext.Provider value={cards}>
            <CardsUpdateContext.Provider value={updateCards}>
                    {children}  
            </CardsUpdateContext.Provider>
        </CardsContext.Provider>
    )
}

