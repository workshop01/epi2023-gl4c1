import React, { useState } from 'react'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import './feedback.css'
export const FeedbackApp = () => {
    const [list , setList]=useState([])

    const send = (e , newFeed)=>{
        e.preventDefault();
        console.log("send work")
       /*  setList([{...newFeed , id:list.length+1} , ...list]) */
       /* si la liste est vide */
       setList([{...newFeed , id:  list.length > 0 ? list[0].id+1 : 1} , ...list])
    }

    const deleteFeedback = (id)=>{
            setList(list.filter((element)=>element.id !== id))
    }

    const [editedFeed , editFeed] = useState({})

    const edit = (feedback)=>{
        editFeed(feedback)
        console.log(editedFeed)
    }
    return (
        <>

            <Header></Header>

            <div className="container">
                <FeedbackForm send={send} editedFeed={editedFeed} ></FeedbackForm>
                <Stats></Stats>
                <FeedbackList list={list} deleteFeedback={deleteFeedback} edit={edit} />
            </div>
        </>
    )
}
