
export function sortCards(cards) {

    // this is a sorting function to present the hands sorted by suit and val
    // should have placed it in the python ....
    const strToVal = {
        'T': 10, 'J' : 11, 'Q': 12, 'K': 13, 'A': 14
    }
    const suitRank = {
        'c': 1, 'd': 2, 'h': 3, 's': 4
    }

    const converter = (val) =>{
        let value = val[0]
        value = strToVal[value] !== undefined ? strToVal[value] : value
        let suit = val[1]
        suit = suitRank[suit] !== undefined ? strToVal[suit] : suit
        return [value, suit]
    }
    
    cards.sort(function (a, b) {
        let a1 = converter(a)[0]
        let a2 = converter(a)[1]
        let b1 = converter(b)[0]
        let b2 = converter(b)[1]
        return a1 - b1 || a2 - b2;
    });
    return cards
}