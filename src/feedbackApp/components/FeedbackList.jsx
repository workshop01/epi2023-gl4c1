import React from 'react'
import { useContext } from 'react'
import { FeedbackContext } from '../../contexts/FeedbackContext'

export const FeedbackList = () => {
    const { list ,deleteFeedback , edit} = useContext(FeedbackContext)
    return (
        <div>

            {
                list.map((feedback, index) => {
                    return (
                        <div className='card' key={index} >

                            <button className='close' onClick={()=>deleteFeedback(feedback._id)}>
                                x
                            </button>
                            <button className='edit'  onClick={()=>edit(feedback)}>
                                E
                            </button>
                            <h3 className='num-display'>
                                {feedback.rating}
                            </h3>
                            <p> {feedback.text} {feedback.id} </p>
                        </div>
                    )
                })
            }


        </div>
    )
}
