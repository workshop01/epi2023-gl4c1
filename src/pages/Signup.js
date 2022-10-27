import React, { useState } from 'react'
import './signup.css'
export const Signup = () => {
    const [formValues , setFormValues] = useState({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        confirmPassword : '',
        address : ''

    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formValues)
    }

    const handleValueChange = (e , prop)=>{
      //  console.log(e.target.value)
        setFormValues({...formValues , [prop] : e.target.value})
        //console.log(formValues)
    }
    return ( 
        <div>
            <div className='row'>
                <div className='col-md-4 offset-md-4 card'>
                    <form onSubmit={handleSubmit}>
                        <h2 style={{ textAlign: 'center' }}> Sign up</h2>
                        <div className='form-group'>
                            <label>First Name:</label>
                            <input className='form-control' required  onChange={(e)=>handleValueChange(e,'firstname')}/>
                            <small>Firstname required</small>
                        </div>

                        <div className='form-group'>
                            <label>Last Name:</label>
                            <input className='form-control'   onChange={(e)=>handleValueChange(e,'lastname')} />
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input className='form-control' type="email" />
                        </div>

                        <div className='form-group'>
                            <label>Password:</label>
                            <input    onChange={(e)=>handleValueChange(e,'password')} className='form-control' type="password" />
                        </div>

                        <div className='form-group'>
                            <label>Confirm Password:</label>
                            <input className='form-control' type="password" />
                        </div>
                        <div className='form-group'>
                            <label>Address:</label>
                            <input className='form-control' />
                        </div>
                        <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
