import React from 'react'
import { useContext } from 'react'
import { FeedbackContext } from '../../contexts/FeedbackContext'

export const Stats = () => {
   
    const {ch, list , sort , filter} = useContext(FeedbackContext)
    const somme = list.reduce((acc, element) => acc + +element.rating, 0)
    return (
        <>
            <div className='feedback-stats'>
                <h4>Feedbacks {ch} : {list.length}</h4>
                <h4>average : {list.length > 0 ? (somme / list.length).toFixed(2) : 0}</h4>
            </div>
            <div className='feedback-stats'>
                <h4><a onClick={sort}>sort</a></h4>
                <h4><input onKeyUp={(evt)=>filter(evt.target.value)}></input></h4>
            </div>)
        </>
    )
}
