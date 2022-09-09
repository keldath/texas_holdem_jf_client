import React , { useEffect }from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import Fab from '@mui/material/Fab';
import styles from '../../../css/table.module.css';

export default function BestHand(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons
    const updateCards = props.updateCards

    const handleBestHand = async () => {
        let { data } =  await axios('http://localhost:8080/best_hand');
        updateCards(data)
        setToggleeButtons({...toggleButtons, communityToggle: !toggleButtons.communityToggle, 
          bestHandToggle: !toggleButtons.bestHandToggle})
    }
    
    useEffect(() => {
      console.log('rendering best Hand')
    }, [props.toggleButtons.playerToggle, toggleButtons.communityToggle]);

    return (
        <>
          <div className={`${styles._container} ${styles.bot}`} >
                <Fab variant="extended" 
                      sx={{
                        color: 'white',
                        backgroundColor: 'initial',
                        backgroundImage: 'linear-gradient(#464d55, #25292e)'
                      }}
                        onClick={handleBestHand} disabled={toggleButtons.bestHandToggle}>
                         <span className={styles.cardicons_b}>&spades;</span>
                         <span className={styles.cardicons_r}>&diams;</span>
                         <span className={styles.best_hand_button}>-Check the best hand-</span> 
                         <span className={styles.cardicons_b}>&clubs;</span>
                         <span className={styles.cardicons_r}>&hearts;</span>
                </Fab>
             </div>
        </>
    )
}

BestHand.propTypes = {
    toggleButtons : PropTypes.object.isRequired,
    setToggleeButtons: PropTypes.func.isRequired,
    updateCards: PropTypes.func.isRequired,
}

