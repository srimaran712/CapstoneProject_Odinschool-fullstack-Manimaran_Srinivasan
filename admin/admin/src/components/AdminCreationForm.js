import React from 'react'
import '../staticfiles/dashboard.css'
import {useState} from 'react'
import axios from 'axios'

const AdminCreationForm = () => {
  const[adminEmail,setAdminEmail]=useState('')
  const[adminPassword,setAdminPassword]=useState('')
  const[message,setMessage]=useState('')

  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
     const res= await axios.post('http://localhost:8080/admin',{adminEmail,adminPassword})
     setAdminEmail('')
     setAdminPassword('')
     setMessage(res.data.message)
     console.log(res.data.message)

     setTimeout(()=>{
      setMessage('')
     },3000)
     
    }catch (error){
      console.log(error, 'here is the error')
    }
    
  }
  return (
    <div className="main-container">
      <form className="user-form" onSubmit={handleSubmit}>

        <div className="boxes box-one">
          <label htmlFor='adminEmail'>Admin Email</label><br/>
          <input type="text" className="user-box" value={adminEmail} onChange={(e)=>setAdminEmail(e.target.value)}/>
        </div>
        
        <div className="boxes box-two">  
          <label htmlFor='password'>Create password</label><br/>
          <input type="text" className="user-box" value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)}/>
        </div>
        <button type="submit" className="add-admin-btn" >Add New Admin</button>
      </form>
      <p className="admin-success">{message}</p>
    </div>
  )
}

export default AdminCreationForm
