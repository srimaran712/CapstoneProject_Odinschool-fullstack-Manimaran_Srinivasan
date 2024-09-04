import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState,useEffect} from 'react'
import axios from 'axios'




const Sidebar = () => {
  
    const [songs,setSongs]=useState([])

    const fetchSongs=async()=>{
        try{
            const response= await axios.get('https://capstoneproject-odinschool-fullstack.onrender.com/songs')
            
            setSongs(response.data.Songs)
        }catch(error){
            console.log(error)
        }
       
    }
    useEffect(()=>{
        fetchSongs()
    },[])
  return (
    
    <div className="sidebar">
      <h2 className="side-heading">Track lists</h2>

      <ul className="song-items">
        {songs.map((song)=>{
            return(
                <li className="song-item" key={song._id} onClick={(e)=>{
                  e.preventDefault()
                  console.log('clicked')
                  
                }}>
                    <div className="song-box">
                    <div className="song-image"><img src={song.image} alt={song.title} style={{width:"65px",height:"65px",border:"none"}}/></div>
                    <div className="song-details"><h4 className="song-title">{song.title}</h4>
                    <h6 className="song-artist">{song.artist}</h6></div>
                    </div>
                    
                    <div className="song-wish-icon"><FavoriteIcon/></div>
                </li>
            )
        })}
      </ul>
    </div>
    
  )
}

export default Sidebar
