import React from 'react'
import './staticfiles/dashboard.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AuthLogin = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
    try{
        const response=await  axios.post('http://localhost:8080/login',{email,password})
      
      const {token}=response.data
      if(!token){
        console.log('token is missing')
        navigate('/login')
      }
      localStorage.setItem('token',token)
      navigate('/')
    } catch(error){
        console.log(error)
    }
    }
  return (
    <div className="login-container">
        <div className="form-container">
           

        <h1 className="login-heading">TuneFlow</h1>

<form className="login-form" onSubmit={handleSubmit}>

<div className="login-box">
<label htmlFor='adminEmail'>Enter Email</label><br/>
<input type="text" className="login-input" value={email} onChange={(e)=>{
    setEmail(e.target.value)
}}/>
</div>

<div className="login-box">  
<label htmlFor='password'>Enter password</label><br/>
<input type="text" className="login-input" value={password} onChange={(e)=>{
    setPassword(e.target.value)
}}/>
</div>
<button type="submit" className="login-btn" >Login</button>
</form>




        </div>
   
      
    </div>
  )
}

export default AuthLogin
