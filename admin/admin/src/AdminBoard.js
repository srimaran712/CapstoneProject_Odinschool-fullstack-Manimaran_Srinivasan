import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SongCreationForm from './components/SongCreationForm'
import SongsList from './components/SongsList'
import AdminCreationForm from './components/AdminCreationForm'
import './staticfiles/dashboard.css'
const AdminBoard = () => {
  const [view,setView]=useState('newsongs');
  const navigate=useNavigate()
  const removeToken=(e)=>{
    e.preventDefault()
   try{
    localStorage.removeItem('token')
    navigate('/login')
   }catch(error) {
    console.log(error)
   }
  }
  return (
    <div className="main-container">
         <header className="navbar">
          <h2 className="nav-item logo">TuneFlow</h2>
          <div>
          <button className="btn btn-song" onClick={()=>{setView('newsongs')}}>Add New songs </button>
          <button className="btn btn-songlist" onClick={()=>{setView('showsongs')}}>Show songs </button>
          <button className="btn btn-addadmin" onClick={()=>{setView('newadmin')}}>Add New admin</button>
          </div>
          
<div className="sign-out-box">
  <button className="sign-out" onClick={removeToken}>Sign out</button>
</div>
         </header>

     {view==='newsongs'&& <SongCreationForm/>}
     {view==='showsongs'&& <SongsList/>}
     {view==='newadmin'&& <AdminCreationForm/>}

    </div>
  )
}

export default AdminBoard
