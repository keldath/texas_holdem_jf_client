import React , { useEffect }from 'react'
import PropTypes from 'prop-types'
import axios from "axios";

import Fab from '@mui/material/Fab';
import cont_styles from '../../../css/table.module.css';

export default function BestHand(props) {

    const toggleButtons= props.toggleButtons
    const setToggleeButtons = props.setToggleeButtons
    const updateCards = props.updateCards

    const handleBestHand = async () => {
        let { data } =  await axios('http://localhost:8080/best_hand');
        updateCards(data)
        setToggleeButtons({...toggleButtons, c: !toggleButtons.c, b: !toggleButtons.b})
    }

    useEffect(() => {
      console.log('rendering best Hand')
    }, [props.toggleButtons.p, toggleButtons.c]);

    return (
        <>
          <div className={`${cont_styles._container} ${cont_styles.bot}`} >
                <Fab variant="extended" 
                      sx={{
                        color: 'white',
                        backgroundColor: 'initial',
                        backgroundImage: 'linear-gradient(#464d55, #25292e)'
                      }}
                        onClick={handleBestHand} disabled={toggleButtons.b}>
                         <span className={cont_styles.cardicons_b}>&spades;</span>
                         <span className={cont_styles.cardicons_r}>&diams;</span>
                         <span className={cont_styles.btnbot}>-Check the best hand-</span> 
                         <span className={cont_styles.cardicons_b}>&clubs;</span>
                         <span className={cont_styles.cardicons_r}>&hearts;</span>
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

