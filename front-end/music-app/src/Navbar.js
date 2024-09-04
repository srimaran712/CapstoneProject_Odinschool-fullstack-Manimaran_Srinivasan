import React from 'react'




const Navbar = ({searchSong}) => {
  const [search,setSearch]=React.useState('')
const handleClick=(e)=>{
  e.preventDefault()
  searchSong(search)
}
  
  return (
    <div className="navbar">
      <div className="logo">TuneFlow</div>
      
        <input type="text" value={search}  className="search" onChange={(e)=>setSearch(e.target.value)}/>
      
      
        <button className="search-btn" onClick={handleClick}>search</button>
      
    </div>
  )
}

export default Navbar
