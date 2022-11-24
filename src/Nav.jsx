import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = ({ children }) => {

    return (
        <div className='feedback-stats'>
            <h4>
                <Link to="/feedback"> Feedback App </Link>
            </h4>
            <h4>
                <NavLink to="/login" activeclassname="active"> Signin </NavLink>
            </h4>
        </div>
    )
}
