import React, { useState } from 'react'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import './feedback.css'
export const FeedbackApp = () => {
    const [list , setList]=useState([
        {text:'test' , rating:5}
    ])

    const send = (e , newFeed)=>{
        e.preventDefault();
        console.log("send work")
        setList([newFeed , ...list])
    }
    return (
        <>

            <Header></Header>

            <div className="container">
                <FeedbackForm send={send}></FeedbackForm>
                <Stats></Stats>
                <FeedbackList list={list} />
            </div>
        </>
    )
}
