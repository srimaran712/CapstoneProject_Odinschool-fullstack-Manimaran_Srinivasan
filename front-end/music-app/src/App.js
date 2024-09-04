
import './App.css';
import Navbar from './Navbar';
import AppContainer from './AppContainer';
import Sidebar from './Sidebar';
import AudioComponent from './AudioComponent';
import React from 'react'
import { createContext } from 'react';
export const songContext=createContext()

function App() {
  const [songId,setSongId]=React.useState('')
  return (
    <songContext.Provider value={songId}>

    
    <div className="App">
      <Navbar searchSong={setSongId}/>
      <AppContainer/>
      <Sidebar/>
      <AudioComponent/>
    </div>
    </songContext.Provider>
  );
}

export default App;
