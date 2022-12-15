import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FeedbackContext } from '../../contexts/FeedbackContext'

export const FeedbackForm = () => {
    const {send , editedFeed} = useContext(FeedbackContext)
    /* définition d'une variable de type state 
    pour la récupération  du contenu du formulaire dans un seul objet*/
    const [newFeed, setNewFeed] = useState({
       id : undefined, text: '', rating: 10
    })
    const handleValueClick = (name, value) => {
        setNewFeed({ ...newFeed, [name]: value })
    }
    console.log(editedFeed)
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(()=>{
        if(editedFeed._id){
            setNewFeed(editedFeed)
        }
    },[editedFeed])
    return (

        <div className='card'>
            <h2>Leave your feedback</h2>

            
            <form>
                <ul className='rating'>

                    {values.map((nb) => {
                        return (
                            <li key={nb}>
                                <input type="radio" name="rating" value={nb} id={nb}
                                checked={newFeed.rating == nb}
                                    onClick={(e) => handleValueClick('rating', e.target.value)}
                                />
                                <label htmlFor={nb}>{nb}</label>
                            </li>
                        )
                    })}



                </ul>
                <div className='input-group'>
                    <input  onChange={(e) => handleValueClick('text', e.target.value)}
                    value={newFeed.text}
                    ></input>
                    <button className="btn btn-secondary"
                     onClick={(e)=>{send(e , newFeed) ; setNewFeed({text : '' , rating:0}) }}>send</button>
                </div>
            </form>
        </div>
    )
}
