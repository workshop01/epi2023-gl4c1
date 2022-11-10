import React from 'react'

export const FeedbackList = ({ list }) => {
    return (
        <div>

            {
                list.map((feedback, index) => {
                    return (
                        <div className='card' key={index} >

                            <button className='close'>
                                x
                            </button>
                            <button className='edit'>
                                E
                            </button>
                            <h3 className='num-display'>
                                {feedback.rating}
                            </h3>
                            <p> {feedback.text} </p>
                        </div>
                    )
                })
            }


        </div>
    )
}
