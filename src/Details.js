import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Details = () => {
    const {id , category} = useParams()
   const navigate = useNavigate()
    /* const params = useParams()
    const id = params.id */

    const redirect = (e)=>{
        e.preventDefault();

        if(category == 'feedback'){
            navigate('/feedback')
        }else{
            navigate('/login')
        }
    }
  return (
    <div>Details {category} {id}
    <button onClick={redirect}>retour</button>
    </div>
  )
}
