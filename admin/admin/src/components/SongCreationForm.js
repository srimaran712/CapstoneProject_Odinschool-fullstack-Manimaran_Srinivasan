import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const SongCreationForm = () => {
  const [songTitle,setSongTitle]=useState('')
  const [movieName,setMovieName]=useState('')
  const [artist,setArtist]=useState('')
  const [genre,setGenre]=useState('')
  const [imgUrl,setImgUrl]=useState('')
  const [audioUrl,setAudioUrl]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit=async (e)=>{
    e.preventDefault()
try{
  const response=await axios.post('https://capstoneproject-odinschool-fullstack.onrender.com/songs',{
    songTitle,
    movieName,
    artist,
    genre,
    imgUrl,
    audioUrl
  })
  setMessage(response.data.message)
  setTimeout(()=>{
    setMessage('')
    setArtist('')
    setSongTitle('')
    setMovieName('')
    setGenre('')
    setImgUrl('')
    setAudioUrl('')
  },3000)

}catch(error){
  console.log(error)
}
  }
  return (
    <div className="songs-container">
      
      <form className="form-box" onSubmit={handleSubmit}>
      <h1 className="heading">Add Your favorite songs on the list</h1>
        <div className="box box-1">
           <div >
         <label htmlFor='songTitle'>Song title</label><br/>
         <input type="text" value={songTitle} onChange={(e)=>{
          setSongTitle(e.target.value)
         }}/>
            </div>  

            <div >
         <label htmlFor='movieName'>Movie Name</label><br/>
         <input type="text" value={movieName} onChange={(e)=>{
          setMovieName(e.target.value)
         }}/>
            </div> 



        </div>


        <div className="box box-2">
            
        <div >
         <label htmlFor='artist'>Artist Name</label><br/>
         <input type="text" value={artist} onChange={(e)=>{
          setArtist(e.target.value)
         }}/>
            </div>  

            <div >
         <label htmlFor='genre'>Genre</label><br/>
         <input type="text" value={genre} onChange={(e)=>{
          setGenre(e.target.value)
         }} />
            </div> 

        </div>

        <div className="image-box">
            <label htmlFor='imageUrl' >ImageUrl</label><br/>
            <input type="url" className="image-url" value={imgUrl} onChange={(e)=>{
          setImgUrl(e.target.value)
         }} />

        </div>
        <div className="audio-box">
            <label htmlFor='AudioUrl' >AudioUrl</label><br/>
            <input type="url" className="audio-url" value={audioUrl} onChange={(e)=>{
          setAudioUrl(e.target.value)
         }} />
            
        </div>
        <div>
            <button className="add-btn" type="submit">Add New song</button>
        </div>
      </form>
      <p className="message">{message}</p>
    </div>
  )
}

export default SongCreationForm
