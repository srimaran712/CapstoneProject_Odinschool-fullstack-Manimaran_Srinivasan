import React from 'react'
import {artists} from './artist'
import vinylImage from './young-fashionable-man-holding-vinyl-in-front-of-face_1-removebg-preview 1.png';


const AppContainer = () => {
  return (
    <div className="main-container">
      <div className="hero">
        <div><h2 className="hero-heading">Hi, I'm Manimaran</h2>
        <p className="hero-content">A simple music player to get to enjoy your Songs </p></div>
        <div><button className="hero-btn">Play now</button></div>
        <div><img src={vinylImage} style={{height:"300px"}} /></div>
      </div>
       <h2 className="top-artist-text" style={{margin:"5px 10px",fontFamily:'Poppins',letterSpacing:'1px'}}>Top artists</h2>
      <div className="top-artists">
       
         {artists.map((artist)=>{
            return(
                <div key={artist.id} className="artist-info">
                    <img src={artist.artistImage} alt={artist.artistName} style={{width:"200px",height:"200px",border:"none"}} />
                    <h3 className="artist-title">{artist.artistName}</h3>
                </div>
            )
         })}
      </div>
    </div>
  )
}

export default AppContainer
