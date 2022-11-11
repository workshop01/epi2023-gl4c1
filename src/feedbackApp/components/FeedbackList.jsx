import React from 'react'

export const FeedbackList = ({ list ,deleteFeedback , edit}) => {
    return (
        <div>

            {
                list.map((feedback, index) => {
                    return (
                        <div className='card' key={index} >

                            <button className='close' onClick={()=>deleteFeedback(feedback.id)}>
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
