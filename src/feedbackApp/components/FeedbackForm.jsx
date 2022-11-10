import React from 'react'
import { useState } from 'react'

export const FeedbackForm = ({send}) => {
    /* définition d'une variable de type state 
    pour la récupération  du contenu du formulaire dans un seul objet*/
    const [newFeed, setNewFeed] = useState({
        text: '', rating: 0
    })
    const handleValueClick = (name, value) => {
        setNewFeed({ ...newFeed, [name]: value })
    }
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (

        <div className='card'>
            <h2>Leave your feedback</h2>

            <form>
                <ul className='rating'>

                    {values.map((nb) => {
                        return (
                            <li key={nb}>
                                <input type="radio" name="rating" value={nb} id={nb}
                                    onClick={(e) => handleValueClick('rating', e.target.value)}
                                />
                                <label htmlFor={nb}>{nb}</label>
                            </li>
                        )
                    })}



                </ul>
                <div className='input-group'>
                    <input  onChange={(e) => handleValueClick('text', e.target.value)}></input>
                    <button className="btn btn-secondary" onClick={(e)=>send(e , newFeed)}>send</button>
                </div>
            </form>
        </div>
    )
}
