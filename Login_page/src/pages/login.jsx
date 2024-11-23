import React from 'react'
import '../style/login.css'
import {FaUser,FaLock} from 'react-icons/fa'

export default function Login() {
  return (
    <div className='login_page'>
      <div className="form">
        <div className="heading">
            <h2>Login Form</h2>
        </div>
        <form action="">
            <div className="input">
                <div className='logo'>
                    <FaUser style={{color:'white'}}/>
                </div>
                <input type="text" name="username" id="username" placeholder='Email or Phone'/>
            </div>
            <div className='input'>
                <div className='logo'>  
                    <FaLock style={{color:'white'}}/>
                </div>
                <input type="password" name="password" id="password" placeholder='Password'/>
            </div>
            <a href="">Forget password?</a>
            <button type="submit">Login</button>
        </form>
        <p>Not a member?<a href="">Signup now</a></p>
      </div>
    </div>
  )
}
