import React from 'react'
import './register.scss'

const Register = () => {
    return (
        <div className='register-page'>
            <h1>Register Your Store</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputText" className="form-label">Enter Shopify Store Address:</label>
                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder='Shopify Store Address' />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Enter Email:</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter Email' />
                </div>
                <button type="button" className="btn btn-primary">Register</button>
                <button type="button" className="btn btn-primary">Go Back</button>
            </form>
        </div>
    )
}

export default Register
