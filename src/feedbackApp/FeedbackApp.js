import React, { useState } from 'react'
import { FeedbackProvider } from '../contexts/FeedbackContext'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import './feedback.css'
export const FeedbackApp = () => {
    
    return (
        <>

            <FeedbackProvider>
                <Header></Header>

                <div className="container">
                    <FeedbackForm  ></FeedbackForm>
                    <Stats ></Stats>


                    <FeedbackList />
                </div>
            </FeedbackProvider>
        </>
    )
}
