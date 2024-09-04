import React from 'react'
import axios from 'axios'
import {useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";

import AudioPlayer from 'react-h5-audio-player';
import './App.css'
import { AiFillFastForward,AiFillFastBackward } from "react-icons/ai";
import { songContext } from './App';





const AudioComponent = () => {
  const songName=useContext(songContext)
  console.log(songName)
  const [songs,setSongs]=useState([])
  const[index,setIndex]=useState(0)
  const [currentSong,setCurrentSong]=useState(null)
  const[isPlaying,setIsPlaying]=useState(false)
  




  const fetchSongs=async ()=>{
         try{
          const response =await axios.get('https://capstoneproject-odinschool-fullstack.onrender.com/songs')
            setSongs(response.data.Songs)
            
           
         }
         catch(error){
          console.log(error)
         }
  }
  useEffect(()=>{
    fetchSongs()
  },[])

  useEffect(()=>{
    const ClickedSong= songs.find((s)=>s.title===songName)
    if(ClickedSong){
      setCurrentSong(ClickedSong)
    }else{
      setCurrentSong(songs[index])
    }
    
    
  },[songs,index])
  //const playSong=()=>{
   // if (audioRef.current) {
    ////  if (isPlaying) {
     
         // Pause the audio
       //  setIsPlaying(false)
      //} else {
        //audioRef.current.play();
        // Play the audio
       // setIsPlaying(true)
      //}
      ; // Toggle the play/pause state
    //}
 // }
 
 
 
 



const handleNext = () => {
  setIndex((prevIndex) => (prevIndex + 1) % songs.length);
};

const handlePrev = () => {
  setIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
};

 
  return (
    <div className="audio">
      {currentSong?(
        <div className="audio-box">
         
          <motion.img src={currentSong.image} alt={currentSong.title} style={{width:"80px",height:"80px",borderRadius:"100px",marginLeft:"1rem",border:"3px solid linear-gradient(90deg, rgba(62,55,179,1) 0%, rgba(140,73,162,1) 41%, rgba(222,163,23,1) 91%, rgba(187,101,133,1) 100%)"}} animate={{rotate: -180}}  transition={{ repeat: Infinity,duration:2,times: [0, 0.1, 0.9, 1] }}/>
          <motion.h4 className="audio-title" animate={{scale:1}} transition={{repeat:Infinity}}>{currentSong.title}</motion.h4>
          <div className="buttons">
           <div> <button onClick={handlePrev} className="control-btn"><AiFillFastBackward/></button></div>
            <AudioPlayer
            autoPlay
            src={currentSong.audio}
            onPlay={() => console.log('Playing')}
            onPause={() => console.log('Paused')}
            onEnded={handleNext}
            showJumpControls={false}
            showFilledVolume={true}
            showFilledProgress={true}
            
          />
            
         <div>   <button onClick={handleNext} className="control-btn"><AiFillFastForward/></button></div>
            </div>
            
            
        
      
         
        </div>
           
      ):(<p>loading....</p>)}
      

    </div>
  )
}

export default AudioComponent
