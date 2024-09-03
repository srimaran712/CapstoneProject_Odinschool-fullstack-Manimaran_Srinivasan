import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import '../staticfiles/admin.css'


const SongsList = () => {
  const [songs,setSongs]=useState([])
  const deleteSong=async(id)=>{
    try{
      const res= await axios.delete(`https://capstoneproject-odinschool-fullstack.onrender.com/songs/${id}`)
      console.log(res.data.message)
    }catch(error){
      console.log(error)
    }
  }

  const fetchSongs=async ()=>{
   try{
    const response= await axios.get('https://capstoneproject-odinschool-fullstack.onrender.com/songs')
    
    console.log(response.data.Songs)
    setSongs(response.data.Songs)
   }catch (error){
    console.log(error)
   }
  }

  useEffect(()=>{
    fetchSongs()

  },[])
  return (
    <div className="list-container">
      
      <ul className="list-items">

         {songs.map((song)=>{
          return(
            <li className="list-item" key={song._id}>
            <div><img src={song.image} style={{width:"200px",height:"200px"}} alt={song.title} /></div>  
             <div className="content-box">
             <h2 className="song-title">{song.title}</h2>
              <h3 className="movie-name">{song.movie}</h3>
              <h4 className="artist">{song.artist}</h4>
              <audio src={song.audio} controls/>
              <button className="remove-btn" onClick={()=>deleteSong(song._id)}>Remove Song</button>
              
              </div> 
              
           
            </li>
          )
         })}
      </ul>
    </div>
  )
}

export default SongsList
