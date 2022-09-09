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
        let { data } =  await axios('http://localhost:8080/deal_player');
        updateCards(data) 
        setToggleeButtons({...toggleButtons, p: !toggleButtons.p, b: !toggleButtons.b}) 
    }

    useEffect(() => {
        console.log('rendering Player\'s Hand')
    }, [props.toggleButtons.c, props.toggleButtons.c]);

    return (
        <>
          <div className={`${styles._container} ${styles.mid}`}>
                <div className={`${styles.card_container} ${styles.pocket}`}>
                    <CardMaker cardCount={2}/>
                </div>
                <button className={styles.btnplayer} onClick={handlePlayer} disabled={toggleButtons.p}>Deal Pocket</button>
            </div>
        </>
    )
}

Player.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired,
    updateCards: PropTypes.func.isRequired,
}

