import React from 'react'
import { BrowserRouter as Router, Link, NavLink, Route, Routes, } from 'react-router-dom';
import { Cv } from './cv/Cv';
import { Details } from './Details';
import { Event } from './Event';
import { FeedbackApp } from './feedbackApp/FeedbackApp';
import { Nav } from './Nav';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';


export const App = () => {
    /* 
Alt+shift+A : commentaires multiple
Alt+shift+F : Formatage du code
ctrl+espace : auto-complete
*/

    const title = "Bonjour"

    const btn_primary = (text) => {
        return <button style={{ background: 'blue', color: 'white' }}>{text}</button>
    }
    return (
        <div>
            
            <Router>
                {/*    <h1>{title}</h1>
                {btn_primary('Enregistrer')} */}
                {/*  <Cv></Cv> */}
                {/*  <Event></Event> */}
                {/* <Signin></Signin> */}
                {/* <Signup /> */}
                
                <Nav> </Nav>
               
                <Routes>
                    <Route exact path='/feedback' element={<FeedbackApp/>}></Route>
                    <Route exact path='/login' element={<Signin/>}></Route>
                    <Route exact path='/details/:id/:category' element={<Details/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
