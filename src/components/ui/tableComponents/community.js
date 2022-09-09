import React , { useEffect }from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import CardMaker from '../../cards/cardMaker'
import styles from '../../../css/table.module.css';


export default function Community(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons
    const updateCards = props.updateCards

    const handleCommunity = async () => {
        let { data } = await axios('http://localhost:8080/deal_community');
        updateCards(data)
        setToggleeButtons({...toggleButtons, 
                            communityToggle: !toggleButtons.communityToggle, 
                            playerToggle: !toggleButtons.playerToggle}) 
    }
   
    useEffect(() => {
        console.log('rendering community cards')
    }, [props.toggleButtons.bestHandToggle]);

    return (
        <>
          <div className={`${styles._container} ${styles.top}`}>
                <div className={styles.card_container}>
                    <CardMaker cardCount={5} />
                </div>
                <button className={`${styles.community_button}`} disabled={toggleButtons.communityToggle}
                                onClick={handleCommunity}>Deal Community</button>  
             </div>  
        </>
    )
}

Community.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired,
    updateCards: PropTypes.func.isRequired,
}

