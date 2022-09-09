import React , { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import CardMaker from '../../cards/cardMaker'
import styles from '../../../css/table.module.css';


export default function Player(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons
    const updateCards = props.updateCards

    const handlePlayer = async () => {
        let { data } =  await axios('http://localhost:8080/deal_player', {params:{pa:1}});
        updateCards(data) 
        setToggleeButtons({...toggleButtons, playerToggle: !toggleButtons.playerToggle, 
            bestHandToggle: !toggleButtons.bestHandToggle}) 
    }

    useEffect(() => {
        console.log('rendering Player\'s Hand')
    }, [props.toggleButtons.communityToggle]);

    return (
        <>
          <div className={`${styles._container} ${styles.mid}`}>
                <div className={`${styles.card_container} ${styles.pocket}`}>
                    <CardMaker cardCount={2}/>
                </div>
                <button className={styles.player_button} onClick={handlePlayer} disabled={toggleButtons.playerToggle}>Deal Pocket</button>
            </div>
        </>
    )
}

Player.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired,
    updateCards: PropTypes.func.isRequired,
}

