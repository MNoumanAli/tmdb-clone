import React from 'react'

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <p className='welcome'>Welcome.</p>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <div className='input'>
            <input className='hero-input' type="text"  placeholder='Search for movie, tv show, person......'/>
            <button className='search-btn'>Search</button>
        </div>
    </div>
  )
}

export default Hero