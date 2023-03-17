// import React, {useState} from 'react'
import './signUp.css'



export default function SignUp(props) {

  return (
    <>
    
      <div className='outer-container'>
        <div className="main-container">

          <h1>Welcome!</h1>
          <p className='grey'>Create a new Account</p>

          <div className="input-field">
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" placeholder='Shivam' />

            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" placeholder='Raj' />

            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder='username@gmail.com' />

            <label className='grey' htmlFor="">Password</label>
            <input type="password" name="pass" placeholder='*****' />

            <label className='grey' htmlFor="">Confirm Password</label>
            <input type="password" name="ConfirmPass" placeholder='*****' />
          </div>

          <button className='loginbtn'>Sign Up</button>

          <div className="divide">
            <hr />
            <p className='grey'>or</p>
            <hr />
          </div>
          <div className="link">
            <button className='grey'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOAZphgekT0e06wtwTx9-B_ZeX_ymipCj8EKS2vOUYbx7NeTu93hJF4gnWyKpqdAVAuk&usqp=CA " alt="" /><span> Continue with Google</span></button>
            <button className='grey'><img src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png" alt="" /> <span>Continue with Facebook</span></button>
          </div>
          <div className="signup">
            <p className='grey'> Already have an account? 
              <span onClick={props.click}>Login</span> 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
